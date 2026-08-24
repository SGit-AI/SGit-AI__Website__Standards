/* standards.sgit.ai — the citation resolver (T4).
   Reads one file, /eu-ai-act/eu-ai-act.json, which is rule 1 of the tool contract: read
   the published contract, not a vault's internals. No dependencies, no build step.

   The design rule that matters is in resolve(): an input that does not normalise to a
   known alias returns NOT FOUND together with the canonical form that was tried. It does
   not fall back to a nearest match. A resolver that silently resolves to the wrong
   provision is worse than one that fails, because the failure is the only signal a
   reader gets that a citation was wrong. */
(function () {
  'use strict';
  var box = document.getElementById('cite');
  var out = document.getElementById('out');
  if (!box || !out) return;

  var DATA = null, ERR = null;
  fetch('../eu-ai-act/eu-ai-act.json')
    .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(function (j) { DATA = j; render(box.value); })
    .catch(function (e) { ERR = e; render(box.value); });

  var pad = function (n, w) { return String(parseInt(n, 10)).padStart(w, '0'); };

  /* Six input forms -> one canonical alias. Roman numerals in annex references are kept
     as written because the instrument writes them that way; everything numeric is
     zero-padded so aliases sort. */
  function normalise(raw) {
    var s = String(raw || '').trim().toLowerCase().replace(/\s+/g, ' ');
    if (!s) return null;
    if (/^[0-9a-f]{16}$/.test(s)) return { kind: 'hash', key: s };
    if (/^(art|rec|anx)-/.test(s)) return { kind: 'alias', key: s };
    var m;
    /* Annex III 5(b) / annex iii point 5(b) */
    m = s.match(/^annex\s+([ivxl]+)[\s,]*(?:point\s*)?(\d+)\s*\(?([a-z])?\)?$/);
    if (m) return { kind: 'alias', key: 'anx-' + m[1].toUpperCase() + '-pt-' + pad(m[2], 2) + (m[3] ? '-' + m[3] : '') };
    /* recital 60 */
    m = s.match(/^recital\s*(\d+)$/);
    if (m) return { kind: 'alias', key: 'rec-' + pad(m[1], 3) };
    /* Article 26(5)(d) / art. 26(5) / 26(5) / article 99 */
    m = s.match(/^(?:articles?|art\.?)?\s*(\d+)\s*(?:\(\s*(\d+)\s*\))?\s*(?:\(\s*([a-z])\s*\))?$/);
    if (m) {
      var a = 'art-' + pad(m[1], 3);
      if (m[2]) a += '-para-' + pad(m[2], 2);
      if (m[3]) a += '-pt-' + m[3];
      return { kind: 'alias', key: a };
    }
    return { kind: 'unparsed', key: s };
  }

  function find(n) {
    if (!DATA || !n) return null;
    return DATA.provisions.filter(function (p) {
      return n.kind === 'hash' ? p.positional_hash === n.key
           : n.kind === 'alias' ? p.alias === n.key
           : p.citation.toLowerCase().indexOf(n.key) !== -1;
    })[0] || null;
  }

  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  };

  function render(raw) {
    if (ERR) {
      out.innerHTML = '<div class="evbox ev-warn"><span class="evtag">Unavailable</span><p>Could not load the ' +
        'instrument endpoint — <a href="../eu-ai-act/eu-ai-act.json">open it directly</a>. ' +
        '(' + esc(ERR.message) + ')</p></div>';
      return;
    }
    if (!String(raw || '').trim()) { out.innerHTML = ''; return; }
    if (!DATA) { out.innerHTML = '<p class="dim">Loading the instrument…</p>'; return; }

    var n = normalise(raw), hit = find(n);
    if (!hit) {
      out.innerHTML = '<div class="evbox ev-warn"><span class="evtag">Not found</span>' +
        '<p>Nothing in <b>' + esc(DATA.instrument.title) + '</b> resolves to <code>' +
        esc(n && n.key ? n.key : raw) + '</code>' +
        (n && n.kind === 'unparsed' ? ' — and that input did not parse into a citation form' : '') +
        '.</p><p>No nearest match is offered, deliberately: a resolver that silently resolves to the ' +
        'wrong provision is worse than one that fails. <a href="../eu-ai-act/provisions/index.html">' +
        'The provision index</a> lists every alias that exists.</p></div>';
      return;
    }
    var link = hit.page
      ? '<a href="../eu-ai-act/provisions/' + esc(hit.alias) + '.html">Open the provision page →</a>'
      : '<span class="dim">No page yet — the address is stable before the page exists, which is the ' +
        'point of deriving it from the position rather than the content.</span>';
    out.innerHTML =
      '<div class="prov' + (hit.page ? '' : ' unverified') + '">' +
        '<div class="cite">' + esc(hit.citation) + '</div>' +
        '<h3>' + esc(hit.title) + '</h3>' +
        '<p class="text">' + esc(hit.reading) + '</p>' +
        '<div class="meta">' +
          '<span class="hash hash-pos"><b>pos</b> ' + esc(hit.positional_hash) + '</span>' +
          '<span class="hash hash-con"><b>sha</b> ' + (hit.content_hash ? esc(hit.content_hash) : 'not computed') + '</span>' +
          '<span>alias <code>' + esc(hit.alias) + '</code></span>' +
          '<span>reading is <b>' + esc(hit.reading_provenance.split(' — ')[0]) + '</b></span>' +
          '<span>crosswalk edges: <b>' + hit.crosswalk.length + '</b></span>' +
        '</div>' +
        '<p style="margin:.7rem 0 0">' + link + '</p>' +
      '</div>';
  }

  box.addEventListener('input', function () { render(box.value); });
  box.value = box.value || 'Article 26(5)';
  render(box.value);
}());
