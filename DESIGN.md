---
name: Modding Lab
colors:
  surface: '#10141a'
  surface-dim: '#10141a'
  surface-bright: '#353940'
  surface-container-lowest: '#0a0e14'
  surface-container-low: '#181c22'
  surface-container: '#1c2026'
  surface-container-high: '#262a31'
  surface-container-highest: '#31353c'
  on-surface: '#dfe2eb'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dfe2eb'
  inverse-on-surface: '#2d3137'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#c2c7d0'
  on-secondary: '#2c3138'
  secondary-container: '#42474f'
  on-secondary-container: '#b1b5bf'
  tertiary: '#f1f6ff'
  on-tertiary: '#2b3138'
  tertiary-container: '#d4dae3'
  on-tertiary-container: '#595f67'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#dee2ec'
  secondary-fixed-dim: '#c2c7d0'
  on-secondary-fixed: '#171c23'
  on-secondary-fixed-variant: '#42474f'
  tertiary-fixed: '#dde3ec'
  tertiary-fixed-dim: '#c1c7d0'
  on-tertiary-fixed: '#161c23'
  on-tertiary-fixed-variant: '#41474f'
  background: '#10141a'
  on-background: '#dfe2eb'
  surface-variant: '#31353c'
typography:
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.25rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  margin: 24px
---

# Design System for Taj's Mods

## Brand & Style

This design system shifts away from ethereal abstraction toward a grounded, technical environment designed for precision and utility. The brand personality is that of an advanced engineering hub—quiet, professional, and highly efficient. It prioritizes clarity and functional hierarchy over decorative elements, catering to users who value performance and deep customization.

The visual style is a marriage of **Minimalism** and **Technical Utility**. It utilizes a "dark-mode first" philosophy where depth is communicated through tonal shifts rather than heavy shadows. The aesthetic is inspired by high-end diagnostic tools and modular hardware interfaces, stripping away "sci-fi" clutter to focus on data density and clear interaction paths.

## Colors

The palette is rooted in a deep, near-black navy to provide a stable, low-strain foundation for long sessions. Surfaces use subtle variations of charcoal to create logical groupings without breaking the monolithic feel of the UI.

- **Primary Accent:** A technical Cyan is reserved strictly for active states, primary actions, and critical status indicators.
- **Surface Strategy:** Backgrounds remain solid and dark. Interactive panels use a slightly lighter charcoal to distinguish themselves from the canvas.
- **Functional Colors:** Success, warning, and error states should utilize the same technical vibrancy as the primary cyan but in their respective hues (Emerald and Crimson), maintaining a consistent saturation level.

## Typography

The typography system uses a dual-font approach to balance character with readability. **Space Grotesk** is utilized for headlines, labels, and data points to provide a distinct, geometric "lab" feel. Its unique apertures and technical construction reinforce the engineering aesthetic.

For long-form text and general UI descriptions, **Inter** is used to ensure maximum legibility and neutral tone. Small labels and "metadata" should frequently use uppercase styling with slight tracking increases to mimic technical schematics and serial-number markings.

## Layout & Spacing

The design system employs a strict **fixed-grid** model for desktop views to maintain the "instrument panel" feel, while transitioning to a fluid model for smaller viewports.

A 12-column grid provides the framework, with a 4px base unit governing all internal padding and margins. Elements are encouraged to align to the grid borders to create a structured, "snapped-in" look. Use generous margins on the exterior of the primary container to focus the user's eye on the central "workspace," while internal gutters remain tight (16px) to maximize information density within modules.

## Elevation & Depth

In this design system, depth is achieved through **low-contrast outlines** and tonal layering rather than traditional shadows.

- **Level 0 (Background):** The deepest navy/black canvas.
- **Level 1 (Panels):** Solid charcoal surfaces with a 1px border (#FFFFFF at 10% opacity).
- **Level 2 (Modals/Popovers):** Slightly lighter charcoal with a subtle, 2px cyan top-border for orientation.
- **Glassmorphism Exception:** The "Hero" or "Primary Feature" card may use a 20px backdrop blur with a 15% transparent surface to create a single point of high-tier visual interest.

Shadows should be avoided entirely, except for a very soft, primary-colored outer glow (10px blur, 20% opacity) applied to active primary buttons and status indicators.

## Shapes

The shape language is "Moderate-Technical." A base radius of 8px (Level 2) is applied to most components, including buttons, input fields, and small panels. This provides a balanced, approachable feel that remains grounded in professional utility without appearing overly geometric or sharp.

Larger containers may use a 16px radius (rounded-lg) to define the primary workspace, while internal structural lines and dividers maintain sharp 90-degree angles to preserve the modding hub's architectural integrity.

## Components

### Buttons

- **Primary:** Solid background (Cyan), dark text. On hover, a low-profile cyan glow appears.
- **Secondary:** Ghost style with a 1px border. Background fills slightly on hover.

### Status Indicators

Small circular dots. Use a "pulsing" animation for "Active" or "Processing" states. The color should always match the primary cyan for "OK" and technical blue for "Standby."

### Input Fields

Darker than the panel surface. Borders are 1px and only turn Cyan when focused. Use monospaced numbers (from Space Grotesk) for numerical inputs.

### Cards & Panels

Solid fills. Headers should be separated from content by a 1px horizontal rule. Avoid internal padding larger than 24px to keep the interface feeling compact and utility-driven.

### Chips

Small, rectangular with a 4px radius. High-contrast text on a very dark background, using uppercase Space Grotesk for a "tagging" or "serial" look.
