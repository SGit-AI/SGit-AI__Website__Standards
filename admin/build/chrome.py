#!/usr/bin/env python3
"""The single definition of this site's nav and footer, and the tool that applies it.

Run from anywhere: python3 admin/build/chrome.py

Ported from pki.sgit.ai, which is this site's house pattern. Every page is hand-written
static HTML — that stays true, because a human should be able to open any file and edit
it. What is NOT hand-maintained is the chrome: the nav row (including the version badge
that validate.js requires to agree everywhere) and the footer columns. Those are defined
once here and rewritten in place across the tree, which is what stops a thirty-page site
from drifting.

Adding a page: add it to NAV or FOOTER if it belongs there, write the file with any
nav/footer block at all, then run this. The block contents are replaced; the `here`
state is set from the page's own path.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
VERSION = (ROOT / "admin/build/version.txt").read_text().strip()
GH = "https://github.com/SGit-AI/SGit-AI__Website__Standards"
PARENT = "https://sgit.ai"
PARENT_TITLE = ("sgit.ai — the parent project: the vault layer that holds the instrument "
                "vaults this site projects")

# The nav, two levels. Each entry is (label, own page, [(sub-label, href), ...], (prefixes)).
#
# Two rules the structure has to keep, inherited from the house pattern:
#   · A group label is always a link to a real page, never a menu-only stub. Nothing on
#     this site should be reachable only by opening a dropdown.
#   · `prefixes` decides the "here" state, so a page that is not itself in the nav — a
#     provision page, a document reader — still lights up the group it belongs to.
NAV = [
    ("The method", "method/index.html", [
        ("How a regulation becomes a graph", "method/index.html"),
        ("The grammar", "method/grammar.html"),
        ("Bridges, not merges", "method/crosswalks.html"),
        ("The citation scheme", "method/citation.html"),
        ("The grounding ladder", "method/ladder.html"),
    ], ("method/",)),
    ("Instruments", "instruments/index.html", [
        ("Every instrument", "instruments/index.html"),
        ("EU AI Act", "eu-ai-act/index.html"),
        ("GDPR", "gdpr/index.html"),
        ("ISO/IEC 27001", "iso-27001/index.html"),
        ("ISO 31000", "iso-31000/index.html"),
    ], ("instruments/", "eu-ai-act/", "gdpr/", "iso-27001/", "iso-31000/")),
    ("Subsets", "subsets/index.html", [
        ("The subset method", "subsets/index.html"),
        ("Agentic access", "subsets/agentic-access/index.html"),
    ], ("subsets/",)),
    ("Vaults &amp; tools", "vaults/index.html", [
        ("The vaults", "vaults/index.html"),
        ("Key discipline", "vaults/keys.html"),
        ("Tools outside the vault", "tools/index.html"),
        ("The citation resolver", "tools/resolver.html"),
    ], ("vaults/", "tools/")),
    ("Docs", "documents/index.html", [
        ("The documents", "documents/index.html"),
        ("For agents", "agents/index.html"),
        ("What is actually shipped", "shipped/index.html"),
    ], ("documents/", "agents/", "shipped/", "briefs/")),
    ("Site", "admin/comms.html", [
        ("Comms: tasks &amp; requests", "admin/comms.html"),
        ("Release history", "admin/versions.html"),
        ("Admin &amp; engineering", "admin/index.html"),
        ("The network", "network/index.html"),
        ("Where we lose", "about/participant.html"),
    ], ("admin/", "about/", "network/")),
]

FOOTER = [
    ("The method", [
        ("How a regulation becomes a graph", "method/index.html"),
        ("The grammar", "method/grammar.html"),
        ("Bridges, not merges", "method/crosswalks.html"),
        ("The citation scheme", "method/citation.html"),
        ("The grounding ladder", "method/ladder.html"),
    ]),
    ("Instruments", [
        ("Every instrument", "instruments/index.html"),
        ("EU AI Act", "eu-ai-act/index.html"),
        ("GDPR", "gdpr/index.html"),
        ("ISO/IEC 27001", "iso-27001/index.html"),
        ("ISO 31000", "iso-31000/index.html"),
        ("Agentic access subset", "subsets/agentic-access/index.html"),
    ]),
    ("Delivery", [
        ("The vaults", "vaults/index.html"),
        ("Key discipline", "vaults/keys.html"),
        ("Tools outside the vault", "tools/index.html"),
        ("For agents", "agents/index.html"),
        ("What is actually shipped", "shipped/index.html"),
    ]),
    ("Site", [
        ("The documents", "documents/index.html"),
        ("Comms: tasks &amp; requests", "admin/comms.html"),
        ("Release history", "admin/versions.html"),
        ("The network", "network/index.html"),
        ("llms.txt", "llms.txt"),
        ("llms-full.txt", "llms-full.txt"),
    ]),
]

BLURB = ("Laws, standards and frameworks as addressable provisions: the method that turns "
         "an instrument into a graph, the instruments modelled so far, and the vaults that "
         "deliver them. Part of the <a href=\"https://sgit.ai\" style=\"display:inline;"
         "padding:0\"><b>sgit.ai</b></a> network. All content CC BY 4.0; the instruments "
         "themselves keep their own licences.")
PARTNOTE = ('⚠ Participant disclosure: published by the sgit project, which builds the vault '
            'layer these instruments are delivered on — and this is not a compliance product. '
            '<a href="{up}about/participant.html" style="display:inline;padding:0">Read the '
            'disclosure</a>.')
NETLINE = ('<a href="https://sgit.ai"><b>↗ sgit.ai</b></a> — the parent project and the vault '
           'estate · <a href="https://risks.sgit.ai">↗ risks.sgit.ai</a> — the register and the '
           'acceptance decision · <a href="https://graphs.sgit.ai">↗ graphs.sgit.ai</a> — the '
           'general theory · <a href="https://pki.sgit.ai">↗ pki.sgit.ai</a> — the house '
           'pattern · <a href="https://sgit.ai/network/index.html">↗ the network</a>')
PARTNOTE_SELF = ('⚠ Participant disclosure: published by the sgit project, and not a compliance '
                 'product. You are on the disclosure page.')


def nav_html(rel, up):
    groups = []
    for label, own, subs, prefixes in NAV:
        active = rel == own or any(rel.startswith(pre) for pre in prefixes)
        links = "\n".join(
            f'      <a class="sl{" here" if href == rel else ""}" href="{up}{href}">{text}</a>'
            for text, href in subs)
        groups.append(
            f'    <div class="ni ni-has">\n'
            f'      <a class="nl{" here" if active else ""}" href="{up}{own}">{label}'
            f'<span class="caret"></span></a>\n'
            f'      <div class="sub">\n{links}\n      </div>\n'
            f'    </div>')
    rows = "\n".join(groups)
    return (f'<nav class="site"><div class="row">\n'
            f'  <a class="brand" href="{up}index.html">standards<span>.sgit.ai</span></a>\n'
            f'  <a class="parent" href="{PARENT}" title="{PARENT_TITLE}">↗ part of <b>sgit.ai</b></a>\n'
            f'  <span class="stage-pill">one instrument modelled</span>\n'
            f'  <a class="ver" href="{up}admin/versions.html" title="Site release history">{VERSION}</a>\n'
            f'  <button class="nav-toggle" type="button" aria-expanded="false" aria-label="Menu">Menu</button>\n'
            f'  <div class="nav-items">\n{rows}\n  </div>\n'
            f'  <a class="gh" href="{GH}">★ GitHub</a>\n'
            f'  <script src="{up}assets/nav.js" defer></script>\n'
            f'</div></nav>')


def footer_html(rel, up):
    partnote = PARTNOTE_SELF if rel == "about/participant.html" else PARTNOTE.format(up=up)
    md_twin = f' · <a href="{up}index.md">this page as markdown</a>' if rel == "index.html" else ""
    cols = "\n".join(
        "  <div>\n"
        f"    <h4>{head}</h4>\n"
        + "\n".join(f'    <a href="{l if l.startswith("http") else up + l}">{t}</a>' for t, l in links)
        + "\n  </div>"
        for head, links in FOOTER)
    return (f'<footer class="site"><div class="cols">\n'
            f'  <div>\n'
            f'    <div class="brandline">standards<span>.sgit.ai</span></div>\n'
            f'    <p>{BLURB}</p>\n'
            f'    <p class="netline">{NETLINE}</p>\n'
            f'    <p class="partnote">{partnote}</p>\n'
            f'    <p class="verline">site <a href="{up}admin/versions.html">{VERSION}</a> · '
            f'<a href="{up}admin/index.html">engineering</a>{md_twin}</p>\n'
            f'  </div>\n{cols}\n</div></footer>')


def stamp_text_twins():
    """The version also appears in llms.txt, llms-full.txt and index.md, and validate.js
    enforces that it agrees. Nothing else SETS it there, so own it here rather than
    hand-editing it every release — which is how pki.sgit.ai silently missed it twice."""
    out = []
    for name, pattern, repl in [
        ("llms.txt", r"Site version: v\d+\.\d+\.\d+", f"Site version: {VERSION}"),
        ("llms-full.txt", r"Site version: v\d+\.\d+\.\d+", f"Site version: {VERSION}"),
        ("index.md", r"· site v\d+\.\d+\.\d+ ·", f"· site {VERSION} ·"),
    ]:
        f = ROOT / name
        if not f.exists():
            continue
        t = f.read_text()
        t2, n = re.subn(pattern, repl, t, count=1)
        if n and t2 != t:
            f.write_text(t2)
            out.append(name)
    return out


def main():
    changed = []
    for path in sorted(ROOT.rglob("*.html")):
        if ".git" in path.parts:
            continue
        rel = path.relative_to(ROOT).as_posix()
        up = "../" * (len(path.relative_to(ROOT).parts) - 1)
        text = path.read_text()
        before = text
        text, n_nav = re.subn(r'<nav class="site">.*?</nav>', lambda _: nav_html(rel, up),
                              text, count=1, flags=re.S)
        text, n_foot = re.subn(r'<footer class="site">.*?</footer>', lambda _: footer_html(rel, up),
                               text, count=1, flags=re.S)
        if not n_nav or not n_foot:
            print(f"  ! {rel}: missing {'nav' if not n_nav else ''}"
                  f"{' and ' if not n_nav and not n_foot else ''}"
                  f"{'footer' if not n_foot else ''} block", file=sys.stderr)
        if text != before:
            path.write_text(text)
            changed.append(rel)
    changed += stamp_text_twins()
    print(f"chrome: {VERSION} applied — {len(changed)} file(s) updated")
    for c in changed:
        print(f"  · {c}")


if __name__ == "__main__":
    try:
        main()
    except BrokenPipeError:
        sys.stdout = None
