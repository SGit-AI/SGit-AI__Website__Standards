# Licence

## This pack

Everything in this brief pack — the nine numbered documents, `09__source-manifest.csv`, `vaults__published-estate.json`, this file and `README.md` — is released under the **Creative Commons Attribution 4.0 International licence (CC BY 4.0)**.

    Copyright (c) 2026 Dinis Cruz
    Licensed under CC BY 4.0 — https://creativecommons.org/licenses/by/4.0/

Attribution: **Dinis Cruz**, with AI co-authorship (Claude, Anthropic). Where a source document names model co-authors, carry those names forward.

## The site this pack commissions

**The entire content of `standards.sgit.ai`** — every page, `/documents/`, `/llms.txt`, `/llms-full.txt` and the admin surfaces — is to be published under **CC BY 4.0**, consistent with the rest of the network. Stamp every raw markdown document:

    This document is released under the Creative Commons Attribution 4.0 International licence (CC BY 4.0).

Use `licence-audit.py` (from the `graphs.sgit.ai` pack) in `--check` mode as a CI gate.

**The vaults, and the `dist/` zips and SQLite builds, carry the same licence** — for the project's own work. The *source layer* does not; see below.

---

## 🚫 The one that will stop you: you cannot republish ISO

**ISO/IEC standards — 27001, 27002, 27005, 31000, 42001 and the rest — are copyrighted and sold.** Not the requirement text, not Annex A verbatim, not a close paraphrase presented as a summary. Selling those documents is how ISO and its national members are funded.

The corpus's own vault-per-standard brief lists "ISO 27000" as a vault to build and never mentions this. **It is a licensing blocker, not a writing task**, and it is the single biggest constraint on the site.

**An ISO folder may hold:** clause references (numbers and titles are citable), the project's own control interpretations, crosswalks to publishable instruments, a reading guide, and an honest page about the paywall. **Its `source/` layer is empty and the page says why.**

The same caution applies in weaker form to **SOC 2** (AICPA) and **PCI DSS** (PCI SSC). Check per instrument; do not generalise from the EU-law case.

## What may be republished

| Material | Regime | What the site may do |
|---|---|---|
| **EU law** — AI Act, GDPR, NIS2, DORA, CRA | ✅ Freely reusable. Official Formex XML from CELLAR | Republish in full, with provenance hashes and retrieval records |
| **NIST** — CSF, 800-53, AI RMF, SSDF, OSCAL | ✅ US government work, public domain | Republish; attribute as courtesy |
| **OWASP** — Top 10, ASVS, SAMM, CRS, WSTG | ✅ CC-licensed — **check the specific licence per project**, they are not uniform | Republish per that licence, with attribution |
| **MITRE ATT&CK / ATLAS** | ✅ With attribution | Republish per MITRE's terms |
| **CycloneDX, SPDX** | ✅ In their open forms | ⚠️ The ISO-numbered twins (ISO/IEC 5962, 20153) are the paywalled versions — cite the open ones |
| **Akoma Ntoso, ELI, ECLI, LegalRuleML** | ✅ OASIS / EU open specifications | Republish per licence |
| **`docs.diniscruz.ai` prior art** (5 articles in the manifest) | **CC0 1.0** as published | More permissive than CC BY, so republishing is fine — but attribute anyway and keep `rel="canonical"` on the original URL with the `first_published` date |
| **ISO/IEC — all** | 🚫 Copyrighted, sold | **Reference only** |
| **SOC 2, PCI DSS** | 🚫 Assume no | Check before writing |

## The other two exposures

**Do not imply regulatory readiness.** The corpus's own warning: *"Publishing security reviews and deployment guidance is useful; implying regulatory readiness that has not been established is the easiest way to create an obligation nobody has met."* No tool outputs a pass or a score; no page says "compliant" without naming the evidence and the measure. `07__` §2.

**Citations must be re-derived from operative text.** The corpus flags its own secondary sourcing twice, unprompted. A site whose thesis is *point at the provision* cannot ship provisions sourced from commentary. One number to fix first: the Article 99 third penalty tier, internally disputed at 1% vs 1.5%. `07__` §3.

## Keys

`sgit_rk1_` = read, published on purpose. **`sgit_vk1_` = write, never published anywhere, ever.** Validate the prefix before rendering any credential. Escrow every write key in the keys vault before publishing a read key — a vault that is readable and unwritable is *frozen*: permanently readable, never updatable, never revocable, never correctable. `03__`.

The 12 read keys in `vaults__published-estate.json` are published deliberately and are safe to reproduce. No `sgit_vk1_` value appears in this pack, and none should ever appear in any artefact derived from it.

## Manifest tiers

- **Tier 3 (6 rows)** — do not publish, quote or paraphrase. Listed so you know to skip them.
- **Tier 2 (3 rows)** — marked `STRUCTURE ONLY` / `VERIFY FIRST`. Read `why_it_matters` before touching them. In particular the only article-by-article GDPR pass in the corpus is unpublishable as written: extract the table structure, publish none of the findings.
- **`REDACT`** on the standards-as-a-service brief: publish the market-structure argument, strip the named competitor's pricing and the target price point.

---

This file is released under the Creative Commons Attribution 4.0 International licence (CC BY 4.0).
