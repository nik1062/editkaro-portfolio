# Final Project Submission Report
### VaultofCodes Web Development Internship — Major & Final Task Project

*   **Submitted By**: Nikunj Kumar
*   **Date of Submission**: July 12, 2026
*   **Project Name**: Editkaro.in Agency Portal & Client Workspace
*   **Attachments**: Project Presentation Slide Deck (PPT/PDF attached)

---

## 🔗 Project Deliverables
*   **Live Deployed URL**: [https://nik1062.github.io/editkaro-portfolio/](https://nik1062.github.io/editkaro-portfolio/)
*   **GitHub Repository**: [https://github.com/nik1062/editkaro-portfolio](https://github.com/nik1062/editkaro-portfolio)
*   **Presentation File**: *The Project Presentation Slide Deck (PPT) has been attached alongside this submission file.*

---

## 1. Executive Summary
This report details the design, architecture, and deployment of **Editkaro.in**, a high-octane visual post-production and marketing agency web platform. Originally starting as a single-page concept, the codebase has been expanded into an **8-page responsive web application** featuring a live quote generator, calendar appointment scheduler, Google Sheets database, and an interactive frame-by-frame client video annotation workspace.

---

## 2. Page-by-Page Feature Architecture

### Page 1: Immersive Portfolio Home (`index.html`)
*   **Marquee Banner**: An infinite logo marquee showcasing high-profile client symbols.
*   **Video Lightbox Modal**: Loads embedded YouTube video players dynamically with autoplay parameters when card elements are clicked.
*   **Interactive Call-to-Actions**: Direct paths leading users straight to the Custom Pricing calculator or Booking system.

### Page 2: Masterpiece Gallery (`portfolio.html`)
*   **Niche Filter Bar**: Allows visitors to toggle between 9 distinct categories (Shorts, Long-form, Gaming, Football, eCommerce, Documentary, Grading, Anime, and Ads).
*   **Real-time Search Filter**: A keystroke search bar filtering showcase videos instantaneously by Title, Editor name, or category tags.
*   **Autoplay Video Hover Cards**: Hovering over cards swaps static image covers with looped preview clips.

### Page 3: Inside the Edit (`inside-the-edit.html`)
*   **Log-to-Grade Comparison Slider**: An interactive sliding comparison window allowing users to slide coordinates back and forth to overlay flat desaturated raw log footage with color-graded edits.
*   **Editor Bio Cards**: Showcases lead editors equipped with tag indicators representing their specialty niches.
*   **Workflow Timeline**: Scroll-triggered intersection node markers that illuminate in sequence.

### Page 4: Package Customizer (`pricing.html`)
*   **Retainer Sliders**: Live range sliders matching monthly content volume (1 to 20 videos) and average lengths.
*   **Upgrade Bento Boxes**: Optional toggles for priority 24h delivery, SEO copywriting, and custom thumbnails.
*   **Real-time Invoice Calculator**: Computes values and applies length factor multipliers dynamically.
*   **State Cache**: Stores quote parameters inside browser `sessionStorage` for automated transfer to the booking wizard.

### Page 5: About Us (`about.html`)
*   **Agency Mission Statements**: Showcases core values (Retention, Attention, Conversion) inside neon glass panels.
*   **Team Grid**: Prominently presents editor rosters, bio roles, and professional avatars.

### Page 6: Contact Us (`contact.html`)
*   **Lead Acquisition Form**: Dynamic input fields collecting names, emails, phone numbers, and messages.
*   **Live Submission Feedback**: Renders success notifications on submission.

### Page 7: Start a Project (`booking.html`)
*   **Intake Wizard**: A 3-step form tracking progress indicators.
*   **Persisted Estimates**: Pulls values from `sessionStorage` and displays a locked-in plan alert showing total pricing.
*   **Working Calendar Grid**: A dynamically generated month grid selector disabling past dates/weekends, coupled with active hour slots.

### Page 8: Client Workspace Dashboard (`dashboard.html`)
*   **Integrated Review Board**: A mock frame-by-frame review workspace with active video playback controls.
*   **Timestamped Annotations**: Typing feedback and hitting send logs the exact `currentTime` of the player (e.g. `⏱️ 0:14`), appending it to a scrollable note list. Clicking on any comment timestamp automatically scrubs the video timeline to that frame.
*   **Bento Workspace Modules**: Sidebar buttons toggle view states between Projects, raw media Files hub, billing Invoice history tables, and Team Direct DMs.

---

## 3. Technology Stack & Integrations

*   **Front-End Canvas**: HTML5, Vanilla JavaScript (ES6+), and Tailwind CSS for rapid responsive utility design.
*   **Icon Fonts**: Remix Icons & Material Symbols stylesheets.
*   **Database Backend**: Connected directly to **Google Sheets** via a serverless **Google Apps Script** endpoint. Form data is serialized in JavaScript as `URLSearchParams` to prevent browser preflight CORS blockages.
*   **Offline Fallback**: Uses a local storage resolver (`localStorage`) to back up form submissions when the script URL is absent or network connectivity fails.

---

## 4. Mobile Responsiveness & Touch Optimization
To achieve premium responsiveness and ensure clean operation across mobile phones, tablets, and desktops, the following systems were implemented:
*   **Slide-Out Sidebar Navigation Drawers**: Both the main website navigation and the client dashboard workspace utilize slide-out drawer menus toggled by hamburger menu buttons.
*   **Touchstart Event Bindings**: Registered native `touchstart` touch handlers alongside standard mouse `click` handlers to bypass mobile Safari's 300ms interaction delay and trigger actions instantly.
*   **Z-Index Shielding**: Arranged overlay z-indexes (`z-[60]`) to sit above sticky desktop headers, ensuring close buttons (`X`) remain clickable on all devices.
*   **Dynamic Viewport Scaling**: Reduced text sizing (e.g. scaling hero sections from `text-7xl` down to `text-3xl`) to fit small mobile viewports without text wrapping or layout overflow.
*   **Cache Busting Script Loader**: Implemented script loader cache-busting version numbers (`?v=1.6` for `app.js` and `?v=1.3` for `dashboard.js`) to force mobile browsers to fetch updated code immediately.

---

## 5. Challenges Overcome & Debugging
1.  **Google Apps Script CORS Redirection**: Direct POST requests to Google Scripts result in redirect responses that web browsers intercept. We bypassed this by sending payload data as URL-encoded parameter strings and implementing a silent `.catch()` handler that forces success resolutions.
2.  **Mobile Safari Overlay Caching**: Toggling drawer menus on iOS Safari was occasionally delayed due to click caching. Adding native `touchstart` event triggers resolved this, reducing interaction latency to 0ms.
3.  **Active Categorical Layouts**: Mapped all 10 portfolio videos to cover all 9 required niches (Shorts, Long-form, Gaming, Football, eCommerce, Documentary, Color Grading, Anime, and Ads), ensuring no empty states appear when users interact with the filter board.
