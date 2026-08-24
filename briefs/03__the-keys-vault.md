# 03 — The keys vault: the private vault over the vaults

> *"we need a vault which is going to be private, which is the vault that will contain all the keys, the **write keys** to all the other vaults. So the vault keys over the vault, we can manage this in a central way, and that's a key that won't be shared, of course, publicly, because — but that just allows me an easy way to access all the vaults and manage them."*

This is the right instinct and it solves a real, already-demonstrated problem. It also concentrates every credential on the estate into one artefact, so the design has to be deliberate.

**Build it before vault three, not after vault ten.**

---

## 1. Why it is necessary, in the estate's own words

The rule that creates the need:

> ***"Read keys yes, vault keys never — a read key is a capability handed out on purpose and cannot become write access."***
>
> *"A vault key is read **and** write; publishing one hands the vault to anybody."*
> *"a published read key cannot be turned back into the vault key."*

And the consequence of losing a write key after publishing a read key:

> *"a vault that is readable and unwritable is not damaged but **frozen**, permanently readable by anybody holding the published key, never updatable, never revocable and never correctable… **which makes escrowing the write key a precondition of publishing rather than good practice.**"*

A standards site is the worst possible place for a frozen vault. Instruments get amended — *"the amendment is the business model"* — and an instrument vault that cannot be updated is a permanently wrong copy of the law with your name on it, readable by everyone, forever.

**So: escrow is a precondition. The keys vault is the escrow.**

---

## 2. What already exists, and what does not

Three things exist and are worth reusing:

| Existing | What it is | Reusable? |
|---|---|---|
| **The Vault Catalogue vault** (`kc67yhgw`) | Literally a vault-of-vaults — *"an index of published vaults, rendered live from a vault that indexes vaults — including itself."* **Read keys only.** | **Yes — as the public twin.** Do not extend it to hold write keys |
| **Sub-vaults** | `.vault/owner/ro-links.json` *"stores the child's read key only, never its write key."* A pointed-to vault appears inline in the file tree like a folder | Partially — the mount technique is a **trial-only stub in current code** |
| **`publishing.html`** | The estate's stated method, including prefix validation before listing | Yes |

And the three things the docs are explicit about **not** being:

- *"sgit is **not a secrets manager**"*
- there is **no key recovery**
- a sub-vault split is *"an organisational boundary (lifecycle, sharing, history), **not a confidentiality boundary from the parent's own readers**"*

**That last one is the design constraint that matters.** Nesting the keys vault as a sub-vault of anything published would expose it to that parent's readers. **The keys vault must be a standalone top-level vault with no read key ever issued.**

---

## 3. What goes in it

```
vault-keys/
├── PRIVATE.md              deliberately named the opposite of PUBLIC.md.
│                           First line: "If you are reading this and you are not
│                           Dinis Cruz, something has gone wrong. Rotate everything."
├── keys.json               the register — one record per vault
├── recovery/
│   └── RECOVERY.md         how to get back in if this vault is lost. See §6
└── audit/
    └── <date>__audit.md    what was checked before each publication
```

`keys.json`, one record per vault:

```json
{
  "vault_id": "73heuprz",
  "name": "Regulation Graph",
  "instrument": "eu-ai-act",
  "write_key": "sgit_vk1_...",
  "read_key":  "sgit_rk1_...",
  "read_key_published_at": "2026-08-02",
  "published_on": ["https://sgit.ai/demos/vaults/regulation-graph/index.html"],
  "pre_publication_audit": "audit/2026-08-02__regulation-graph.md",
  "history_scanned": true,
  "public_md": true,
  "rotated_at": null,
  "status": "live",
  "notes": "2 commits; no amendment history yet"
}
```

Four fields there are doing real work and should not be dropped: **`read_key_published_at`** (the moment escrow became mandatory rather than advisable), **`history_scanned`** (the one incident on this estate was a key in *history*), **`pre_publication_audit`** (a path, so the claim is checkable), and **`rotated_at`** (see §5).

---

## 4. The threat model, stated plainly

Concentrating every write key into one vault trades many small risks for one large one. That is usually the right trade — it is what a password manager is — but only if the single point is treated as such.

