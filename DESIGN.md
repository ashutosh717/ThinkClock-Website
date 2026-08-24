---
name: ThinkClock Battery Labs
description: Signal-driven battery health intelligence, Nyquist spectroscopy, and cell marketplace.
colors:
  primary: "#5ce1c9"
  accent-copper: "#c97a4a"
  ink: "#0b0f0e"
  paper: "#f2f4f1"
  graphite: "#5b6663"
  card-bg: "#111716"
  surface-secondary: "#1b2523"
  border-stroke: "rgba(91, 102, 99, 0.45)"
  alert-coral: "#e8574a"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  data:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.05em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
  2xl: "18px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "#48ceb7"
  button-secondary:
    backgroundColor: "{colors.surface-secondary}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  card-default:
    backgroundColor: "{colors.card-bg}"
    textColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: ThinkClock Battery Labs

## Overview

**Creative North Star: "The Quantum Battery Observatory"**

ThinkClock Battery Labs captures the precision and aesthetic depth of advanced electrochemical physics, signal spectroscopy, and hardware-software battery intelligence. Built on an obsidian black canvas (`#0b0f0e`), the interface utilizes luminescent mint-teal signal accents (`#5ce1c9`) to signify live data, diagnostic health, and active battery states, complemented by warm copper accents (`#c97a4a`) for physical hardware and thermal insights.

The interface prioritizes dense, high-clarity data displays without sacrificing visual elegance. Micro-interactions and subtle Nyquist curves evoke physical Electrochemical Impedance Spectroscopy (EIS) and Acoustic/RF sensing waves, giving users a high-trust, scientific command-center experience.

**Key Characteristics:**
- Deep obsidian dark mode with subtle glowing radial gradients (`#5ce1c9` and `#c97a4a`).
- High-contrast typography pairing geometric headline display with readable engineering sans and technical data mono.
- Tonal layering over heavy dropshadows; translucent glass surfaces with precise slate borders.
- Signal-driven micro-interactions and interactive canvas visualizations.

## Colors

The palette balances dark slate backgrounds with high-luminance diagnostic signals.

### Primary
- **Mint Signal Teal** (`#5ce1c9`): Primary action state, active battery diagnostic indicator, focus rings, and high-priority call-to-actions. Used intentionally to draw focus to live data and key interactions.

### Secondary
- **Warm Copper / Amber** (`#c97a4a`): Secondary accent, hardware characterization highlights, thermal warning boundaries, and structural features.

### Neutral
- **Obsidian Ink** (`#0b0f0e`): Canvas background and dark container fill.
- **Deep Charcoal Card** (`#111716`): Surface color for elevated cards, modal containers, and dashboard widgets.
- **Dark Teal-Slate Container** (`#1b2523`): Secondary button backgrounds, pill badges, and input container fills.
- **Off-White Paper** (`#f2f4f1`): Primary text color for high contrast readability against dark backgrounds.
- **Muted Graphite** (`#5b6663`): Supporting labels, subtle gridlines, and border strokes (`rgba(91, 102, 99, 0.45)`).

### Named Rules
**The Signal Rarity Rule.** The Mint Signal Teal accent (`#5ce1c9`) is reserved for primary CTAs, active diagnostic states, and key interactive highlights. It represents ≤10% of any screen layout to maintain its visual impact.

## Typography

**Display Font:** `Space Grotesk` (fallback: `sans-serif`)
**Body Font:** `IBM Plex Sans` (fallback: `sans-serif`)
**Label/Mono Font:** `IBM Plex Mono` (fallback: `monospace`)

**Character:** Technical, confident, and authoritative. Space Grotesk introduces geometric modernism to headings, while IBM Plex Sans delivers pristine legibility for long-form technical prose and IBM Plex Mono powers diagnostic readouts.

### Hierarchy
- **Display** (Bold/SemiBold 600, clamp 2rem-3.5rem, line-height 1.1): Hero titles, key statistics, and section highlights.
- **Headline** (SemiBold 600, clamp 1.5rem-2.25rem, line-height 1.25): Card titles, feature section headings, modal titles.
- **Title** (Medium 500, 1.125rem-1.375rem, line-height 1.4): Widget titles, form section labels, table headers.
- **Body** (Regular 400, 1rem, line-height 1.6): Article body, explanatory copy, job descriptions.
- **Label / Data Mono** (Medium 500, 0.875rem, letter-spacing 0.05em, uppercase/normal): EIS frequency readouts, cell specs, status pills, code snippets.

