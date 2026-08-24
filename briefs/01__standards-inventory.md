# 01 — Standard by standard: what exists, what a folder would hold

Each entry carries the label the site must display — **LAW**, **STANDARD**, or **FRAMEWORK** — plus a depth rating and, critically, **whether the text can be republished at all**.

Depth: `deep` = real structured work (ontology, graph, clause-by-clause pass) · `applied` = used as a lens · `mentioned` = name-checked.

---

## 1. The instruments

### EU AI Act — Regulation (EU) 2024/1689, amended by (EU) 2026/1744
**LAW** · **deep** · 59,116 words · 16 briefs · **republishable: YES** (EU law, official Formex XML from CELLAR)

The flagship, and not arguable as build order 2. The amendment is in force since **27 July 2026**, and **no official consolidated version exists** — which is the market gap the vault fills by composing both texts.

Already shipped as the **Regulation Graph vault** (`73heuprz`): 207 files, 14.9 MB, 1,523 nodes, 1,944 edges — 113 articles, 500 paragraphs, 417 points, 180 recitals, 13 annexes, 68 definitions. Eleven app views including SQL (sql.js), RDF (Turtle export), a Cytoscape citation network with amendment halos, and an Article 9 Lab. Every node carries a SHA-256 of the retrieved bytes.

**What the folder adds:** the reading layer the vault does not have — the operator question set, the penalty analysis, the conformity gap, and the worked example. **What needs fixing:** two commits and no amendment-over-time history, and citations derived from secondary sources (see `00__` §5).

### GDPR — Regulation (EU) 2016/679 (+ UK GDPR, DPA 2018, PECR)
**LAW** · substantial-but-method-only · 32,802 words · **republishable: YES**

Two finished white papers and an assessment design. But be honest about what they are: the substantive GDPR work is either **(a) a method for representing GDPR**, or **(b) the project's own compliance posture**. Neither is a GDPR standards page.

And the corpus's own warning about why this is harder than the AI Act: GDPR *"cannot be taken at face value"* — the rulings, the regulator guidance and the per-country variation **are** the graph. None of that layer is assembled.

**There is no GDPR vault.** Verified against eight sources. This is build order 4 and it is real work.

### ISO/IEC 27000 family — 27001, 27002, 27036
**STANDARD** · **mentioned** · 44 files name it, ~six controls of actual content · **republishable: NO — 🚫 the text is copyrighted and sold**

This is the finding that reshapes the folder. You cannot publish ISO text. The corpus's vault-per-standard brief lists "ISO 27000" as a vault to build and never mentions it.

**What an ISO folder can legitimately hold:** clause *references* (numbers and titles are citable), the project's own control interpretations, a crosswalk to instruments that *are* publishable, a reading guide, and an honest page about why the standard costs money to read. **What it cannot hold:** the requirement text, Annex A verbatim, or a reproduction dressed as a summary.

The one real asset: **ISO/IEC 27036** has a worked supplier-control-as-node example — *"an ontology class for ComplianceRequirement… a node 'Supplier Security Assessment Conducted'… linked to our Supplier node with a relationship like `compliant_with` if indeed we have evidence that an assessment was done."*

### ISO 31000 / ISO 27005 — "the risk standard"
**STANDARD** · **absent** · **ZERO occurrences in the entire corpus** · **republishable: NO** (same ISO problem)

Verified case-insensitively, with and without spaces and slashes. There is nothing to publish and nothing to adapt. See `00__` §2(d): what the lead wants here is the project's own risk apparatus, which is `risks.sgit.ai`.

**Recommendation: do not ship an ISO 31000 page on day one.** A stub saying "not yet, and here is why" is more honest than 2,000 newly-written words pretending to be a consolidation.

### OWASP — Top 10, ASVS, SAMM, CRS, WSTG, Agentic Top 10, NHI Top 10
**FRAMEWORK** · **deep** · 15,002 words · **republishable: YES — CC-licensed**

**The strongest candidate for the first non-law page**, and it is being under-used. Deep treatment, already public, no copyright problem, and *Semantic OWASP* is a finished argument that has never been executed. Build order 5.

