---
name: Dark Nebula Cyber
colors:
  surface: '#131319'
  surface-dim: '#131319'
  surface-bright: '#393840'
  surface-container-lowest: '#0e0e14'
  surface-container-low: '#1b1b22'
  surface-container: '#1f1f26'
  surface-container-high: '#2a2930'
  surface-container-highest: '#35343b'
  on-surface: '#e4e1eb'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#e4e1eb'
  inverse-on-surface: '#303037'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#ffb0cd'
  on-secondary: '#640039'
  secondary-container: '#aa0266'
  on-secondary-container: '#ffbad3'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#009eb9'
  on-tertiary-container: '#002f38'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#ffd9e4'
  secondary-fixed-dim: '#ffb0cd'
  on-secondary-fixed: '#3e0022'
  on-secondary-fixed-variant: '#8c0053'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#131319'
  on-background: '#e4e1eb'
  surface-variant: '#35343b'
  background-deep: '#030307'
  background-surface: '#0A0A14'
  neon-purple: '#A855F7'
  neon-pink: '#EC4899'
  neon-cyan: '#06B6D4'
  glass-border: rgba(255, 255, 255, 0.12)
  text-primary: '#FFFFFF'
  text-secondary: '#94A3B8'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-xl:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style
The design system embodies a high-octane, futuristic aesthetic tailored for a high-end video editing agency. It leverages the **Dark Nebula Cyber** style, which combines the depth of deep-space gradients with the electric energy of vaporwave-inspired neon accents. 

The visual narrative is built on **Glassmorphism** and **Cyber-Brutalism**. It utilizes asymmetrical layouts, diagonal section dividers, and high-contrast glowing elements to evoke a sense of professional creativity, technical mastery, and viral energy. The UI should feel immersive, like a high-end digital workstation, signaling to clients that their content will be transformed through cutting-edge post-production techniques.

**Design Principles:**
- **Depth through Luminance:** Use glowing borders and box-shadows to signify interactivity and hierarchy against the near-black background.
- **Glassmorphic Containers:** UI panels use high backdrop blur (16px) and low-opacity fills to maintain context within the "Nebula" environment.
- **Dynamic Asymmetry:** Break traditional grid structures with diagonal lines and staggered card layouts to reflect the rhythmic nature of video editing.

## Colors
This design system uses a strictly **dark-mode** palette. The foundation is built on deep violet-black gradients that provide a canvas for vibrant, emissive neon accents.

- **Primary (Cyber Purple):** Used for primary actions, progress bars, and branding. It represents the "Nebula" core.
- **Secondary (Cyber Pink):** Used for highlights, secondary CTAs, and accentuating visual interest in complex components.
- **Tertiary (Electric Cyan):** Used for technical indicators, "success" states, and links. It provides a sharp contrast to the warmer purples.
- **Neutral:** A range of near-blacks and deep greys used for surfaces and text, ensuring high legibility and depth.

**Gradients:**
- **Background Gradient:** Linear transition from `#030307` at the top to `#0A0A14` at the bottom.
- **Accent Gradient:** A "Cyber Linear" gradient moving from `#A855F7` to `#EC4899` should be used for high-impact buttons and hero text.

## Typography
The typography strategy contrasts futuristic, wide-set headers with a clean, functional sans-serif for body content. 

- **Outfit** is utilized for all headlines. It should be styled with a "glow" text-shadow in specific hero contexts to match the neon aesthetic.
- **Inter** handles all utilitarian text, ensuring high readability in technical areas like the Price Calculator and Client Portal.

For **Display-LG** text, use uppercase styling with slight negative letter spacing to create a compact, high-impact cinematic feel. Labels should often be uppercase with increased letter spacing for a "technical readout" appearance.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a 12-column structure for desktop and a 4-column structure for mobile. 

**Rhythm & Alignment:**
- A base unit of **4px** is used for all spacing. 
- **Asymmetrical Layouts:** While following the grid, cards and sections should frequently use offset positioning (e.g., a card spanning columns 2-7, while the next spans 6-12) to create visual tension.
- **Diagonal Dividers:** Section transitions should utilize `clip-path` or CSS transforms to create 3-5 degree diagonal slopes rather than flat horizontal lines.
- **Interactive Margins:** The "Client Workspace" uses a fixed sidebar (280px) with a fluid main content area.

## Elevation & Depth
In this design system, depth is not conveyed through traditional drop shadows, but through **Tonal Layering** and **Luminance**.

1.  **Level 0 (Base):** The deep `#030307` background.
2.  **Level 1 (Surfaces):** Glassmorphic containers with `backdrop-filter: blur(16px)` and a semi-transparent fill of `rgba(10, 10, 20, 0.7)`.
3.  **Level 2 (Active Elements):** Elements "rise" by increasing the opacity of their neon borders and adding an outer glow (`box-shadow: 0 0 15px [color]`).

**Shadow Character:** Shadows are rarely black. They are either diffused neon glows that match the primary/secondary color of the element or soft, tinted blurs that suggest the element is floating above a light source.

## Shapes
The shape language is "Soft-Tech." UI elements use moderate rounding to balance the aggressive neon colors and futuristic fonts, making the interface feel premium rather than abrasive.

- **Primary Elements:** Buttons and standard cards use a **0.5rem (8px)** corner radius.
- **Large Containers:** Glassmorphic panels and hero sections use a **1rem (16px)** radius.
- **Asymmetrical Clipping:** Certain hero images or "Inside the Edit" sliders should use aggressive diagonal clips (e.g., `polygon(0 0, 100% 10%, 100% 100%, 0 90%)`) to reinforce the cyber aesthetic.

## Components

### Buttons
- **Primary:** Gradient fill (#A855F7 to #EC4899), white text, 8px radius. On hover, apply a 15px glow shadow of the primary color.
- **Secondary (Ghost):** 1.5px border of #06B6D4, transparent background. On hover, fill with 10% opacity cyan.
- **CTA:** For "Lock in Price," use a larger size with a pulsing outer glow.

### Cards
- **Portfolio Cards:** Use a 9:16 aspect ratio for "Shorts" and 16:9 for "Long-form." Borders are `1px solid rgba(255, 255, 255, 0.1)`. On hover, the border transitions to a neon gradient.
- **Glass Cards:** Used in the "Meet the Team" and "Pricing" sections. Must have a 16px backdrop blur.

### Inputs & Sliders
- **Range Sliders:** The track is deep charcoal, and the thumb is a glowing Cyber Pink circle. The filled portion of the track uses a Cyber Cyan gradient.
- **Text Inputs:** Dark surface (`#0A0A14`), subtle 1px bottom-border that glows cyan when focused.

### Specialized Components
- **Before/After Slider:** A vertical handle with a white emissive line and two neon arrows. The "After" side should have a subtle scanline overlay.
- **Timeline Tracker:** A vertical line using a neon purple gradient, with glowing nodes that illuminate as the project progresses.
- **Video Lightbox:** Full-screen overlay with a 32px backdrop blur on the background, framing the video with a thin neon-pink border.