### Named Rules
**The Monospace Measurement Rule.** Any numerical value representing battery voltage, capacity, SoH percentage, impedance frequency, or diagnostic metric MUST be rendered in `IBM Plex Mono`.

## Layout

The spatial model relies on a responsive 12-column grid system with generous horizontal section padding (`px-4 sm:px-6 lg:px-8`) and structured vertical rhythm (`py-12 lg:py-24`). Containers maintain max widths from `max-w-5xl` for text articles to `max-w-7xl` for marketing and configurator views. Spacing scales smoothly across 8px increments (8px, 16px, 24px, 32px, 48px).

## Elevation & Depth

ThinkClock uses flat tonal layering and subtle radial glow gradients rather than traditional multi-layered shadows. Depth is conveyed through background color contrast (`#0b0f0e` canvas vs `#111716` cards vs `#1b2523` interactive containers) and crisp 1px borders (`rgba(91, 102, 99, 0.45)`).

### Shadow Vocabulary
- **Signal Ambient Glow** (`box-shadow: 0 0 20px rgba(92, 225, 201, 0.2)`): Applied on active hover/focus of primary action elements.
- **Copper Ambient Glow** (`box-shadow: 0 0 20px rgba(201, 122, 74, 0.2)`): Applied on key hardware feature cards on hover.

### Named Rules
**The Flat-By-Default Rule.** Surfaces rest flat with subtle border strokes. Ambient glow shadows appear strictly during state transitions (hover, active focus, or active diagnostic selection).

## Shapes

Form language is modern and structured, featuring controlled 8px (`var(--radius-md)`) to 10px (`var(--radius-lg)`) border radiuses on cards, buttons, and inputs. Glassmorphic cards use subtle background blur (`backdrop-blur-md`) with 1px semi-transparent graphite borders.

## Components

### Buttons
- **Shape:** Border radius `8px` (`var(--radius-md)`).
- **Primary:** Background `#5ce1c9`, text `#0b0f0e`, font `IBM Plex Sans` (500). Hover: background `#48ceb7` with `scale-[1.02]`.
- **Secondary:** Background `#1b2523`, text `#f2f4f1`, border `1px solid rgba(91, 102, 99, 0.45)`. Hover: background `color-mix(in oklch, #1b2523, #f2f4f1 5%)`.
- **Ghost:** Background transparent, text `#f2f4f1`. Hover: background `#1b2523`.

### Cards / Containers
- **Corner Style:** `10px` (`var(--radius-lg)`).
- **Background:** `#111716` (Deep Charcoal Card).
- **Border:** `1px solid rgba(91, 102, 99, 0.45)`.
- **Internal Padding:** `24px` (`p-6`).

### Inputs / Fields
- **Style:** Background `#111716`, text `#f2f4f1`, border `1px solid rgba(91, 102, 99, 0.45)`, radius `8px`.
- **Focus:** Border `#5ce1c9`, ring `3px rgba(92, 225, 201, 0.3)`.

### Navigation
- **Header:** Sticky backdrop glass (`#0b0f0e/80`, `backdrop-blur-md`), bottom border `1px solid rgba(91, 102, 99, 0.3)`. Navigation links in `Space Grotesk` (500) with `#5ce1c9` hover underline.

## Do's and Don'ts

### Do:
- **Do** use `#5ce1c9` (Mint Signal Teal) for actionable buttons, diagnostic focus states, and primary CTAs.
- **Do** format technical metrics, numbers, and battery specs in `IBM Plex Mono`.
- **Do** maintain crisp 1px graphite borders (`rgba(91, 102, 99, 0.45)`) on dark card surfaces.
- **Do** keep background contrast rich with obsidian `#0b0f0e` canvas and `#111716` cards.

### Don't:
- **Don't** use bright non-brand accent colors (e.g. standard purple, neon yellow, bright blue).
- **Don't** clutter cards with heavy multi-layer box shadows; rely on tonal contrast and border strokes.
- **Don't** use low-contrast text for critical battery diagnostic readouts.
- **Don't** apply the Mint Signal Teal accent to large content background blocks.
