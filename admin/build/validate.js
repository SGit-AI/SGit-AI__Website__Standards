#!/usr/bin/env node
// standards.sgit.ai pre-release gate. Run from anywhere: node admin/build/validate.js
//
// Ported from pki.sgit.ai — this site's house pattern — with two additions the brief
// pack requires (06__ "extend its key-leak CI check to reject sgit_vk1_ anywhere").
//
// Checks, in order:
//   0. nothing the site needs is invisible to git — a file can be present in the working
//      tree and .gitignored, in which case `git add -A` skips it silently and CI runs
//      against a tree that is missing it. That is not hypothetical: the stock Python
//      .gitignore this repo started from carries `build/`, which swallowed the whole of
//      admin/build/ — this validator included — and the first CI run failed on a
//      validator that was not there. Local validation had passed, because it ran against
//      the working tree rather than the commit.
//   1. version agreement — admin/build/version.txt vs every page's version badge, the
//      versions table, llms.txt, llms-full.txt and index.md
//   2. internal links — every relative href/src in every .html file resolves to a file
//      in the tree (fragments AND query strings stripped, because this site ships a
//      citation resolver whose links carry ?cite=; external and mailto links skipped)
//   3. canonical host — every <link rel="canonical"> and og:url points at the host in
//      CNAME, and every page declares one
//   4. key-leak tripwire — the prefix may be discussed; key material may not exist.
//        a. sgit_vk1_ followed by key-shaped characters — a WRITE key. Rejected always.
//           This is the check 06__ asks for, and the one that would have caught the
//           estate's one disclosed incident, where a vault key reached a repo's history.
//        b. sgit_rk1_ followed by key-shaped characters must be exactly 64 hex. A
//           published read key is deliberate and safe; a malformed one usually means
//           somebody pasted the wrong thing.
//        c. a >=20-char passphrase joined by a colon to a uuid-shaped id (pki's original
//           shape), kept because the two sites share a stylesheet and a build.
//   5. instrument labelling — the condition on keeping this site's name (00__ §3): every
//      instrument page carries a LAW / STANDARD / FRAMEWORK label in its header. A page
//      under an instrument slug with no .lbl is the specific mistake worth catching.
// Any failure exits 1: no tag, no publish.
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const errors = [];

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name === '.git' || name === '.github' || name === 'node_modules' || name === '.sg_vault') continue;
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}
const rel = f => path.relative(ROOT, f);

const files = walk(ROOT);
const htmlFiles = files.filter(f => f.endsWith('.html'));

// --- 0. nothing the site needs is invisible to git -------------------------
// Only meaningful inside a git checkout; a no-op anywhere else (an exported tree, a
// downloaded zip), which is why it is wrapped rather than assumed.
try {
  const ignored = require('child_process')
    .execSync('git ls-files --others --ignored --exclude-standard', { cwd: ROOT, encoding: 'utf8' })
    .split('\n').filter(Boolean);
  for (const f of ignored) {
    errors.push(`${f}: present in the tree but IGNORED by .gitignore — it will not be ` +
                `committed, and CI will run without it`);
  }
} catch { /* not a git checkout, or git unavailable: skip */ }

// --- 1. version agreement -------------------------------------------------
const VERSION = fs.readFileSync(path.join(ROOT, 'admin/build/version.txt'), 'utf8').trim();
if (!/^v\d+\.\d+\.\d+$/.test(VERSION)) {
  errors.push(`version.txt does not carry a vX.Y.Z version: "${VERSION}"`);
}
for (const f of htmlFiles) {
  const t = fs.readFileSync(f, 'utf8');
  for (const m of t.matchAll(/class="ver"[^>]*>(v\d+\.\d+\.\d+)</g)) {
    if (m[1] !== VERSION) errors.push(`${rel(f)}: version badge ${m[1]} != ${VERSION}`);
  }
}
for (const extra of ['llms.txt', 'llms-full.txt', 'index.md']) {
  const t = fs.readFileSync(path.join(ROOT, extra), 'utf8');
  if (!t.includes(VERSION)) errors.push(`${extra} does not mention ${VERSION}`);
}
const versTable = fs.readFileSync(path.join(ROOT, 'admin/versions.html'), 'utf8');
if (!versTable.includes(`class="vnum">${VERSION}<`)) {
  errors.push(`admin/versions.html has no row for ${VERSION}`);
}
// each release appears exactly once — a blanket version-bump sed that touches the
// history table produces duplicates, which shipped once on the NHI site
const rows = [...versTable.matchAll(/class="vnum">(v\d+\.\d+\.\d+)</g)].map(m => m[1]);
for (const v of rows) if (rows.filter(x => x === v).length > 1) {
  errors.push(`admin/versions.html lists ${v} more than once`);
  break;
}

// --- 2. internal links ----------------------------------------------------
for (const f of htmlFiles) {
  const t = fs.readFileSync(f, 'utf8');
  const dir = path.dirname(f);
  for (const m of t.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = m[1].split('#')[0].split('?')[0];
    if (/^(https?:|mailto:|data:|\/\/)/.test(m[1]) || target === '') continue;
    if (!fs.existsSync(path.resolve(dir, target))) {
      errors.push(`${rel(f)}: broken link -> ${target}`);
    }
  }
}

