# 08 — Gaps, open questions and honest tensions

---

## 1. Must be built fresh — nothing in the corpus covers these

| # | Item | Why |
|---|---|---|
| **G1** | **Any crosswalk at all** | The corpus describes crosswalks beautifully — bridges-not-merges, `FrameworkReference` nodes, *"do this here, satisfy that there"* — and contains **zero completed mappings**. Named as obviously valuable and never done: AI Act ↔ GDPR, ISO 27001 ↔ SOC 2, GDPR ↔ NIS2 incident reporting. **G1 is the site's single biggest gap** |
| **G2** | **A control catalogue in machine-readable form** | OSCAL is admired from a distance. There is no controls file, no requirement schema instance, no JSON or YAML of anything. The only requirement-to-node binding anywhere is one illustrative line in an Issues-FS example: `{"source":"rem-1","type":"links_to","target":"NIST:IA-2"}` |
| **G3** | **The GDPR graph** | Two white papers describe how to build it. The 30 May brief says GDPR *"cannot be taken at face value"* and that the rulings, guidance and per-country variation **are** the graph. None of that layer is assembled. **Method, no artefact** |
| **G4** | **Zip and SQLite distribution** | Not one of the 12 published vaults offers an export. The memo's delivery mechanism is net-new across the entire estate |
| **G5** | **A stable citation scheme** | No permalink scheme for an individual provision exists anywhere. Table stakes for a site whose value is being citable |
| **G6** | **A timeline / dates structure** | The corpus establishes the need — *"a graph that carries those dates as properties is materially more useful than one that carries only text"* — and then names four AI Act application dates in prose and models them nowhere |
| **G7** | **An amendment-detection pipeline** | *"The amendment is the business model"*, and there is no detection, no re-derivation trigger and no staleness monitor. The business model rests entirely on a mechanism that does not exist |
| **G8** | **Certification, accreditation and attestation mechanics** | A site called "standards" will be asked how an attestation actually gets issued. `conformity assessment` appears in 3 files; `supervisory authority` in 4; `attestation` in 88 but almost entirely in the *cryptographic* sense (*"write is the attestation"*), not the audit sense |
| **G9** | **`PUBLIC.md` as a real convention** | It appears only in the sibling brief packs in `/root/out/`, **never in the source corpus** — and on only 2 of 12 live vaults. If this pack treats it as established, that comes from the packs, not the repos |

**Missing from disk entirely:** `briefs/07/07/` — including `v0.33.46__strategy-brief__sg-send-risk-acceptance-standards-crosswalk-two-differences-no-deny-revealed-appetite.md`, referenced twice in the corpus. It is the closest thing to a crosswalk document that ever existed. **Recover it before writing G1 from scratch.**

**Absent subject areas:** sector standards (ISO 26262, IEC 62304/MDR, DO-178C, rail, energy); non-EU/US jurisdictions (LGPD, PIPEDA/AIDA, China, India, Japan, the Council of Europe AI Convention).

---

## 2. Open questions worth publishing unresolved

Following the `pki.sgit.ai` convention of numbering open questions in public.