### The BOM / supply-chain stack — CycloneDX (ECMA-424), SPDX (ISO/IEC 5962:2021), VEX/CSAF (ISO/IEC 20153:2025), SLSA, OSCAL
**STANDARD** · applied · small but precisely cited · **republishable: mostly YES** (CycloneDX and SPDX are openly published; the ISO-numbered versions are the paywalled twins)

Small, accurate, and **genuinely graph-shaped** — these are the standards that are already data. A good early win.

### NIS2 (Directive (EU) 2022/2555) and DORA (Regulation (EU) 2022/2554)
**LAW** · applied · small · **republishable: YES**

DORA has the better artefact (a proper relevance assessment); NIS2 has the better precedent (**NIS2Onto**, named prior art).

### NIST — CSF 2.0, SP 800-53, AI RMF, SSDF, OSCAL
**FRAMEWORK** · applied but thin · **republishable: YES** (US government work, public domain)

**Its value is as a crosswalk target, not a page.** Everybody maps to NIST; that is what it is for.

### MITRE ATT&CK and ATLAS
**FRAMEWORK** · applied · **republishable: YES** with attribution

### Name-checks only
SOC 2, HIPAA, PCI DSS, CRA, PECR/ePrivacy, CCPA, SOX. Each needs writing from scratch. SOC 2 and PCI DSS carry their own licensing constraints.

### Legal-document standards — Akoma Ntoso, AKN4EU, ELI, ECLI, LegalRuleML, LKIF, CEN MetaLex
**STANDARD** · applied · **republishable: YES**

Under-rated and worth a page of their own: these are the standards for *representing* standards, which is exactly what this site does. They belong in `/method/`.

### Absent entirely
Sector standards (ISO 26262 automotive, IEC 62304 / MDR medical, DO-178C aviation, rail, energy). Non-EU/US jurisdictions (LGPD, PIPEDA/AIDA, China, India, Japan, the Council of Europe AI Convention). Certification, accreditation and attestation mechanics.

---

## 2. Ranked build order, with the evidence

| # | Folder | Why |
|---|---|---|
| **1** | **`/method/`** | Already publishable (27,848 words / 4 files), makes everything downstream cheap, and **the only material that is itself the product** rather than a mapping of somebody else's text |
| **2** | **`/eu-ai-act/`** | 59,116 words, a shipped vault, a complete worked example, and a live market gap (no consolidated version exists anywhere) |
| **3** | **The keys vault** | Not a folder, but it belongs here in sequence — before vault 3, not after vault 10. `03__` |
| **4** | **`/gdpr/`** | 32,802 words, but method not artefact. Larger than it looks |
| **5** | **`/owasp/`** | Deep, public, CC-licensed, no copyright problem. The best first non-law page |
| **6** | **`/supply-chain/`** | Small, accurate, already graph-shaped |
| **7** | **`/nis2/`, `/dora/`** | Applied, real, small |
| **8** | **`/nist/`** | As a crosswalk target |
| **9** | **`/iso-27001/`** | Crosswalk + reading guide only. Lead with the licensing constraint |
| **—** | **`/iso-31000/`** | **Stub only.** Nothing exists |

**On the lead's four:** the evidence supports **AI Act first** and **the risk standard last-or-never**.

---

## 3. What a per-standard vault holds

The same shape for every instrument, so tooling written once works everywhere. Full spec in `02__` §4.

| Layer | Contents |
|---|---|
| **`source/`** | The retrieved bytes, unmodified, with a SHA-256 per file and a record of where and when they were fetched. **For ISO: this layer is empty and the page says why.** |
| **`structure/`** | The taxonomy — the paragraph-as-folder tree. Positional hash per node |
| **`graph/`** | Nodes and edges as JSON, plus the SQLite build. The ontology layer |
| **`concepts/`** | Defined terms, one identifier and many labels |
| **`crosswalk/`** | `FrameworkReference` bridge nodes to other instruments |
| **`analysis/`** | The project's own reading — cached against the content hash so amendments only reprocess what changed |
| **`app/`** | The HTML views. `index.html` + `_page.json` |
| **`PUBLIC.md`** | What is in here, what the read key grants, what was audited before publishing |

---

## 4. The eleven worked examples — the site's proof pages

These are the reason to visit. Each is a specific clause worked through concretely.

