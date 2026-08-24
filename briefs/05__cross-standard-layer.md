# 05 — The cross-standard layer: `/method/`, and why it gets built first

The counter-intuitive recommendation in `00__` §7 is that the meta layer ships before any instrument folder. Three reasons:

1. **It already exists in publishable form** — 27,848 words across four files, more finished than most of the instrument content.
2. **It makes instruments 2–N cheap.** Every instrument built without it is built twice.
3. **It is the only material that is *itself the product*** rather than a mapping of somebody else's copyrighted text. Given the ISO blocker (`01__`), that matters commercially as well as editorially.

---

## 1. The node and edge grammar

Verbatim, from the 28 July architecture brief:

> **Node types:** `Provision` (an article, paragraph or point, carrying its source reference), `Definition`, `Requirement`, `Obligation`, `Prohibition`, `Control`, and `Actor` (the roles the instrument itself defines, such as provider or deployer).
>
> **Edge types:** `defines` / `defined_in`, `applies_to`, `triggers`, `exempts`, `references`, `satisfied_by`, `in_scope_when`.

Extended on 31 July with **`Amendment`** as a first-class node type, and the edges `amends`, `substitutes`, `inserts`, `deletes`, `repealed_by`, `effective_from`, `references`.

**And the discipline that keeps the ontology from sprawling — exhaust the established set first:**

> *"Where an established edge already fits, it should be used instead. A requirement that reduces a risk is `protected_by`; a control whose value depends on an assumption is `conditional_on`; a provision that creates exposure is `gives_rise_to`; the connection from any node to a twin and onward to reality is `connected_to`."*

The established set, verbatim: `connected_to`, `observed_on`, `backed_by`, `measured_by`, `grants`, `reaches`, `enables`, `exposes`, `gives_rise_to`, `protected_by`, `conditional_on`, `defeated_by`, `owned_by`, `accepted_by`, `underwritten_by`.

**Publish both lists on `/method/` as the site's stated grammar**, with the rule that a new edge type requires an argument for why no established one fits. That is a small governance decision with a large effect on whether ten instruments end up interoperable.

---

## 2. Crosswalks: bridges, not merges

> *"in our graph model we should leverage the existing maturity models and risk frameworks and **connect** to them, so we can say **if you do this you check that box**, which is a good example of graphs of graphs, ontology of ontologies."*

> *"Each bridge is the crosswalk… do this in RAMM, and you satisfy that requirement in framework X. The detailed, per-control crosswalk is a later pass, in super detail; **this first pass fixes the bridging approach and the first mappings.**"*

The explicit node type: **`FrameworkReference | crosswalk | the bridge nodes of the ontologies-of-ontologies model`** — specified, never instantiated.

**Why bridges beat merges**, and it is worth a paragraph on the page: a merge asserts that two instruments mean the same thing, which is almost never true and is unmaintainable when one is amended. A bridge asserts *a relationship, with a basis, that a reader can disagree with*. It also degrades honestly — an outdated bridge is a wrong edge you can find and fix, whereas an outdated merge is a silently wrong node.

**Every bridge needs a basis and a strength.** The corpus supplies the vocabulary — **"shades of compliance"** — and `04__` §5 makes it a precondition for the crosswalk browser. A crosswalk that can only say *yes* is either wrong or useless.

---

## 3. The two-hash scheme is what makes crosswalks survive

Covered in `02__` §4; restated here because it is the crosswalk enabler, not just a storage detail.

A bridge attaches to the **positional hash** — the identity of the *slot*. When an instrument is amended, wording moves and the content hash changes; the slot, and therefore every mapping into it, holds. Attach a crosswalk to text and you have a spreadsheet that rots. Attach it to a position and you have an artefact that survives revision and can *report* that the text underneath it moved.

> ***"One identity for the slot, one identity for what is in it."***

That single design decision is the difference between a maintainable multi-standard library and the usual dead mapping spreadsheet.

---

## 4. External authority anchoring — defer, don't decide

> *"the answer to how you know you are linking to the right one is that **you do not decide, you defer**. An entity reference terminates at the identifier the Union itself publishes for that body rather than at a node we created and named."*

