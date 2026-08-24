# 07 — Boundaries, licensing and the things that will get you in trouble

> **Published edition — §4 is redacted.** See §4 for what was removed and why.

This site has three legal exposures the other `*.sgit.ai` sites do not. Read this before writing a page.

---

## 1. 🚫 ISO text is copyrighted and sold

**You cannot republish ISO 27001, 27002, 27005, 31000, 42001 or any other ISO/IEC standard.** Not the requirement text, not Annex A verbatim, not a close paraphrase presented as a summary. ISO and its national members sell these documents; that revenue is the business model of the organisation.

The corpus's own vault-per-standard brief lists "ISO 27000" as a vault to build and **never mentions this once**. It is a licensing blocker, not a writing task, and it is the single most important constraint on the whole site.

**What an ISO folder can legitimately contain:**

- **Clause references** — numbers and titles. *"ISO/IEC 27001:2022 Annex A 8.2, Privileged access rights"* is a citation, not a reproduction.
- **The project's own interpretations** and control implementations, written from scratch.
- **Crosswalks** from ISO clause references to instruments that *are* publishable.
- **A reading guide** — what the standard is for, how it is structured, what certification involves, what it costs to obtain.
- **An honest page about the paywall**, and what that means for a public standards resource. This is more interesting than a copy would have been, and nobody else writes it.

**The same caution applies, in weaker form, to SOC 2 (AICPA), PCI DSS (PCI SSC) and several IEC/sector standards.** Check per instrument; do not generalise from the EU-law case.

| Instrument | Republishable? |
|---|---|
| **EU law** — AI Act, GDPR, NIS2, DORA, CRA | ✅ **Yes.** Official Formex XML from CELLAR; EU legislative texts are freely reusable |
| **NIST** — CSF, 800-53, AI RMF, SSDF, OSCAL | ✅ **Yes.** US government work, public domain |
| **OWASP** — Top 10, ASVS, SAMM, CRS, WSTG | ✅ **Yes.** CC-licensed — check the specific licence per project |
| **MITRE ATT&CK / ATLAS** | ✅ Yes, with attribution |
| **CycloneDX, SPDX** | ✅ Yes in their open forms — ⚠️ the ISO-numbered twins (ISO/IEC 5962, 20153) are the paywalled versions |
| **Akoma Ntoso, ELI, LegalRuleML** | ✅ Yes — OASIS/EU open specifications |
| **ISO/IEC — all** | 🚫 **No** |
| **SOC 2, PCI DSS** | 🚫 Check carefully; assume no |

**Practical rule: the `source/` layer of an ISO vault is empty, and the page says why.** Everything else in the layout still applies.

---

## 2. ⚠️ Do not imply regulatory readiness

The corpus's sharpest warning, and it applies to this site more than any other on the network:

> *"Publishing security reviews and deployment guidance is useful; **implying regulatory readiness that has not been established is the easiest way to create an obligation nobody has met.**"*

And the positioning the corpus states four separate times:

> *"**Not a compliance product.** It exists to give risks an evidentiary anchor, not to tell an organisation whether it passes."*
> *"**Not a compliance verdict.**"*
> *"the point is evidence, not compliance"*
> *"this does not require regulatory adoption or vendor consent"*

**Three concrete rules that follow:**

1. **No tool outputs a pass, a score, or a percentage of compliance.** Findings and unanswered questions only (`04__` T2).
2. **No page says "compliant", "meets", or "satisfies" without naming the evidence and the measure.** The grounding ladder is the mechanism; use it.
3. **The GDPR ciphertext argument (W10) is handled with particular care.** *"encryption… can render a breach non-notifiable"* is an argument about Recital 83, not a determination. Present it as the reading it is, attributed, with the counter-position noted.

This is not timidity. It is the site's actual differentiator: everybody else sells verdicts, and verdicts are the thing nobody can defend.

---

## 3. ⚠️ Citations must be re-derived from operative text

The corpus flags its own weakness, twice:

> *"The question set is derived from the structure and subject matter of the named articles **as described in secondary sources** rather than from a clause-by-clause reading of the operative text."*

> *"This brief describes the Article 10 change from secondary analysis, **which is exactly the second-hand pattern it criticises elsewhere.**"*

And the reason it matters, from the site's own best worked example (W3): a probe of the AI Act in the wild found three states of staleness including ***"a text that never was the law"*** — a negotiating draft published as if in force. Plus: *"Cross-checking two sources cannot establish currency, since agreement only shows both are old."*

**A site whose thesis is "point at the provision" cannot ship provisions sourced from commentary.** Before any instrument page publishes: every article citation re-derived from the operative text, with the retrieval recorded in `source/RETRIEVAL.md`.

**One specific number to fix first:** the Article 99 third penalty tier is internally flagged as disputed — some sources say 1%, others 1.5%. *"The operative text should be checked before this is used anywhere external."* Do not publish it until it is.

