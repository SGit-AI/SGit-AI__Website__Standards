# 06 — Site Architecture

## The house pattern

Copy **`pki.sgit.ai`** — the only site in the network with all six house markers, and the one whose raw-plus-curated split (`/documents/` markdown as source of truth beside rendered HTML) is exactly the verification surface `02__` §2 requires.

Add the `/llms-full.txt` pki lacks. Add two things no sibling has:

- **A per-instrument JSON endpoint**, because agents are half the audience.
- **A provision permalink resolver** (`04__` T4). No stable citation scheme exists anywhere on the estate today, and a standards site that cannot be cited has failed at its one job.

Take pki's build pipeline as-is: hand-written static HTML with programmatically injected chrome so it cannot drift; every push runs link checking, version consistency, canonical-URL verification and **key-leak detection**, then auto-tags and deploys. **Extend the key-leak check to reject `sgit_vk1_` anywhere** (`03__` §7).

---

## Page by page

### `/` — the front page
Two claims, in this order.

**First, the three-way distinction** — LAW vs STANDARD vs FRAMEWORK — because the site's name overstates one third of what it holds, and making that the opening argument converts the imprecision into a feature (`00__` §3). Use the corpus's own paragraph.

**Second, the thesis:** *"a risk in a register points at a named obligation in a real instrument instead of being asserted."*

Then the ladder in five lines (`05__` §7), and one honest sentence about scale: **one instrument modelled properly, the method published, more coming.** Do not imply a shelf.

### `/method/` — **build first**
`05__` in full. The grammar, bridges-not-merges, the two-hash scheme, authority anchoring, the subset method, the grounding ladder, and the named prior art. Publish the acceptance test and, later, the result of applying it.

This is the page that makes the site more than a link farm, and it is the only content that is unambiguously the project's own.

### `/<instrument>/` — one folder per instrument
Per the memo: *"a subfolder for each of the standards that we support."* Every folder has the same eight sections, so a reader learns the shape once:

```
/<instrument>/
  index            LAW|STANDARD|FRAMEWORK badge · issuer · in force since ·
                   amendments composed · republishable YES/NO · vault credential
  structure        the taxonomy, browsable
  concepts         defined terms
  provisions/<id>  the permalink target: text, both hashes, retrieval record,
                   analysis, crosswalk edges
  crosswalk        bridges out, with basis and strength
  worked-examples  the proof pages (01__ §4)
  vault            what is in it, how to open it, how to download the zip
  status           what is done, what is derived from secondary sources, what is stale
```

That last section is not optional. The AI Act material carries a self-flagged provenance weakness (`00__` §5) and the page must say so.

**Day one:** `/eu-ai-act/` complete, `/gdpr/` and `/iso-27001/` as honest stubs stating what exists and what does not. **`/iso-31000/` should be a single paragraph explaining that there is nothing yet and pointing at `risks.sgit.ai`.**

### `/subsets/<topic>/` — the sellable page type
`05__` §5. The provisions across N instruments that bear on one real problem. *"You almost recreate a small standard based on this."* Ship **`/subsets/agentic-access/`** first — the table already exists, spanning eight instruments.

This page type also sidesteps the ISO blocker: a subset cites and interprets, it never reproduces.

### `/vaults/` — the delivery surface
Every instrument vault: credential, size, node/edge counts, `PUBLIC.md` link, viewer link, and **the `dist/` zip and SQLite downloads**. Mirror the `sgit.ai/demos/vaults/` conventions rather than inventing new ones, and link back to the Catalogue vault as the estate-wide index.

State the mechanism plainly on this page — client-side decryption, the read key printed here, `postMessage` handshake, no write capability in any published credential. Readers of a standards site will ask.

### `/tools/` — `04__`
T1 crosswalk browser, T2 conformance calculator, T3 amendment differ, T4 citation resolver, T5 cross-vault search. Ship the contract (`04__` §2) as a documented page, not just as code.

**T2 carries a standing framing warning in its own header:** findings and unanswered questions, never a score, never a pass.

### `/agents/`
The machine surface. The grammar and edge list as JSON, the contract version, the per-instrument endpoints, the citation scheme, and the five reading rules from `04__` §2. Plus the epistemic rule that matters here: **an agent may report which provision a claim points at; it may not report that a requirement is met.** That is the difference between evidence and a compliance verdict, and the corpus draws it four times.

### `/shipped/`
`00__` §5, unsoftened. One instrument. Zero crosswalks. No control catalogue. No zip yet. No GDPR vault. Citations pending re-derivation from operative text.

### `/network/` and `/admin/`
The seven-site map (`07__` §6). `comms.html` with numbered asks (N1…) and tasks (T1…), `versions.html`, `about/participant.html`. Publish the build order unresolved with `08__`'s open questions and tensions visible.

---

## What is a page, what is a vault, what is both

| Thing | Site | Vault |
|---|---|---|
| The method, the grammar, the reasoning | **canonical** | mirrored for offline |
| Provision text and hashes | **mirrored as plain files** — this is the verification surface | canonical |
| The graph (JSON, SQLite, Turtle) | mirrored | **canonical** |
| Source bytes and retrieval records | linked | **canonical** |
| Apps and interactive views | rendered | **canonical** |
| Tool source code | **canonical** — it must be inspectable | copied into flagship vaults for offline use |
| Crosswalks | **mirrored** | canonical |
| Write keys | **never** | **never** — keys vault only (`03__`) |

The governing rule from `02__` §2: **nothing exists only in the vault that a reader would need in order to check a claim.**

---

## Naming conventions

- Instrument slugs: lowercase, hyphenated, no version — `eu-ai-act`, `gdpr`, `iso-27001`, `nis2`, `owasp-asvs`. Version lives in `MANIFEST.json` and in the `dist/` filenames.
- Vault names: `standards__<instrument-slug>` internally; human titles in the catalogue.
- Provision ids: the positional hash, with a human-readable alias — `/eu-ai-act/provisions/art-026-para-05`.
- Downloads: `<instrument>-v<n>.zip`, `<instrument>-v<n>.sqlite`. **Never overwrite a version.**

---

This document is released under the Creative Commons Attribution 4.0 International licence (CC BY 4.0).