// --- 3. canonical host ----------------------------------------------------
const HOST = fs.readFileSync(path.join(ROOT, 'CNAME'), 'utf8').trim();
if (!/^[a-z0-9.-]+$/.test(HOST)) errors.push(`CNAME does not carry a hostname: "${HOST}"`);
for (const f of htmlFiles) {
  const t = fs.readFileSync(f, 'utf8');
  const claimed = [
    ...[...t.matchAll(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/g)].map(m => m[1]),
    ...[...t.matchAll(/<meta[^>]+property="og:url"[^>]+content="([^"]+)"/g)].map(m => m[1]),
  ];
  for (const url of claimed) if (!url.startsWith(`https://${HOST}/`)) {
    errors.push(`${rel(f)}: canonical/og:url is not on ${HOST} -> ${url}`);
  }
  if (!/rel="canonical"/.test(t)) errors.push(`${rel(f)}: no canonical link`);
}

// --- 4. key-leak tripwire -------------------------------------------------
// The brief asks for "reject sgit_vk1_ anywhere". Taken literally that is unworkable
// here: this site prints read keys on purpose (that is what /vaults/ is for) and it
// discusses the write prefix constantly, because explaining why a write key is never
// published requires naming the thing that is never published. A check that fired on
// every mention would be switched off within a week, which is worse than no check.
//
// So the rule is the one that actually protects, and it is stricter where it matters:
// the PREFIX may appear in prose; KEY MATERIAL after it may not. A real credential is a
// prefix followed by 64 hex characters, so anything with 8+ key-shaped characters after
// a prefix is treated as an attempted key and rejected — and a read key that has key
// material after it must be exactly the right shape, because a malformed one usually
// means somebody pasted the wrong thing.
//
//   sgit_vk1_          in prose         -> allowed
//   sgit_vk1_...       in an example    -> allowed
//   sgit_vk1_<8+ chars>                 -> REJECTED, always. This is the check 06__ asks
//                                          for, and it is what would have caught the one
//                                          disclosed incident on this estate: a write key
//                                          committed into a repository's history.
//   sgit_rk1_<64 hex>                   -> allowed; published deliberately
//   sgit_rk1_<anything else, 8+ chars>  -> REJECTED as malformed
const KEY_MATERIAL = /sgit_(vk1|rk1)_([A-Za-z0-9]{8,})/g;
const PASS_UUID = /[A-Za-z0-9_-]{20,}:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
let readKeysSeen = 0;
for (const f of files) {
  if (/\.(png|jpg|jpeg|gif|webp|ico|woff2?|zip|sqlite)$/.test(f)) continue;
  const name = rel(f);
  const t = fs.readFileSync(f, 'utf8');
  for (const m of t.matchAll(KEY_MATERIAL)) {
    if (m[1] === 'vk1') {
      errors.push(`${name}: WRITE KEY MATERIAL after the sgit_vk1_ prefix -> ${m[0].slice(0, 20)}… ` +
                  `— a write key must never appear in any published artefact`);
    } else if (!/^[0-9a-f]{64}$/.test(m[2])) {
      errors.push(`${name}: malformed read key (sgit_rk1_ must be followed by 64 hex chars) ` +
                  `-> ${m[0].slice(0, 24)}…`);
    } else {
      readKeysSeen++;
    }
  }
  if (PASS_UUID.test(t)) errors.push(`${name}: contains a passphrase:uuid-shaped credential`);
}

// --- 5. instrument labelling ----------------------------------------------
// 00__ §3: keeping the name "standards" is conditional on every instrument page carrying
// the LAW / STANDARD / FRAMEWORK label. Enforce the condition rather than remembering it.
const INSTRUMENTS = ['eu-ai-act', 'gdpr', 'iso-27001', 'iso-31000'];
for (const slug of INSTRUMENTS) {
  const idx = path.join(ROOT, slug, 'index.html');
  if (!fs.existsSync(idx)) { errors.push(`${slug}/index.html is missing`); continue; }
  const t = fs.readFileSync(idx, 'utf8');
  if (!/class="lbl lbl-(law|std|fwk|none)"/.test(t)) {
    errors.push(`${slug}/index.html: no LAW/STANDARD/FRAMEWORK label in the header`);
  }
  if (!/class="rep rep-(yes|no|part)"/.test(t)) {
    errors.push(`${slug}/index.html: no republishable YES/NO mark in the header`);
  }
}

// --- report ---------------------------------------------------------------
if (errors.length) {
  console.error(`validate: ${errors.length} error(s)`);
  for (const e of errors) console.error('  ✗ ' + e);
  process.exit(1);
}
console.log(`validate: OK — ${VERSION} on ${HOST}, ${htmlFiles.length} pages, nothing ignored, ` +
            `links resolve, ` +
            `${INSTRUMENTS.length} instruments labelled, no write-key material, ` +
            `${readKeysSeen} well-formed read key reference(s)`);
