# 00 — The Brief: `standards.sgit.ai`

**Version** v0.33.62 · 23 August 2026
**From** Dinis Cruz (voice memo, 23 Aug 2026), via the SG/Send Librarian
**To** the agent commissioned to build `standards.sgit.ai` and its vaults
**Licence** CC BY 4.0 — but read `07__boundaries-and-licensing.md` first, because **one of the four named standards cannot legally be republished at all**

---

## 1. The commission, in the lead's own words

> *"a new home for all the standards and the vaults that we have created… really create a good pass, even if just light, but in detail, of a lot of the standards that we need to start referencing from the projects that we have."*

Named: **ISO 27000**, **the risk standard (ISO 31000)**, **the EU AI Act**, **GDPR**.

And the architecture, which is the more important half of the memo:

> *"we have a website that we use to connect the dots and create the materials and have the base documents, but the graphs and the data and all of that will be stored in vaults that can be easily used and consumed, and that becomes almost a delivery mechanism… The vaults should have all of the source materials, all of the data, all of the JSONs, all of the materials, and some of the tools, and **the website becomes a projection of that**."*

Plus three specifics: **a subfolder per standard**; **explore tools and pages outside the vaults that consume materials from the vault**; and **a private vault holding the write keys to all the other vaults** — *"the vault keys over the vault"*.

All of that is specified: architecture in `02__`, tools in `04__`, the keys vault in `03__`.

---

## 2. Four corrections to the premise, up front

None of these are quibbles. Each changes what gets built.

**(a) The four named standards are not four comparable quantities.** Measured:

| Named | Substantive words in corpus | Depth | Verdict |
|---|---:|---|---|
| **EU AI Act** | **59,116** | **deep** — ontology, node/edge grammar, worked example end-to-end, shipped vault | Build first. Not arguable. |
| **GDPR** | **32,802** | substantial, but see (c) | Build third, and it is bigger than it looks |
| **ISO 27000 family** | ~name-checks across 44 files, **six controls of actual content** | mentioned | See (b) — there is a legal blocker |
| **ISO 31000 / ISO 27005** | **ZERO occurrences.** Verified case-insensitively, with and without spaces and slashes | absent | **There is nothing to publish** |

**(b) ISO text is copyrighted and sold. You cannot republish it.** The corpus's own vault-per-standard brief lists "ISO 27000" as a vault to build without once mentioning this. It is a licensing blocker, not a writing task. An ISO folder on this site can hold a *crosswalk*, a *reading guide*, clause **references**, and the project's own control interpretations — it cannot hold the standard. Say so on the page; it is a more interesting page than a copy of the text would have been.

**(c) There is no GDPR vault.** The memo says *"we've done a lot of work on the GDPR… there's a vault"*. Verified against eight independent sources — the catalogue HTML, its raw `index.md`, `llms.txt`, `llms-full.txt`, `/demos/`, `/catalogue/`, `graphs.sgit.ai/v1/vaults/`, and web search. **GDPR appears nowhere as a vault.** The only GDPR mention on the whole network is a passing framework name-check on `riskmandate.ai`. Treat it as commissioning work, not an asset to reuse.

The *"consolidates all the stuff"* description is accurate — but it describes the **AI Act vault**, which composes Regulation (EU) 2024/1689 with amending Regulation (EU) 2026/1744 *"because no official consolidation exists yet"*. That is the real asset, and it is excellent.

**(d) What the lead probably wants from "the risk standard" already has its own site.** ISO 31000 is absent, but the project's own risk apparatus — the grounding ladder, RAMM, accepted-vs-acceptable, the plug profile — is substantial. That is **`risks.sgit.ai`**, which already has a brief pack. Do not rebuild it here. `07__` §6 has the boundary.

---

## 3. The name

The lead asked: *"I'm kind of thinking of calling it standards, unless there's a better name."*

**The honest evidence is against the word.** Classifying every instrument in the corpus by what it actually is:

| Type | Substantive words | Share |
|---|---:|---:|
| **LAWS** — EU AI Act, GDPR/UK GDPR, NIS2, DORA, CRA, HIPAA, PECR, CCPA, SOX, DPA 2018 | ~95,000 | **~72%** |
| **FRAMEWORKS** — OWASP, NIST, MITRE ATT&CK/ATLAS, BSIMM, CMMC, SLSA | ~26,000 | **~20%** |
| **STANDARDS** (formal, certifiable) — ISO 27001/27002/42001, SOC 2, PCI DSS, CycloneDX, SPDX, Akoma Ntoso | ~11,000 | **~8%** |

The corpus is three-quarters law. And the one document that draws the distinction draws it *against* the word:

> *"We see this pattern in cybersecurity broadly: **laws vs. frameworks vs. controls.** A law (like NIS2 or GDPR) states 'what' outcomes must be achieved… often without stating 'how.' The 'how' is found in frameworks like ISO 27002."* — `docs.diniscruz.ai`, 31 Mar 2025

**The recommendation: keep `standards.sgit.ai` — but only on one condition.**

The three-way distinction must be **the front page's first substantive claim**, and every instrument page must carry a **LAW / STANDARD / FRAMEWORK** label in its header. That converts the imprecision from the site's first error into its opening argument, reuses the corpus's own strongest framing paragraph, and preserves the *"Standards As A Service"* commercial line. It also fits the network's naming pattern — `graphs.` `risks.` `pki.` `newsroom.` `wardley-maps.` are all plural subject nouns, and `standards.` is the ordinary-language word for "referenceable normative document" whatever the issuer.

