# 02 — The architecture: vaults are the substrate, the site is a projection

This is the load-bearing document in the pack. The standards content is replaceable; this architecture is the thing being commissioned.

---

## 1. The claim

From the memo:

> *"the graphs and the data and all of that will be stored in vaults that can be easily used and consumed, and that becomes almost a **delivery mechanism**… The vaults should have all of the source materials, all of the data, all of the JSONs, all of the materials, and some of the tools, and **the website becomes a projection of that**."*

The corpus reached the same conclusion fourteen months earlier, and stated it better:

> *"what do you need to do this? You need a place to store the raw information, a place to store the transformations, a place to store the model's response (so you have provenance), a place to visualise it, a place to build mini tools. **Guess what, all of that is our vault.**"* — 30 May 2026

So the architecture is not new. What is new is doing it **at estate scale, with one vault per instrument, and a site that is genuinely derived rather than hand-maintained alongside.**

---

## 2. ⚠️ The corpus changed its mind about this, and the pack must resolve it

On **31 July 2026** a brief titled *"vault authors, repo publishes"* recorded a **change of position** away from vault-only publishing. The reason:

> **clear text is what enables verification**

That is a real objection and it cuts directly against the memo. A standards site's entire value is that a claim can be checked. Ciphertext that decrypts in a browser with a published read key is *readable*, but it is not **greppable, diffable, archivable by a third party, or citable by a URL that will resolve in ten years**. The estate's own viewer runs on `dev.`-prefixed hosts.

**The resolution this pack recommends — take both, with a stated division of labour:**

| | Vault | Repo / static site |
|---|---|---|
| **Holds** | Everything. Source bytes, transformations, model outputs, JSON, SQLite, the apps, the tools | The projection: rendered pages, the raw markdown of the site's own writing, the graph JSON as plain files |
| **Is the** | **Working substrate and the distribution unit** | **Verification surface and the citable address** |
| **Optimised for** | Delivery, versioning, coherence, handing someone one credential | Being read, indexed, diffed, forked and cited |
| **Authority** | Canonical for data | Canonical for URLs |

**The rule: nothing exists only in the vault that a reader would need in order to check a claim.** Provisions, hashes, citations and the crosswalk are mirrored as plain files in the repo. The vault holds those *plus* everything that is bulky, derived, or interactive.

This is not a compromise — it is the `pki.sgit.ai` pattern already proven on the network (`/documents/` raw markdown as source of truth beside rendered HTML), extended with the vault as the delivery unit. Publish the reasoning on `/method/`; it is a more interesting page than either position alone.

---

## 3. How a vault actually reaches a reader

Established by survey, not assumed. Get this right in the pack because the details matter:

- **Ciphertext origin:** `dev.send.sgraph.ai`
- **Viewer:** `dev.vault.sgraph.ai` — **not** `send.sgraph.ai`, which is the ciphertext API and has no UI
- **Decryption:** client-side in the reader's browser, with the read key printed on the host page
- **Credential format:** `<readkey>:<vaultid>` · viewer URL `https://dev.vault.sgraph.ai/#<readkey>%3A<vaultid>`
- **Embedding:** sandboxed iframe, `sandbox="allow-scripts"`, opaque origin. The host page hands the key over **a validated `postMessage` handshake instead of a URL fragment**, so *"the key never appears in any URL, is never written to the frame's storage (it lives in the frame's memory for the session)"*
- **Landing pages:** `https://sgit.ai/demos/vaults/<kebab-slug>/index.html`

**Two things to fix before a production standards site depends on this.** Both hosts are `dev.`-prefixed — a durability risk for a site whose whole point is durable citation. And **there is no stable permalink scheme for an individual provision**, which is table stakes if `standards.sgit.ai` wants to be cited. Design the citation scheme in `/method/` before the second instrument lands.

---

## 4. The per-standard vault layout

Same shape for every instrument, so a tool written once works everywhere. Built on the corpus's **paragraph-as-folder** design:

```
standards__<instrument-slug>/
├── PUBLIC.md                what is in here · what the read key grants · what was audited
├── MANIFEST.json            instrument id, version, amendments composed in, build date,
│                            source URLs, hash of every source file, node/edge counts
├── source/                  the retrieved bytes, UNMODIFIED
│   ├── <file>.xml           + <file>.xml.sha256
│   └── RETRIEVAL.md         where, when, by what method, with what response headers
├── structure/               the TAXONOMY — the paragraph-as-folder tree
│   └── article-026/
│       └── paragraph-05/
│           ├── text.md          -> positional hash + content hash
│           ├── analysis.md      -> cached against the CONTENT hash
│           ├── annotations.json -> cached against the CONTENT hash
│           ├── references.json
│           └── index.json       -> this folder's own index
├── graph/                   the ONTOLOGY — nodes.json, edges.json, graph.sqlite, graph.ttl
├── concepts/                defined terms; one identifier, many labels
├── crosswalk/               FrameworkReference bridge nodes to other instruments
├── app/                     index.html, _page.json, the views
└── dist/                    <instrument>-v<n>.zip · <instrument>-v<n>.sqlite
```