| Threat | Mitigation |
|---|---|
| **The keys vault's own write key is lost** | Fatal and unrecoverable — there is no key recovery. **This is the whole problem, recursed.** §6 |
| **Its read key is issued to anyone, ever** | Never issue one. There is no legitimate reason. The public twin is the Catalogue vault |
| **It is committed into another repo or vault** | The exact incident that already happened once on this estate (`08__` §5). Add a pre-commit hook matching `sgit_vk1_` across every repo |
| **It is nested as a sub-vault** | Forbidden. A sub-vault is *"not a confidentiality boundary from the parent's own readers"* |
| **An agent reads it during a session** | **No agent gets this credential.** Agents that publish vaults receive one write key for one vault, scoped to that task |
| **A tool or CI job needs a write key** | Same rule. Per-vault, per-task, never the register |
| **The register goes stale** | A vault whose write key is missing from the register is, in practice, already frozen. Make the check automated — §7 |

---

## 5. Rotation, and one open question for the lead

`keys.json` carries `rotated_at` because of something the survey found and could not resolve.

Regulation Graph's `PUBLIC.md` carries visible `<VAULT-KEY-REMOVED>` and `<READ-KEY-REMOVED>` markers. A pre-publication audit found **its own original vault key** and **another vault's plaintext credential** committed in its history. Both were redacted, the history rebuilt, and a re-audit from a read-key clone reported *"205 files, zero findings."*

That was handled correctly and disclosed openly, which is genuinely to the project's credit. But:

> **⚠️ The published pages do not say whether the exposed vault key was *rotated* or only *removed from history*.**

By the estate's own doctrine — *"audit before the key, not after"* — removal alone does not undo distribution of ciphertext somebody already fetched. This is a question for the lead, not an assertion of a vulnerability. It is **Q6 in `08__`**, and answering it is the first entry in `audit/`.

**The rotation rule going forward:** if a write key is ever observed outside the keys vault — in a repo, a log, a transcript, a chat, a screenshot — it is burned. Create a new vault, migrate the content, republish under a new read key, and record both in the register with `rotated_at` set. Do not attempt to un-publish.

---

## 6. The recursion — and it must be answered before the vault is created

*"a key that won't be shared publicly"* is only half a design. The other half is: **what happens when that key is lost?**

There is no key recovery in sgit. If the keys vault's write key goes, every vault on the estate becomes frozen simultaneously, permanently. That is a worse outcome than never having built it.

`RECOVERY.md` must therefore live **outside** the vault it protects. Three options, and the pack recommends taking two of them:

1. **Offline, physical.** Printed, in a safe. Unglamorous, no dependencies, no expiry. **Recommended as primary.**
2. **A hardware-backed password manager** with an established recovery path. **Recommended as secondary.**
3. **Split with a trusted second party** (Shamir or simply a sealed envelope). Adds a person to the trust boundary; worth it only if continuity beyond one individual is a requirement — which for a public standards resource it arguably is.

**Do not** put it in another sgit vault. That is the recursion with extra steps.

State the choice in `PRIVATE.md`, dated, so future-you knows which one was actually done rather than which one was intended.

---

## 7. The public twin, and how to make the discipline automatic

Two artefacts, deliberately mirrored, never merged:

| | **Keys vault** (private) | **Catalogue vault** (`kc67yhgw`, public) |
|---|---|---|
| Holds | write keys + read keys + audits | read keys only |
| Read key | **never issued** | published |
| Answers | *how do I update this?* | *how do I read this?* |
| Failure mode | catastrophic, estate-wide | none — it is already public |

Then make the rule mechanical rather than remembered:

- **A pre-commit hook in every repo** rejecting anything matching `sgit_vk1_`. This alone would have prevented the one incident that happened.
- **A CI check** that every vault listed on `standards.sgit.ai` has a record in `keys.json` with `history_scanned: true` and a non-null `pre_publication_audit`.
- **A publish gate**: no read key goes on a page until its write key is in the register. Escrow is a precondition, so enforce it as one.
- **Prefix validation on every rendered credential** — the catalogue already does this; the standards site must too.

Publish the *fact* that a keys vault exists and the *policy* around it. That is a credibility asset for a site about compliance, and it costs nothing. Publish nothing else about it.

---

This document is released under the Creative Commons Attribution 4.0 International licence (CC BY 4.0).
