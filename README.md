# standards.sgit.ai — laws, standards and frameworks as addressable provisions

A standard is only useful when a claim can point at a named provision in a real
instrument instead of asserting one. This site publishes the method that turns an
instrument into a graph of addressable provisions, the instruments modelled that way so
far, and the vaults that deliver them.

**One instrument is modelled. One.** The method is published so that the second is cheap
— and so that the first can be checked.

Live site: https://standards.sgit.ai (GitHub Pages, deployed from `dev`).

## The two claims the front page opens with

1. **The three-way distinction.** This site is called *standards* and is roughly 72% law,
   20% framework, 8% actual standards. Laws bind directly; frameworks bind only when
   something else points at them; standards bind by certification. The distinction leads
   because the name overstates a third of what is here, and that is better as the opening
   argument than as the first error. Every instrument page carries a **LAW / STANDARD /
   FRAMEWORK** label — and CI fails the build if one does not.
2. **The thesis.** *"A risk in a register points at a named obligation in a real
   instrument instead of being asserted."*

## Structure

- `index.html` — front page, with a markdown twin at `index.md`
- `method/` — **built first**: the grammar, the two-hash scheme, bridges-not-merges, the
  citation scheme, the grounding ladder. The only material here that is itself the
  product rather than a mapping of somebody else's text
- `instruments/` — the index, the eight-section folder shape, and the licensing table
- `eu-ai-act/` — the one modelled instrument: 1,523 nodes, four provision pages, the
  worked example, and a status page stating both real weaknesses
- `gdpr/`, `iso-27001/`, `iso-31000/` — honest stubs. There is no GDPR graph; ISO text
  cannot be republished; ISO 31000 has zero occurrences in the source material
- `subsets/` — the provisions across N instruments that bear on one real problem
- `vaults/` — the delivery surface, the twelve published vaults, and key discipline
- `tools/` — the tool/vault contract and five tools, one of which ships here
- `agents/` — the machine surface: versioned JSON endpoints and the epistemic rule
- `shipped/` — what is not built, unsoftened: nine gaps and eight tensions
- `documents/` + `briefs/` — the source documents, raw markdown as the source of truth
- `about/participant.html` — the disclosure, and six situations where this approach loses
- `network/`, `admin/` — boundaries with the sibling sites; comms, versions, build tooling
- `admin/build/chrome.py` — the single definition of nav and footer, applied everywhere
- `admin/build/validate.js` — the five-check pre-release gate
- `assets/site.css` — shared stylesheet (sgit.ai design language)

## Release process

1. Bump `admin/build/version.txt` (vX.Y.Z, **exactly once per release**) and add a row to
   `admin/versions.html`; update `admin/comms.html`.
2. `python3 admin/build/chrome.py` — propagates the version badge and any nav/footer
   change to every page, and stamps `llms.txt`, `llms-full.txt` and `index.md`.
3. `node admin/build/validate.js`
4. `git commit -am "site vX.Y.Z: ..." && git push origin dev`

Every push to `dev` runs `.github/workflows/deploy-pages.yml`: **validate → auto-tag
(`vX.Y.Z`, verified against `version.txt` and the commit subject, next-minor enforced) →
deploy to GitHub Pages**. Pull requests run validation only. Same pipeline as
[SGit-AI__Website](https://github.com/SGit-AI/SGit-AI__Website),
[SGit-AI__Website__NHI](https://github.com/SGit-AI/SGit-AI__Website__NHI) and
[SGit-AI__Website__PKI](https://github.com/SGit-AI/SGit-AI__Website__PKI), which is this
site's house pattern.

## What the validator checks

1. **Version agreement** — `version.txt` against every page badge, the versions table and
   the text twins, with each release appearing in the table exactly once.
2. **Internal links** — every relative `href`/`src` resolves. Fragments *and query
   strings* are stripped, because this site ships a resolver whose links carry a query.
3. **Canonical host** — every `rel="canonical"` and `og:url` is on the host in `CNAME`,
   and every page declares one.
4. **Key-leak tripwire** — the write prefix may be *discussed* in prose (explaining why a
   write key is never published requires naming it), but **key material after it fails
   the build in any file, always**, and read keys must be exactly 64 hex characters.
5. **Instrument labelling** — every instrument page carries a LAW/STANDARD/FRAMEWORK
   label and a republishable mark. Keeping this site's name was conditional on that, and
   a condition in the pre-release gate is one the build enforces rather than one somebody
   remembers on the fourth instrument.

## Honesty

Zero crosswalks exist. There is no GDPR graph, no machine-readable control catalogue, and
no zip or SQLite export on any of the twelve published vaults on this estate. The EU AI
Act readings are derived from secondary sources and flagged as such, and operative text is
deliberately withheld from provision pages pending re-derivation from the authority.
Nothing here outputs a pass, a score, or a percentage of compliance. See `shipped/`.

## Licence

All site content CC BY 4.0 unless noted, attributed to Dinis Cruz with AI co-authorship.
Code under the repository licence. **The instruments themselves keep their own licences**
— and ISO/IEC standards cannot be republished at all; see `instruments/index.html`.