| # | Instrument & clause | What it establishes |
|---|---|---|
| **W1** | **AI Act Art. 26(5), 26(6), Annex III 5(b), Art. 14, Art. 27** — the creditworthiness agent | **The single best asset in the corpus.** 8 facts, 7 evidence items, 5 provisions, 3 findings, 5 risks, 4 stakeholder views, **9 questions of which 5 unanswered**, 2 projects. See §5 |
| **W2** | **AI Act Art. 9(5)** — *"judged to be acceptable"* | ***"The obligation to make the judgement is imposed; the standard against which to judge is not supplied."*** And a self-correction on citation precision: the paragraph refers back to *"paragraph 2, point (d)"*, not paragraph 2 whole |
| **W3** | **AI Act Art. 10** — the staleness probe | Three states found in the wild, including ***"a text that never was the law"*** — a negotiating draft published as if in force. *"Cross-checking two sources cannot establish currency, since agreement only shows both are old."* |
| **W4** | **AI Act Arts. 4, 5, 9–15, 26, 50, 72, 73** | The 14-question operator set, tiered by legal status. Q10 is the plug question: *"Can a human meaningfully oversee it, intervene in it, and stop it, and has anyone tested that?"* |
| **W5** | **AI Act Art. 99** — penalties | The SME inversion: *"For most undertakings the fine is the higher of the fixed sum or the percentage. For small and medium enterprises and start-ups it is **the lower of the two**."* ⚠️ The third tier is internally flagged as disputed (1% vs 1.5%) — **check the operative text before publishing that number** |
| **W6** | **AI Act Art. 40** — the conformity gap | ***"None of the deliverables currently grants presumption of conformity, because none has been cited in the Official Journal. Both conditions are required and neither is met."*** |
| **W7** | **GDPR Art. 32 → encryption → ISO 27002 10.1** | The triple, and the closest thing to a real crosswalk: `Article 32 GDPR` –*requires*→ `Encryption of Personal Data` –*is a*→ `Security Control` –*mitigates*→ `Confidentiality Risk` |
| **W8** | **GDPR Art. 5(2)** | The file-path form: `file_id="Art5-Para2"`, `file_paths=["GDPR/Chapter_2/Article_5"]` |
| **W9** | **GDPR Arts. 6, 7, 17, 27, 28, 30, 33–35, 5(1)(e) + PECR 5(3)** | The only article-by-article GDPR pass in the corpus. ⚠️ **DO-NOT-PUBLISH as written** — it is the project's own gap table naming a legal entity. Extract the *structure*, not the findings |
| **W10** | **GDPR Recital 83, Art. 4(1)** | Ciphertext-is-not-personal-data: *"encryption is cited as a measure that can render a breach non-notifiable if the data is unintelligible to anyone not authorised to access it."* Handle carefully — this is exactly the *"implying regulatory readiness"* trap |
| **W11** | **ISO/IEC 27036** | Supplier control as a node, with `compliant_with` conditioned on evidence |

---

## 5. W1 in detail — build the proof page from this

A deployer running a **procured agentic underwriting system** for creditworthiness. The chain runs fact → evidence → provision → finding → risk → stakeholder view → project.

The conclusion that makes it worth publishing:

> ***"V1. Log retention is below the required minimum.** F4 says thirty days; Article 26(6) requires at least six months. **This is arithmetic, not judgement, which makes it the most defensible finding in the graph.**"*

And the tension the same document records against itself, which must be published alongside it:

> *"Deriving V1 arithmetically | Thirty days against six months is clean; **most obligations are not that crisp, and the graph must not imply they are.**"*

Plus the reading of 26(5) that a checklist would miss:

> *"It is a **dual obligation**. Suspension without notification is not compliance, and notification without suspension is not either."*

**⚠️ Deconfliction required.** W1 already appears in `/root/out/risks-sgit-ai__brief-pack/03__worked-examples-and-vaults.md`. It is the best asset for both sites. Somebody must decide who owns it — see `08__` Q1. The natural split: **`risks.` owns the register and the acceptance decision; `standards.` owns the provision and the arithmetic.** Same example, two entry points, one canonical copy with the other linking in.

---

This document is released under the Creative Commons Attribution 4.0 International licence (CC BY 4.0).
