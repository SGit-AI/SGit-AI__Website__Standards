# standards.sgit.ai — brief pack

**For:** the agent commissioned to build `standards.sgit.ai` and its vaults
**From:** Dinis Cruz (voice memo, 23 Aug 2026), via the SG/Send Librarian
**Version:** v0.33.62 · 23 August 2026
**Licence:** CC BY 4.0 — **read `LICENSE.md` before writing an ISO page.** One of the four named standards cannot legally be republished at all.

---

## What this is

A site for the normative instruments the projects need to reference, built on an architecture where **the vaults are the substrate and the site is a projection of them**. Plus a private keys vault sitting over the estate.

The memo's own words for the architecture:

> *"the website becomes a projection of that… The vaults should have all of the source materials, all of the data, all of the JSONs, all of the materials, and some of the tools."*

---

## Read in this order

| File | Words | What it does |
|---|---:|---|
| **`00__BRIEF.md`** | 1.9k | **Start here.** The commission, four corrections to the premise, the naming decision, the thesis, the honesty constraint, the build order |
| **`02__vault-as-substrate.md`** | 1.7k | **The load-bearing document.** Vaults as substrate, the vault/repo fork, the per-standard layout, the two-hash scheme, zip distribution |
| **`03__the-keys-vault.md`** | 1.5k | The private vault over the vaults — what goes in it, the threat model, rotation, and the recursion that must be answered first |
| `01__standards-inventory.md` | 2.0k | Instrument by instrument, with LAW/STANDARD/FRAMEWORK labels, depth ratings, **republishable yes/no**, and the 11 worked examples |
| `04__tools-outside-the-vault.md` | 1.1k | The pattern the memo asked to explore — with three working precedents, a contract, and five tools ranked |
| `05__cross-standard-layer.md` | 1.5k | `/method/` — the grammar, bridges-not-merges, authority anchoring, the subset method, the grounding ladder |
| `06__site-architecture.md` | 1.0k | Page by page, and what is a page vs a vault vs both |
| `07__boundaries-and-licensing.md` | 1.6k | The ISO blocker, the readiness trap, the citation problem, the do-not-publish list, network boundaries |
| `08__gaps-and-open-questions.md` | 1.4k | 9 build-fresh items, 9 open questions, 8 honest tensions |
| `09__source-manifest.csv` | 50 rows | Every source, tiered 0–3, with proposed page and publishability. **Every path verified on disk** |
| `vaults__published-estate.json` | 12 vaults | The full published estate — ids, read keys, sizes, categories, the presentation mechanism, and a security review |
| `LICENSE.md` | — | CC BY 4.0, and the republishability table that governs every instrument folder |

---

## Four corrections to the premise

These are not quibbles. Each changes what gets built.

**1. The four named standards are not four comparable quantities.** EU AI Act: **59,116 words**, deep, a shipped vault. GDPR: **32,802 words**, but method not artefact. ISO 27000: name-checks across 44 files, ~six controls of real content. **ISO 31000 / ISO 27005: zero occurrences anywhere in the corpus** — verified case-insensitively, with and without spaces and slashes.

**2. ISO text is copyrighted and sold — you cannot republish it.** The corpus's own vault-per-standard brief lists "ISO 27000" as a vault to build and never mentions this once. It is a licensing blocker, not a writing task. An ISO folder can hold crosswalks, clause references and interpretations; it cannot hold the standard.

**3. There is no GDPR vault.** Verified against eight independent sources. The *"consolidates all the stuff"* description is accurate but describes the **AI Act vault**, which composes Regulation (EU) 2024/1689 with amending Regulation (EU) 2026/1744 because no official consolidation exists. That vault is excellent; GDPR is net-new.

**4. "The risk standard" already has a site.** ISO 31000 is absent, but the project's own risk apparatus — grounding ladder, RAMM, accepted-vs-acceptable — is substantial, and it is `risks.sgit.ai`. Don't rebuild it here.

---

## On the name

The lead asked whether there is a better name than `standards`. **The evidence is against the word** — the corpus is ~72% law, ~20% framework, **~8% actual standards** — and the one document that draws the distinction draws it *against* "standards".

**Recommendation: keep `standards.sgit.ai`, on one condition** — the LAW / STANDARD / FRAMEWORK distinction becomes the front page's first substantive claim, and every instrument page carries the label in its header. That turns the imprecision into the opening argument rather than the first error, and preserves the *"Standards As A Service"* line.

Honest runner-up: **`regulations.sgit.ai`**. Rejected: `compliance` (the corpus refuses the word four times in its own voice), `controls` (there is almost no control content), `frameworks` (excludes both flagships).

---

## The three architectural decisions to make first

**1. Vault or repo for canonical text?** The memo says vault. A 31 July brief changed position to *"vault authors, repo publishes"* because **clear text is what enables verification**. `02__` §2 proposes both with a stated division of labour — the vault as substrate and delivery unit, the repo as verification surface and citable address, with the rule that *nothing exists only in the vault that a reader would need in order to check a claim*. **Publish this as an open fork; it is Q2.**

**2. Build `/method/` before any instrument.** Counter-intuitive, but it already exists in publishable form (27,848 words), it makes instruments 2–N cheap, and — given the ISO blocker — **it is the only material that is itself the product** rather than a mapping of someone else's copyrighted text.

**3. Build the keys vault before vault three, not after vault ten.** Escrow is *"a precondition of publishing rather than good practice"*. A published read key on a vault whose write key is lost leaves it **frozen: permanently readable, never updatable, never revocable, never correctable** — the worst possible property for a copy of the law with your name on it.

---

## One question that needs an answer before the next vault publishes

Regulation Graph's `PUBLIC.md` carries `<VAULT-KEY-REMOVED>` markers: a pre-publication audit found its **own vault key** and **another vault's plaintext credential** committed in history. Both were redacted, history rebuilt, re-audit clean. Handled and disclosed well.

**But the pages do not say whether that key was *rotated* or only *removed from history*.** By the estate's own doctrine — *"audit before the key, not after"* — removal alone does not undo distribution of ciphertext someone already fetched. This is a question for you, not a claim of a vulnerability. It is `08__` Q6, and answering it is the first entry in the keys vault's `audit/`.

---

## House pattern

Copy `pki.sgit.ai` — the only site with all six house markers, and whose raw-plus-curated split is exactly the verification surface `02__` §2 needs. Extend its key-leak CI check to reject `sgit_vk1_` anywhere. Add the `/llms-full.txt` pki lacks, a per-instrument JSON endpoint, and a **provision permalink resolver** — no stable citation scheme exists anywhere on the estate today, and a standards site that cannot be cited has failed at its one job.

Publish the build order unresolved, with `08__`'s open questions and tensions visible.

---

This file is released under the Creative Commons Attribution 4.0 International licence (CC BY 4.0).
