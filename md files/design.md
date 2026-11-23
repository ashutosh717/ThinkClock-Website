# Design — visual direction for ThinkClock v2

## 1. Ground it in the subject

ThinkClock's real subject matter isn't "clean energy" in the abstract — it's **instrumented, lab-measured battery diagnostics**: EIS Nyquist plots, acoustic/RF spectroscopy traces, cell cyclers, thermal chambers, potentiostats. The company's whole pitch is that battery health is invisible until you instrument it and read the signal. The design should look like it comes from that lab, not from a generic "green-tech startup" template — no leaf icons, no generic gradient-blob hero, no stock EV imagery.

Audience: battery pack engineers, EV fleet technical buyers, recyclers, and job candidates — a technical, credibility-driven audience, not a consumer one. The page's job is to make deep-tech diagnostics feel legible and trustworthy at a glance.

## 2. Signature element

**An animated EIS Nyquist-plot line as the hero visual** — the actual semicircular impedance curve ThinkClock's own tech produces, redrawn as a live, subtly animated SVG trace (not a stock chart). As the user scrolls, the curve can shift shape slightly (representing a "degrading" vs "healthy" cell), tying motion directly to what the company measures rather than using motion as decoration. This is the one bold, unmistakable element — everything else on the page stays quiet so this reads clearly.

## 3. Color — theme roles

| Role | Dark | Light |
|---|---|---|
| Page background | `#0A0B0D` | `#FAFAF8` |
| Alternate section | `#0F1114` | `#F2F1EE` |
| Card background | `#14171B` | `#FFFFFF` |
| Card border | `rgba(255,255,255,0.08)` | `#E4E2DD` |
| Headings | `#F5F7FA` | `#111418` |
| Body text | `#B4BCC6` | `#3B424C` |
| Muted text | `#7C8591` | `#6B7380` |
| Large accent | `#FF5A1F` | `#E8590C` |
| Small accent / hover | `#FF7A45` | `#C2410C` |
| Error / warning | `#F87171` | `#B91C1C` |

Use the orange family for emphasis and keep the warm-white light background neutral. Light-mode body copy uses a readable 400–500 weight, and small orange labels use the darker accent for contrast.

## 4. Typography

- **Display**: **Playfair Display** carries the editorial engineering headlines, used at large sizes and kept in sentence case.
- **Body**: **Cooper Hewitt** provides the condensed sans voice; use weight 400 or 500 for readable technical copy, especially in light mode.
- **Utility/data**: a monospace — e.g. **IBM Plex Mono** or **JetBrains Mono** — reserved for anything that reads as instrument output: cell IDs, SoH percentages, capacity/voltage figures in the configurator, code-like labels. This is what makes the "lab readout" feeling real rather than implied.

## 5. Layout concept

- **Hero**: full-bleed dark (`ink`) section, the animated Nyquist curve as the dominant visual (not a screenshot, not a stock photo of a battery), headline stating the actual thesis — battery health is invisible until measured — set in the display face, a single clear CTA.
- **Technology section**: use the theme's alternate section surface for dense explanatory content (EIS/Acoustic/RF), keeping diagrams and paragraphs readable in both themes.
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