The corpus's own diagram of why this shape:

```
   amendment arrives -> re-hash -> only changed paragraphs reprocess
   cost scales with CHANGE, not with SIZE
```

> *"if the folder has a hash, then we have a master index, and each folder has an index of the items that it has itself… **that can be all read and maintained by the other end, but also by code.**"*

**Two hashes per provision, and the distinction is what makes crosswalks survive amendment:**

| | Positional hash | Content hash |
|---|---|---|
| Derived from | the address in the hierarchy | the text |
| Answers | *which provision is this?* | *what does it currently say?* |
| Moves when | renumbered or relocated | the wording is amended |
| Used for | deep links, citations, comment anchors, **crosswalk attachment** | change detection, cache keys, verification |
| Under amendment | **stable** | **moves** |

> ***"One identity for the slot, one identity for what is in it."***

A crosswalk mapping attaches to the **positional** hash and therefore survives revision. That single decision is what makes an ISO 27001 ↔ SOC 2 mapping mechanically maintainable instead of a spreadsheet that rots.

---

## 5. The taxonomy / ontology split — do not merge them

```
                    OUTWARD: ontology
                    concepts, definitions, entities,
                    obligations, risks, external terms
                              ^
                              |
   UPWARD: taxonomy    [ PARAGRAPH ]    the structural spine
   bullet -> paragraph -> article -> chapter -> instrument
```

> *"The failure this avoids is the common one of modelling both as a single graph, where structural containment and semantic relationship become the same kind of edge. Then a query for what this article contains returns concepts, and a query for what this concept relates to returns paragraph numbers, and **neither answer is useful.**"*

And the test that decides whether this is a real pipeline or just an AI Act reader:

> *"The practical test is whether **the same structure holds an ISO standard, a compliance framework and an internal policy without special cases.** If it does, the pipeline is real. If it does not, what exists is an AI Act reader."*

**Make that the acceptance criterion for `/method/`.** Instrument two is the test; instrument three is the proof.

---

## 6. Zip distribution — net-new, and specified

The memo: *"especially with the new features coming along, maybe even available as a zip, as a distribution mechanism."*

**Reality: not one of the 12 published vaults offers a zip or file export today,** and it is not on any roadmap page. Two things resemble it and are not it — Regulation Graph's RDF/Turtle export is an in-app graph serialisation, and `pki.sgit.ai/packs/registry-mvp/registry-mvp-briefing-pack.zip` is a static site pack.

The corpus does specify the formats:

> *"we can distribute the GDPR Memory_FS as a **`.zip`** containing the folder structure of JSON and MD files… For cloud deployment, the S3 backend… In a versioned release scenario, we might publish **`gdpr_v1.sqlite`**."*

**Ship both, in `dist/`, on every instrument vault:**

- **`<instrument>-v<n>.zip`** — the whole vault as plain folders and files. Offline, greppable, archivable, no key needed once downloaded. This is the answer to §2's verification objection *and* the memo's delivery mechanism at the same time.
- **`<instrument>-v<n>.sqlite`** — the graph as a queryable file. Loads in DuckDB, in `sql.js` in a browser, in Python, in anything.

Version them. Never overwrite. A standards corpus that silently changes under a fixed filename is worse than no corpus, and the amendment history *is* the product — the corpus's own business framing is *"the amendment is the business model."*

---

## 7. Query engines, verified

For tools reading the vault client-side (see `04__`), the corpus names four with real WASM/JS implementations:

| Engine | Language | For |
|---|---|---|
| **sql.js** / **DuckDB-WASM** | SQL | the SQLite build — already proven in Regulation Graph's SQL view |
| **Oxigraph** | SPARQL (WASM) | the Turtle/RDF build |
| **Comunica** | SPARQL (JS) | federated RDF across instruments |
| **Kuzu** | Cypher (WASM) | property-graph traversal |

> *"all of this is then JSON files and SQLite files that we can then load in the browser, **the same technique that we already used for some of our MVPs of the risk mandate.**"*

---

## 8. Publishing discipline — non-negotiable

Every vault, every time. This is condensed from the estate's own rules and one disclosed incident (`08__` §5):

1. **Audit before the key, not after.** Revocation cannot retroactively protect ciphertext somebody already fetched.
2. **Escrow the write key before publishing** — into the keys vault (`03__`). *"a vault that is readable and unwritable is not damaged but **frozen**, permanently readable by anybody holding the published key, never updatable, never revocable and never correctable."*
3. **Scan history, not just the working tree.** The one disclosed incident on this estate was a vault key committed in *history*.
4. **`PUBLIC.md` on every vault.** Currently on 2 of 12. Risk Graph Explorer is the canonical template; `publishing.html` says to copy its rules.
5. **No metered capability behind a published read key.** Regulation Graph's Art 9 Lab requires a bring-your-own OpenRouter key precisely for this reason. Follow it.
6. **Validate the prefix before listing.** `sgit_rk1_` = read, `sgit_vk1_` = write. The catalogue already checks; the standards site must too.

---

This document is released under the Creative Commons Attribution 4.0 International licence (CC BY 4.0).
