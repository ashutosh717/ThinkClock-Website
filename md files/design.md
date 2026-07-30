# Design — visual direction for ThinkClock v2

## 1. Ground it in the subject

ThinkClock's real subject matter isn't "clean energy" in the abstract — it's **instrumented, lab-measured battery diagnostics**: EIS Nyquist plots, acoustic/RF spectroscopy traces, cell cyclers, thermal chambers, potentiostats. The company's whole pitch is that battery health is invisible until you instrument it and read the signal. The design should look like it comes from that lab, not from a generic "green-tech startup" template — no leaf icons, no generic gradient-blob hero, no stock EV imagery.

Audience: battery pack engineers, EV fleet technical buyers, recyclers, and job candidates — a technical, credibility-driven audience, not a consumer one. The page's job is to make deep-tech diagnostics feel legible and trustworthy at a glance.

## 2. Signature element

**An animated EIS Nyquist-plot line as the hero visual** — the actual semicircular impedance curve ThinkClock's own tech produces, redrawn as a live, subtly animated SVG trace (not a stock chart). As the user scrolls, the curve can shift shape slightly (representing a "degrading" vs "healthy" cell), tying motion directly to what the company measures rather than using motion as decoration. This is the one bold, unmistakable element — everything else on the page stays quiet so this reads clearly.

## 3. Color — 4-6 named tokens

| Token | Hex | Use |
|---|---|---|
| `ink` | `#0B0F0E` | Primary background — near-black with a faint green undertone, evoking an oscilloscope/lab display, not flat black |
| `signal` | `#5CE1C9` | Primary accent — a cool teal/cyan, standing in for the "signal trace" on an impedance readout. Used sparingly: the Nyquist line, links, key CTAs |
| `copper` | `#C97A4A` | Secondary accent — evokes the physical cell/copper terminal material. Used for small warm highlights, never as a dominant color (avoid it reading as a generic "warm terracotta AI" palette by keeping it a minor accent only) |
| `paper` | `#F2F4F1` | Light surface for content-dense sections (technology explainers, tables) where a dark background would hurt readability |
| `graphite` | `#5B6663` | Secondary text, hairlines, dividers on dark backgrounds |
| `alert` | `#E8574A` | Errors/warnings only — never decorative |

This avoids the current AI-design defaults directly: not the cream-and-terracotta look (terracotta here is a minor accent, not the base), not a generic acid-green-on-black tech look (teal instead of neon green, and it's derived from the EIS signal concept, not chosen for "looking techy"), not a broadsheet layout.

## 4. Typography

- **Display**: a technical grotesque with some personality — e.g. **Space Grotesk** or **General Sans** — used at large sizes for headlines, set fairly tight, always sentence case (not shouting).
- **Body**: a clean humanist sans with strong legibility at small sizes — e.g. **Inter** or **IBM Plex Sans** — since the audience will read genuinely technical paragraphs (spectroscopy explainers), not skim marketing fluff.
- **Utility/data**: a monospace — e.g. **IBM Plex Mono** or **JetBrains Mono** — reserved for anything that reads as instrument output: cell IDs, SoH percentages, capacity/voltage figures in the configurator, code-like labels. This is what makes the "lab readout" feeling real rather than implied.

## 5. Layout concept

- **Hero**: full-bleed dark (`ink`) section, the animated Nyquist curve as the dominant visual (not a screenshot, not a stock photo of a battery), headline stating the actual thesis — battery health is invisible until measured — set in the display face, a single clear CTA.
- **Technology section**: switches to `paper` background — this is the dense, explanatory content (EIS/Acoustic/RF), and a light, high-contrast surface reads better for paragraphs and diagrams than dark mode does. The section transition itself (dark hero → light technical body) mirrors "raw signal → interpreted insight," which is literally ThinkClock's value proposition.
- **Cell Store / configurator**: table-and-form-dense, monospace for all numeric data (voltage, capacity, SoH%, price) so it reads like real instrument output rather than a marketing card.
- **Careers**: warmer, more human — team photos, `copper` accent used more generously here than anywhere else on the site, since this is the one section that's about people rather than instrumentation.
- Avoid numbered-marker sequences (01/02/03) unless the content is a genuine ordered process (e.g. the actual "configure → analyze → build → order" flow on the homepage is a real sequence — fine there; job listing cards or team bios are not sequences — don't number them).

## 6. Motion

- `lenis` smooth scroll on marketing pages only (Home, Technology, About) — not on the configurator, account, or careers application flow, where scroll-hijacking friction actively hurts task completion.
- The Nyquist-curve hero animation is the one orchestrated motion moment — scroll-triggered shape change, not a looping ambient animation running indefinitely (avoid the "everything gently floats" AI-design tell).
- `animate-ui` components used for hover/tap micro-interactions on buttons and cards — restrained (subtle scale/opacity, not bouncy spring effects everywhere).
- Respect `prefers-reduced-motion` throughout — the Nyquist animation should have a static-but-still-effective fallback state, not just disappear.

## 7. Voice/copy direction

- Write from the reader's side: an EV fleet operator wants to know "will this tell me when a battery is about to fail," not "we leverage physics-informed ML models." Lead with the plain-language question, follow with the technical substantiation.
- Active voice, no filler. Buttons say what they do: "Request a demo," "Apply now," "Configure your battery" — not "Learn more" everywhere.
- Errors and empty states speak in the product's voice and say what to do next (e.g. an empty Cell Store result: "No cells match this configuration yet — try widening your voltage range" — not a bare "No results").