The runner-up, if you would rather be precise than familiar, is **`regulations.sgit.ai`** — it matches 72% of the content, both flagships, and the corpus's own most-used phrase, *"the regulation graph"* (19 files). Its cost is that it under-claims the OWASP and NIST material.

**Rejected: `compliance`.** The corpus refuses it four separate times in its own words — *"**Not a compliance product.** It exists to give risks an evidentiary anchor, not to tell an organisation whether it passes"* / *"Not a compliance verdict"* / *"the point is evidence, not compliance"*. Also rejected: `controls` (the corpus has almost no control content — `Control` is a proposed node type never instantiated) and `frameworks` (excludes both flagships).

---

## 4. The thesis

> **A standard is only useful when a claim can point at a named provision in a real instrument instead of asserting one.**

The corpus's own line, from the Regulation Graph vault: *"a risk in a register points at a named obligation in a real instrument instead of being asserted."*

Everything follows: provisions as addressable nodes, provenance hashes on the retrieved bytes, the evidence chain from measure to fact to finding, and the discipline that **an unanswered question is an output, not a blank**.

The second thesis, which justifies a *multi*-standard site rather than one good page:

> *"the AI standard already links to another of the standards… Map a second instrument and the edge resolves; map a third and two more resolve. **So each mapping increases the value of the ones already done.**"*

---

## 5. The honesty constraint

Every sibling site ships `/shipped/`. Here is what it must say:

- **One instrument is modelled. One.** Regulation Graph is a proof, not a library. **No cross-instrument mapping exists** — no AI Act ↔ GDPR, no ISO 27001 ↔ SOC 2, no GDPR ↔ NIS2. All three are named as obviously valuable; **zero are done.**
- **No crosswalk exists at all**, despite the corpus describing them beautifully. The one document that would have been closest is referenced twice and **is not on disk** — the entire `briefs/07/07/` directory is missing. Recover it or write it.
- **No control catalogue in any machine-readable form.** OSCAL is admired from a distance. The only requirement-to-node binding anywhere is one illustrative line in an Issues-FS example.
- **No zip export exists on any of the 12 published vaults.** The memo's distribution mechanism is net-new.
- **The GDPR graph does not exist.** Two white papers describe how to build it; nothing is assembled.
- **The AI Act material has a provenance weakness the corpus itself flags**: *"The question set is derived from the structure and subject matter of the named articles as described in **secondary sources** rather than from a clause-by-clause reading of the operative text."* And on itself: *"This brief describes the Article 10 change from secondary analysis, which is exactly the second-hand pattern it criticises elsewhere."* **Every article citation needs re-derivation from the operative text before publication.**
- **Nothing on certification, accreditation, auditor selection or how an attestation is actually issued.** A site called "standards" will be asked. `conformity assessment` appears in 3 files.

And the corpus's own warning, which applies to this site more than any other:

> *"Publishing security reviews and deployment guidance is useful; **implying regulatory readiness that has not been established is the easiest way to create an obligation nobody has met.**"*

---

## 6. The numbers

| | |
|---|---|
| **Corpus** | ~132,000 words of substantive normative material · 51 canonical source files, all verified on disk |
| **EU AI Act** | 59,116 words · 16 briefs across 4 clusters · 72 files mention it |
| **GDPR** | 32,802 words · 2 finished white papers · **0 artefacts** |
| **ISO 31000 / 27005** | **0 occurrences** |
| **Published vaults** | **12** · exactly **1** is standards/regulatory · **0** offer zip export · `PUBLIC.md` on **2 of 12** |
| **Regulation Graph** | 207 files · 14.9 MB · **1,523 nodes, 1,944 edges** — 113 articles, 500 paragraphs, 417 points, 180 recitals, 13 annexes, 68 definitions · 11 app views · **2 commits** |
| **Worked examples** | **11** concrete clause-level passes (`01__` §4) — the site's proof pages |
| **This pack** | 9 documents · manifest of **50 rows** — 19 Tier-0, 22 Tier-1, 3 Tier-2, 6 do-not-publish; **125,198 words** of Tier-0+1 local source, every path verified on disk · full 12-vault estate as JSON |

---

## 7. Build order

1. **`/method/` — how a regulation becomes a graph.** Counter-intuitive but correct: build the meta layer *first*. It already exists in publishable form (27,848 words across four files), it makes standards 2–N cheap, and **it is the only material that is itself the product rather than a mapping of somebody else's copyrighted text.** `05__` is the spec.
2. **`/eu-ai-act/` + its vault.** Point at the existing Regulation Graph vault (`73heuprz`) rather than rebuilding it. Fix its two real weaknesses: 2 commits with no amendment history, and citations derived from secondary sources.
3. **The keys vault.** Do this before vault 3, not after vault 10. `03__`. Escrowing the write key is *"a precondition of publishing rather than good practice"* — a published read key on a vault whose write key is lost leaves it **frozen: permanently readable, never updatable, never revocable, never correctable.**
4. **`/gdpr/` + its vault.** Net-new. The two white papers are method, not artefact.
5. **`/owasp/`** — the strongest candidate for the first non-law page: 15,002 words, deep, already public, **CC-licensed so no copyright problem**.
6. **`/iso-27001/`** — as a *crosswalk and reading guide*, never as the text. Lead with the licensing constraint.
7. **Zip distribution.** Net-new across the whole estate; the corpus specifies zip + SQLite as the formats.
8. **`/shipped/`** — §5, unsoftened.

Publish the build order unresolved, with the open questions and honest tensions visible. `08__` supplies both.

---

This document is released under the Creative Commons Attribution 4.0 International licence (CC BY 4.0).