---

## 4. Do not publish

> **⚠️ This section is redacted in the published edition.**
>
> The original lists twelve source paths that must not be published, each with the reason
> it is excluded. Several of those reasons are themselves the disclosure: one names a
> company and enumerates its unfulfilled statutory obligations; one names a third party
> and its alleged breaches, and the document itself flags defamation risk in doing so;
> two name private individuals as risk acceptors, with signature blocks; one describes a
> live unremediated vulnerability in running code; one is characterised in the original
> as an attack roadmap. Reproducing the *index* would reproduce a usable summary of every
> one of them.
>
> Publishing the redaction rather than removing the section silently is the same
> judgement the section itself asks for, applied to the section. The **classes** are
> published because they are what a future author needs:

| Class | Why it is excluded |
|---|---|
| A named organisation's own gap or non-compliance record | Publishing it is publishing an admission by an identifiable entity. **Extract the table structure; publish none of the findings** |
| An assessment of a named third party's alleged breaches | Defamation exposure, and the original flags it |
| Anything naming a private individual as a decision-maker, with signatures | A private individual's identity is not the project's to publish |
| Live, unremediated vulnerability detail in running code | Publishing it is publishing an exploit path |
| Commercial material — investment figures, valuations, margins, competitor pricing, founder profile | Confidential, and the standards content inside it is not worth the surroundings |
| Competitive-intelligence and partnering analysis naming specific companies | The instrument content is good and inseparable from the framing |
| Provider endpoint detail and pricing | Operational and commercial |
| Investor-audience material asserting capability that does not ship | It asserts what this site exists to stop being asserted |

**Publish with redaction:** the *Standards As A Service* brief is excellent material and the
source of the compounding argument — but it profiles a named competitor with its pricing
and states a target price point. **Publish the market-structure argument; strip the price
point and soften the competitor profile.** The penalties brief is publishable subject to
§3 on the Article 99 tier.

## 5. Key discipline

Everything in `03__`, plus the two rules that belong in every page footer that renders a credential:

- **`sgit_rk1_` = read, published on purpose. `sgit_vk1_` = write, never published anywhere, ever.** Validate the prefix before rendering.
- **Audit before the key, not after.** Revocation cannot retroactively protect ciphertext already fetched.

The estate has one disclosed incident to learn from — a vault key and another vault's credential found in *history*, redacted, history rebuilt, re-audited clean. Handled well. The open question is whether that key was **rotated** or only removed (`08__` Q6).

---

## 6. Network boundaries

| Site | Owns | Boundary with this site |
|---|---|---|
| **`standards.sgit.ai`** | Instruments, provisions, crosswalks, the method, the instrument vaults | — |
| **`risks.sgit.ai`** | The register, acceptance, the grounding ladder as *risk* apparatus, RAMM, accepted-vs-acceptable | **⚠️ The live conflict.** W1 (Article 26(5)) is the best asset for both. Proposed split: **risks owns the register and the acceptance decision; standards owns the provision and the arithmetic.** One canonical copy, the other links in. `08__` Q1. Also: **the ISO 31000 stub points here** |
| `graphs.sgit.ai` | Graph theory, maps-as-graphs, G³, meaning through connectivity | The ontology *method* is shared. Standards owns its application to legal instruments; graphs owns the general theory |
| `pki.sgit.ai` | PKI, the registry MVP | Supplies the house pattern and the build pipeline. No content overlap |
| `nhi.sgit.ai`, `sg-sentinel.sgit.ai` | NHI, sentinel | **sg-sentinel describes "compliance as a living graph" and states plainly it "has not been built."** Cross-link and do not duplicate |
| `riskmandate.ai` | Commercial | References this site, is not referenced. Its GDPR name-check should link here |
| `sgit.ai` | The vault product, the catalogue, the demos | **Hosts the vault estate.** Standards vaults list in its catalogue; the catalogue stays canonical for the estate-wide index |

---

## 7. House style

- **Label every instrument LAW / STANDARD / FRAMEWORK in the header.** This is the condition on keeping the site's name (`00__` §3).
- **Every provision reference carries its instrument, article, paragraph and point.** *"Article 9(5)"* is not enough — W2's own self-correction is the model: the paragraph refers back to *"paragraph 2, point (d)"*, not paragraph 2 whole.
- **Never say "compliant" without the evidence path.** §2.
- **Unanswered is a value, not a blank.** Ghost it visibly, as Regulation Graph and Risk Graph Explorer both do.
- **Every number is recomputable from the graph**, or it does not appear.
- **-ise, not -ize**, to match the estate.
- **Cite the prior art** — NIS2Onto, PrivComp-KG, ClauseMatch, OSCAL, the Maryland GDPR+PCI ontology. Being first would be a false claim.

---

This document is released under the Creative Commons Attribution 4.0 International licence (CC BY 4.0).