> *"**a concept has one identifier and many labels**, one per language, so the concept is language-independent and the word is a projection of it."*

Two consequences worth stating on the page. **The site never becomes the authority on what an external body is** — it points at the issuer's own identifier, which is both more honest and less work. And **multilingual comes for free** for EU instruments, which are published in 24 languages against the same structure. That is a real differentiator nobody in the corpus has claimed yet.

---

## 5. The subset method — "you almost recreate a small standard"

The corpus's most practical cross-standard artefact is a table of the controls from eight instruments that bear on one problem (agentic access), spanning GDPR, NIST, ISO 27001:2022, HIPAA, the EU AI Act, NIS2, DORA and the OWASP/MITRE agentic layer.

The finding:

> *"The throughline across all of them is the same small set of ideas: **least privilege, data minimisation, access control, supply-chain and third-party risk, traceable evidence, and accountability.**"*

And the method:

> *"create a subset, a graph, of those standards that has just the bits, the controls, and the elements relevant here… **You almost recreate a small standard based on this.**"*

**This is the site's most sellable output and it deserves its own page type: `/subsets/<topic>/`.** Nobody wants to read eight instruments; everybody wants the twelve provisions across eight instruments that bear on their actual problem. It also sidesteps the ISO blocker neatly — a subset cites and interprets, it does not reproduce.

Ship the agentic-access subset first. It already exists as a table.

---

## 6. The compounding argument

The justification for a multi-standard site rather than one very good page:

> *"the AI standard already links to another of the standards, another acts that you need to be able to access as a graph… **Map a second instrument and the edge resolves; map a third and two more resolve. So each mapping increases the value of the ones already done.**"*

The 2025 white paper reached the same conclusion independently, with named prior art:

> *"A single graph can include nodes from GDPR, PCI DSS, ISO 27001, OWASP ASVS, etc. If two standards address the same concept (say 'access control'), the graph can link them to a common concept node. **The University of Maryland's researchers who built an integrated GDPR + PCI DSS ontology did exactly this.**"*

**Cite the prior art.** `/method/` should name NIS2Onto, PrivComp-KG, ClauseMatch, OSCAL and the Maryland GDPR+PCI ontology, and say what each got right. A site that positions itself as first in this space would be wrong and would be caught being wrong.

---

## 7. The grounding ladder — how a requirement is proven met

The corpus's answer to *"how do you know?"*, verbatim:

```
Risk          := a downward path to a Vulnerability AND an upward path toward a top risk
Vulnerability := a Fact (grounded below) AND an upward path to a Risk
Fact          := a downward path to Evidence
Evidence      := a downward path to a Measure
Measure       := an observation of the node it measures, grounded on a Twin
```

Five rules that follow from it, each publishable as a short page:

1. **Unevidenced facts are first-class findings**, not omissions. W1 ships with 5 of 9 questions unanswered and calls that *"the actual output of the exercise"*.
2. **Absence is output.** A gap that is visible is a result.
3. **Computed, not claimed.** A number that cannot be recomputed from the graph does not belong in it.
4. **Regulation as evidence, not checklist.** The instrument is what a claim *points at*, not a list to tick.
5. **Coverage is a measurable property of the graph itself** — how much of the estate is grounded, computed rather than asserted.

**And the anti-fabrication argument, which is why the whole architecture is built this way:** a model asked to assess compliance will produce a plausible answer. A model asked to attach a finding to a provision hash, and to a measure, and to a twin, either finds the path or reports that it cannot. **The ladder is the mechanism that turns "sounds right" into "here is the path."** That belongs on the front page.

---

## 8. The acceptance test for `/method/`

> *"The practical test is whether the same structure holds **an ISO standard, a compliance framework and an internal policy** without special cases. If it does, the pipeline is real. If it does not, what exists is an AI Act reader."*

Hold `/method/` to it. Instrument two is the test; instrument three is the proof. Publish the result either way — a documented special case is more useful than a claim of generality.

---

This document is released under the Creative Commons Attribution 4.0 International licence (CC BY 4.0).
