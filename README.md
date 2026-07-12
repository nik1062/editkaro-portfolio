# Editkaro.in - Creative Video Agency Web Application

Welcome to the newly designed, high-performance web experience for **Editkaro.in**, built for the VaultofCodes portfolio challenge.

This project showcases a premium **"Dark Nebula Cyber"** aesthetic using frosted-glass panels (glassmorphism), dynamic mouse-tracking lighting gradients, neon accents, and timeline-inspired controls.

---

## 📂 Project Directory Structure

```text
C:\Users\nikun\OneDrive\Desktop\on work\internship\Project 2/
│
├── index.html              # Main Landing & Agency Home Page (includes Email Collector)
├── portfolio.html          # Dedicated Video Portfolio Gallery (9 required niches)
├── inside-the-edit.html    # Color Grading Comparison Slider & Work Process Timeline
├── pricing.html            # Interactive Video Package Pricing Calculator
├── booking.html            # Multi-step Client Onboarding Intake Wizard & Call Scheduler
├── about.html              # Dedicated About Us Page (Brand Mission, Vision, and Values)
├── contact.html            # Dedicated Contact Us Page (Phone, Email, Name, and Message Form)
├── google_apps_script.js   # Database script to deploy on Google Sheets Apps Script
│
├── style.css               # Central stylesheet containing design tokens and custom animations
├── app.js                  # Core App JavaScript (Portfolio Filter, Lightbox, Sheets submit integration)
├── pricing.js              # Pricing calculations and session storage caching
├── booking.js              # Booking intake logic, calendar generation, and editor assignment
└── dashboard.js            # Client review portal notes, sidebar panels, and mock DMs
```

---

## ⚡ Key Immersive Features

1. **Mouse-Tracking Neon Glow**: A glowing light gradient follows the client's mouse cursor across the page background, reinforcing the high-tech, futuristic cyber aesthetic.
2. **Interactive Video Previews**: Hovering over any video card in the portfolio grid plays a muted video clip preview directly inside the card thumbnail, complete with a timeline scrubber progress indicator. Clicking a card pops up a widescreen lightbox player modal.
3. **Before-and-After Slider**: In the "Inside the Edit" page, clients can drag a divider handle across a video frame. The left half uses custom CSS filters to dynamically simulate raw, flat camera LOG footage; the right half represents a color-graded final cut.
4. **Custom Pricing Calculator**: A dashboard-like estimator. Moving the sliders (Video Quantity and average length) or toggling add-ons (Sound design, Custom thumbnails, Motion graphics) dynamically updates a floating breakdown invoice.
5. **Intake Booking Portal**: A multi-step questionnaire that matches the client with an editor based on their chosen style, integrates a calendar scheduler day-grid, and stores details calculated from the calculator page.
6. **Workspace Annotation Board**: Inside the mock dashboard, clients can play draft edits, pause, type feedback, and click submit to attach **timestamped comment tags** (e.g. `⏱️ 0:14 - Make this slide faster`). Clicking on the timestamp automatically jumps the player timeline to that exact frame.

---

## 🚀 How to Run & Preview Locally

You can preview the website by launching a local HTTP development server.

### Option A: VS Code Live Server
1. Open this directory inside Visual Studio Code.
2. Click **Go Live** on the bottom right status bar to open the landing page.

### Option B: Node.js Dev Server
If you have Node.js installed, open your terminal in this project directory and run:
```bash
npx -y http-server -p 8080
```
Then navigate to `http://localhost:8080` in your web browser.