| # | Question | Where it stands |
|---|---|---|
| **Q1** | **Who owns the Article 26(5) worked example — `standards.` or `risks.`?** It is the best asset for both and already appears in the risks pack | Proposed: risks owns the register and the acceptance decision, standards owns the provision and the arithmetic. **Needs a decision, not a convention** |
| **Q2** | **Does the vault or the repo hold the canonical text?** The memo says vault; a 31 July brief changed position to *"vault authors, repo publishes"* on the ground that **clear text is what enables verification** | `02__` §2 proposes both with a division of labour. This is a real architectural fork and should be published as one |
| **Q3** | **Can the ontology hold a standard it cannot quote?** The whole model assumes provision text as a node property. For ISO that text cannot be stored or published. Is a hollow provision node — id, title, citation, no text — still useful, or a different thing? | Unaddressed anywhere. **The ISO folder cannot be designed until this is answered** |
| **Q4** | **What is a bridge's strength, formally?** A crosswalk that can only say *yes* is wrong or useless. The corpus has the phrase *"shades of compliance"* and no scale | Blocks the crosswalk browser (`04__` §5) |
| **Q5** | **When does a composed instrument stop being trustworthy?** Regulation Graph composes 2024/1689 with 2026/1744 because no official consolidation exists — genuinely valuable, and also **an unofficial text that looks official**. What is the labelling obligation? | W3 found *"a text that never was the law"* in the wild. The site must not become another instance |
| **Q6** | **Was the exposed vault key rotated, or only removed from history?** | Open. `03__` §5. Per the estate's own doctrine, removal alone does not undo distribution of already-fetched ciphertext. **Answer this before publishing another vault** |
| **Q7** | **Does the method survive instrument two?** *"whether the same structure holds an ISO standard, a compliance framework and an internal policy without special cases"* | Untested. GDPR is the test |
| **Q8** | **Should the site be multilingual?** Authority anchoring gives *"one identifier and many labels"* free, and EU instruments ship in 24 languages against the same structure | A real differentiator nobody has claimed. Also a maintenance commitment |
| **Q9** | **Is `standards` the right name?** | `00__` §3 recommends keeping it *conditional on* the LAW/STANDARD/FRAMEWORK labelling. `regulations.sgit.ai` is the honest runner-up |

---

## 3. Honest tensions

Hold these; do not resolve them prematurely.

1. **The site is called "standards" and is three-quarters law.** Managed by making the distinction the opening argument — but it remains a tension, and a reader who notices it should find it already named rather than concealed.

2. **The best content and the biggest legal blocker are the same subject.** ISO is what people search for and the one thing that cannot be published. The interesting response is a page about the paywall itself; the boring one is a thin stub.

3. **Encryption is the product and clear text is what enables verification.** `02__` §2. A vault-native project whose flagship site needs greppable, archivable, citable text has genuinely competing goods here.

4. **"The amendment is the business model" — and the flagship vault has two commits.** The single most valuable property (change over time) is the one least demonstrated. Regulation Graph composes the amendment *in* rather than tracking it as a change, so the history that is the product is precisely what is missing.

5. **The corpus criticises secondary sourcing and is itself secondarily sourced.** It says so, twice, unprompted. Publishing that self-criticism is right; shipping citations that are still secondary is not.

6. **Evidence, not verdicts — but people want verdicts.** The corpus refuses the compliance-verdict posture four times, and the commercial framing is *"Standards As A Service"* at *"ten or twenty thousand a pop"*. Buyers of that will ask whether they pass. **The refusal is the differentiator; it is also the sales objection.** Name it rather than discovering it later.

7. **A keys vault concentrates every credential into one artefact.** Right trade, real single point of failure, and the recursion — what protects the protector — must be answered outside sgit (`03__` §6).

8. **One instrument done properly is a stronger position than five done thinly, and reads as less.** The corpus's own conclusion: *"one instrument, done properly, with its working shown and its verification openly incomplete."* Resist filling the shelf.

---

## 4. Loose ends worth an hour each

- **Recover `briefs/07/07/`.** The crosswalk brief referenced twice and absent from disk.
- **Resolve the Article 99 third tier** — 1% or 1.5%. Check the operative text.
- **Answer Q6** and record it as `audit/` entry one.
- **Reconcile the catalogue's own metadata.** The HTML lists 12 vaults, `index.md` lists 11 (omits Private Health Score `zc6abngv`), `llms-full.txt` omits three. Automated derivation is asserted and not holding.
- **Add `PUBLIC.md` to the other 10 vaults.** Risk Graph Explorer is the canonical template.
- **Decide about the `dev.` hosts.** Both the viewer and the ciphertext API are `dev.`-prefixed. A production standards site depending on dev infrastructure is a durability risk worth naming now.
- **Check the sub-vault mount path.** The technique that would let instrument vaults nest under a parent is *"a trial-only stub in current code."*

---

This document is released under the Creative Commons Attribution 4.0 International licence (CC BY 4.0).
