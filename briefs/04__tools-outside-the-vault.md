# 04 — Tools outside the vault that consume vault materials

> *"although we will have the vaults, I think it is worth exploring the creation of other tools and pages that are outside the vaults that consume the materials from the vault, so this is worth exploring."*

**Good news: this pattern already exists on the estate, it works, and there is a near-exact architectural precedent for a standards conformance tool.** This document names the precedent, states the contract, and specifies five tools worth building.

---

## 1. The precedent — Private Health Score

Vault `zc6abngv` — 35 files, 1.2 MB. What it does:

> loads *"a versioned JSON standard — **five dimensions, five bands, eight scoring rules** — from the vault at runtime"* and computes deterministic scores, **separating rule-derived numbers from LLM-generated prose**.

Read that again with "standard" meaning ISO rather than health. **The standard is data in the vault; the tool is code that reads it.** That is precisely the shape a conformance calculator needs, and it is already built and working on this estate.

Two other precedents:

- **Risk Graph Explorer** (`3simlnqe`) — the purest example of vault-data-as-live-computation. Answering questions recomputes **seven views** simultaneously; the same questions answered differently yield 18 facts / 37 risks / 14 provisions. Amber edges = exposure, green = assurance, **ghosted = unanswered**. Zero network calls, `permissions: {}`.
- **Regulation Graph's SQL and RDF views** — the instrument queried as a database (`sql.js`) and as a triple store with Turtle export.

**Three working precedents. This is not exploratory; it is established practice waiting to be pointed at standards.**

---

## 2. The contract between a tool and a vault

If tools live outside vaults, the boundary needs a contract or every tool ends up coupled to one vault's internals.

**Read this and only this:**

```
MANIFEST.json          instrument id, version, amendments, build date, counts
graph/nodes.json       stable node ids (positional hashes)
graph/edges.json       typed edges from the published grammar
graph/graph.sqlite     the same graph, queryable
concepts/*.json        defined terms; one identifier, many labels
crosswalk/*.json       FrameworkReference bridges
```

**The five rules:**

1. **Version the contract, not just the data.** `MANIFEST.json` carries a `contract_version`. A tool declares which it speaks and refuses politely rather than silently misreading a newer shape.
2. **Address by positional hash, never by array index or display label.** Labels are translations; positions survive amendment. This is the whole point of the two-hash scheme (`02__` §4).
3. **A tool never holds a write key.** Read key or downloaded zip. `03__` §4.
4. **A tool that computes must say what it computed from.** Every number carries the provision it derives from and the hash of that provision's text. *"Computed, not claimed."*
5. **A tool that cannot answer must say so visibly.** Regulation Graph and Risk Graph Explorer both ghost unanswered nodes rather than defaulting them. **An unanswered question is an output.** Follow it.

**And one prohibition:** no metered capability behind a published read key. Regulation Graph's Art 9 Lab requires a bring-your-own OpenRouter key for exactly this reason.

---

## 3. Five tools worth building

Ranked by value over effort.

### T1 — The crosswalk browser ⭐ build first
Pick a provision in instrument A; see every provision in B, C, D that bridges to it, with the bridge's basis and confidence. Reads `crosswalk/*.json` across every instrument vault.

**Why first:** it is the thing a multi-standard site sells, it is the only tool that gets *more* valuable with each instrument added, and it makes the compounding argument visible rather than asserted — *"map a second instrument and the edge resolves; map a third and two more resolve."*

**Blocker:** zero crosswalks currently exist. T1 is the reason to write the first one.

### T2 — The conformance calculator
Answer questions about your situation; get findings that each point at a named provision. Direct descendant of Private Health Score and Risk Graph Explorer.

**Non-negotiable framing.** The corpus rejects the compliance-verdict posture four separate times: *"**Not a compliance product.** It exists to give risks an evidentiary anchor, not to tell an organisation whether it passes"* / *"Not a compliance verdict."*

So: **it outputs findings and unanswered questions, never a score, never a pass.** W1's `V1` is the model — *"thirty days against six months… arithmetic, not judgement"* — published alongside its own caveat, *"most obligations are not that crisp, and the graph must not imply they are."*

### T3 — The amendment differ
Two versions of an instrument in, changed provisions out — by content hash, so it is exact rather than textual. Directly serves *"the amendment is the business model"*, and directly fixes Regulation Graph's two-commits-no-history gap.

**This is the tool that makes the site a living resource rather than a snapshot.**

### T4 — The provision citation resolver
A stable URL per provision that resolves to the text, the hash, the retrieval record, and every crosswalk touching it. Content-negotiates to JSON.

**Small, and it unblocks everything else.** Right now there is no stable citation scheme anywhere on the estate — table stakes for a site whose value is being citable. Build it with instrument two.

### T5 — Cross-vault search
Each vault is currently an island; the Catalogue indexes them but does not search inside them. A prebuilt search index per vault plus a federated client-side query.

**Hardest of the five**, and the one most likely to want a real backend. Defer until instrument four.

---

## 4. Where tools live

| | Recommendation |
|---|---|
| **The tool's code** | **In the repo**, rendered on `standards.sgit.ai`. It is small, it must be inspectable, and it is exactly the *"clear text enables verification"* argument from `02__` §2 |
| **The data it reads** | **In the vault.** Bulky, versioned, and the delivery unit |
| **A vault-internal copy of the tool** | **Yes, for the flagship instruments.** So the downloaded zip is self-sufficient offline. Accept the duplication; build both from one source |

That split gives three delivery modes from one build — a page on the site, an app inside the vault, and a zip that works with no network — which is the memo's *"delivery mechanism"* claim actually delivered.

---

## 5. What must be true before T1 ships

1. **One crosswalk exists.** Any pair. AI Act ↔ GDPR is the natural first — the corpus already notes they apply *"concurrent"*.
2. **The bridge node type is instantiated.** `FrameworkReference` is specified and never built.
3. **A confidence or basis field on every bridge.** A crosswalk that cannot express *"partially, and here is why"* will be either wrong or useless. The corpus has the vocabulary — *"shades of compliance"*.
4. **The contract version is stamped** in `MANIFEST.json`.
5. **The citation scheme is decided** (T4), because every bridge is a pair of citations.

---

This document is released under the Creative Commons Attribution 4.0 International licence (CC BY 4.0).
