# standards.sgit.ai — point at the provision, or you are asserting

> A standard is only useful when a claim can point at a named provision in a real
> instrument instead of asserting one. This site publishes the method that turns an
> instrument into a graph of addressable provisions, the instruments modelled that way
> so far, and the vaults that deliver them. **One instrument is modelled properly. One.**

*Source: <https://standards.sgit.ai/index.html> · site v0.1.0 · markdown twin of the front page.*

---

## First: this site is called "standards" and is three-quarters law

Law, standard and framework are three different kinds of instrument, they bind in three
different ways, and a site that blurs them will mislead you about what you are obliged
to do. So the distinction leads.

> We see this pattern in cybersecurity broadly: **laws vs. frameworks vs. controls.** A
> law (like NIS2 or GDPR) states "what" outcomes must be achieved… often without stating
> "how." The "how" is found in frameworks like ISO 27002.
> — *docs.diniscruz.ai, 31 March 2025*

| Kind | What it is | How it binds | Share |
|---|---|---|---|
| **LAW** | EU AI Act, GDPR/UK GDPR, NIS2, DORA, CRA, HIPAA, PECR, CCPA, SOX, DPA 2018 | Directly; penalties are written into the instrument | ~72% |
| **FRAMEWORK** | OWASP, NIST, MITRE ATT&CK/ATLAS, BSIMM, CMMC, SLSA | Not at all on its own — it binds when a contract, regulator or customer points at it | ~20% |
| **STANDARD** | ISO 27001/27002/42001, SOC 2, PCI DSS, CycloneDX, SPDX, Akoma Ntoso | By certification or attestation, issued by a third party | ~8% |

Every instrument page carries its label in the header, beside whether its text may
legally be republished at all. [The instrument index](instruments/index.html).

## Second: the thesis

**A risk in a register points at a named obligation in a real instrument instead of
being asserted.**

Everything follows. If a claim must point at a provision, provisions need addresses —
an identity, a stable citation, and a hash of the bytes the text came from. If the
pointing must be checkable, the provision must be readable by somebody who does not
trust us. If a finding must be grounded rather than plausible, there has to be a path
from the finding down to something observed.

## How you know: five lines

```
Risk          := a downward path to a Vulnerability AND an upward path toward a top risk
Vulnerability := a Fact (grounded below) AND an upward path to a Risk
Fact          := a downward path to Evidence
Evidence      := a downward path to a Measure
Measure       := an observation of the node it measures, grounded on a Twin
```

A model asked "are we compliant with Article 26?" will answer. A model asked to produce
the path — this finding, from this fact, from this evidence, from this measure, on this
twin — either produces it or reports that it cannot. **The ladder is the mechanism that
turns "sounds right" into "here is the path."**
[The five rules that follow](method/ladder.html).

## Why more than one instrument

> the AI standard already links to another of the standards… **Map a second instrument
> and the edge resolves; map a third and two more resolve. So each mapping increases the
> value of the ones already done.**

The AI Act refers out to GDPR, to NIS2, to harmonised standards, to conformity
assessment bodies. Today every one of those references terminates at nothing. Model
GDPR and one class of them resolves. And crosswalks are
[bridges rather than merges](method/crosswalks.html), because a bridge you disagree with
is a wrong edge you can find, and a merge you disagree with is a silently wrong node.

## The constraint that reshapes a third of this site

**You cannot republish ISO.** ISO/IEC standards are copyrighted and sold; that revenue
funds the organisation. Not the requirement text, not Annex A verbatim, not a close
paraphrase presented as a summary. An ISO folder here holds clause *references*, the
project's own control interpretations, crosswalks to publishable instruments, a reading
guide, and an honest page about the paywall — and its `source/` layer is empty, with the
page saying why. [The ISO/IEC 27001 folder](iso-27001/index.html).

## What is not here

| Thing | Status |
|---|---|
| Instruments modelled | **One.** The EU AI Act |
| Cross-instrument mappings | **Zero** |
| Control catalogue, machine-readable | None |
| Zip / SQLite distribution | None yet, on any of the twelve published vaults |
| The GDPR graph | Does not exist |
| AI Act citations | Derived from secondary sources; need re-derivation from operative text |

Nothing here outputs a pass, a score, or a percentage of compliance. The project's own
warning applies to this site more than any other on the network: *"implying regulatory
readiness that has not been established is the easiest way to create an obligation
nobody has met."* [The unsoftened version](shipped/index.html) ·
[where this approach loses](about/participant.html).

## The vaults are the substrate; this site is a projection

| | The vault | The repo & this site |
|---|---|---|
| Holds | Everything — source bytes, transformations, JSON, SQLite, apps, tools | The projection: rendered pages, raw markdown, the graph as plain files |
| Is the | Working substrate and distribution unit | Verification surface and citable address |
| Authority | Canonical for data | Canonical for URLs |

The governing rule: **nothing exists only in the vault that a reader would need in order
to check a claim.** [The vaults, with their read keys](vaults/index.html).

---

All content CC BY 4.0. The instruments themselves keep their own licences — see
[boundaries and licensing](instruments/index.html#licensing).
