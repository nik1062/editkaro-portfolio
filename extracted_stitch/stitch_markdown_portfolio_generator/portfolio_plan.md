# Expanded Multi-Page Plan: Editkaro.in Creative Agency Site

To win the **Best Project Incentive** and create a portfolio that will impress **Editkaro.in**, we will build a feature-rich, high-performance multi-page experience.

---

## 🗂️ 1. Multi-Page Site Architecture

### Page 1: Immersive Portfolio & Home
*   **Hero Section**: Cinematic title overlay with magnetic social/newsletter links, animated counters showing "Views Generated," "Retention Rate Increase," and custom CTAs.
*   **Dynamic Portfolio Category Filter**: A search + filter interface for all 9 categories (Short-form, Long-form, Gaming, Football edits, eCommerce, Documentary, Color Grading, Anime, Ads). Uses custom cards (9:16 vertical grids for shorts, 16:9 for long-form) with automated video previewing.
*   **Interactive Video Lightbox**: Cinematic overlay with comments and detailed edit notes (e.g. "Color grading applied", "Sound effects breakdown").
*   **Brand Logo Marquee**: Infinite-scrolling banner showing popular YouTubers and brands they edit for.

### Page 2: "Inside the Edit" (About, Team & Interactive Visual Sliders)
*   **Interactive Before-and-After Slider**: An interactive image/video comparison slider where users can drag a handle to see raw log/green screen footage vs. the final color-graded, motion-graphics-heavy edit.
*   **Our Editing Lab (Meet the Team)**: Glassmorphic cards showcasing their lead editors, their specialization (e.g., "Gaming & Sound Fx specialist"), and their hardware/software setups (Premiere Pro, After Effects, DaVinci Resolve) with custom icons.
*   **Interactive Process Walkthrough**: An animated timeline that tracks steps from raw footage upload ➡️ hook editing ➡️ sound design ➡️ feedback ➡️ rendering.

### Page 3: Package Customizer & Cost Calculator
*   **Interactive Quote Estimator**: Sliders for Video Length, Quantity per month, Delivery speed (24h, 48h, Standard). Toggle switches for add-ons: Subtitles, Custom Sound Design, Anime Overlays, YouTube Thumbnails.
*   **Estimated Cost Calculator Card**: Live price breakdown on the side with a button to "Lock in the Price" that redirects to booking.
*   **Visual Pricing Tiers**: Static pricing cards for standard plans (e.g., "Shorts Kickstart," "Viral Growth Pack," "Corporate Package").

### Page 4: Interactive Client Portal (Mock Dashboard)
*   **The Concept**: Video editing clients face friction during feedback loops. We will design a **Mock Client Portal Dashboard** to show Editkaro.in's clients how they can manage their projects.
*   **Dashboard Features**:
    *   **Project Status Tracker**: Progress bars (e.g., "Reviewing Raw Footage" ➡️ "Draft 1 Uploaded" ➡️ "Approved").
    *   **Interactive Video Reviewer**: A video player where users can pause and click on the screen to add a "timestamped edit note" (mocked via JS).
    *   **Asset Library**: Folders with mock files (raw clips, exports, graphics).

### Page 5: "Start a Project" Booking & Contact Page
*   **Custom Project Intake Form**: Instead of a simple form, this will be a step-by-step form (intake portal) where clients select their project goals, paste their channel link, specify their editing style, and submit.
*   **Interactive Calendar Scheduler**: A beautifully styled visual booking calendar mock to schedule discovery calls.

---

## 🎨 2. Visual Theme & Accent Setup
*   **Color Theme**: "Dark Nebula Cyber"
    *   Background: `#030307` to `#0A0A14` gradient.
    *   Neon Accents: Cyber Purple (`#A855F7`), Cyber Pink (`#EC4899`), Electric Cyan (`#06B6D4`).
*   **Layout Style**: Asymmetrical cards, diagonal section dividers, glassmorphic filters, glowing borders, custom cursor tracking lights (cyber glow follows the cursor).

---

## ✍️ Expanded Prompt for Google Stitch / UI Generator

```text
Create a high-fidelity, highly professional multi-page UI design for "Editkaro.in" (a premium social media marketing and video editing agency website). 

Design Theme:
- "Dark Nebula Cyber" style: deep dark violet/black base (#030307), translucent glassmorphism containers (backdrop-filter: blur(16px)), with vibrant neon gradients of electric purple (#A855F7), hot pink (#EC4899), and electric cyan (#06B6D4) acting as glowing borders, timeline indicators, and callouts.
- Typography should be futuristic and bold: Outfit or Syne for headers, Inter for text.

Please generate the following 5 pages:

1. Landing/Home Page:
   - Sticky navbar with glassmorphic backdrop, neon logo, and a "Client Portal" button with a cyan glow.
   - Hero: Headline "High-Retention Video Editing That Drives Virality", with double-cta buttons ("Calculate Pricing", "View Portfolio") and three key stats cards (100M+ Views, 92% Average Retention, 24-Hr Delivery).
   - Portfolio Showcase: Grid layout containing categories (Shorts, Long-form, Gaming, Football edits, eCommerce, Documentary, Color Grading, Anime, Ads). Video cards for Shorts must be 9:16 vertical; other cards 16:9 horizontal. Hovering over a card shows visual tag list, editor name, and a glowing play icon.
   - Client Marquee: A seamless scrolling bar displaying client creator names and logo badges.

2. About Us / "Inside the Edit" Page:
   - Interactive Before-and-After Segment: A screen-split component with a central slider handle. Left side shows raw, flat, ungraded grey/log footage; right side shows a dynamic, vibrantly color-graded frame with speed lines and text graphics.
   - "Meet the Editors" grid: Cards showing editor profile shots, their design software tags (Premiere, AE, DaVinci), specialized genre badges (Anime, Football, Documentary), and a "View Editor's Clips" button.
   - The Workflow Timeline: Vertical animated pipeline detailing project steps with glowing circles.

3. Video Pricing Calculator Page:
   - Interactive configuration dashboard. Left side has interactive slider bars for "Monthly Video Count" and "Desired Length (minutes)", and toggles for "Expedited Delivery", "Professional Voiceover", "SEO Optimization", and "Thumbnail Package". 
   - Right side features a floating glassmorphic pricing breakdown card showing "Monthly Estimate: $999/mo", listing the selected specs, and a large violet button: "Secure Plan & Book onboarding".

4. Client Workspace (Mock Portal Dashboard):
   - A modern user dashboard. Sidebar contains navigation (Active Projects, Files, Billings, Settings).
   - Main panel contains: "Active Edits" showing progress tracking bars, and an "Interactive Review Board" with a video player displaying a draft edit. Beside the player is a panel for "Review Notes" allowing timestamped feedback (e.g., "0:14 - Add zoom effect").

5. Contact/Booking Portal:
   - Multi-step questionnaire card to capture client leads (Step 1: Choose video style, Step 2: Input target channel link, Step 3: Select monthly budget range).
   - Visually styled scheduling calendar grid showing active time slots for a strategy call.
```
