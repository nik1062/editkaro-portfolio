// Editkaro.in - Multi-step Booking Portal Logic

document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".form-step");
    const stepIndicators = document.querySelectorAll(".step-indicator");
    const progressLine = document.querySelector(".wizard-step-progress");
    
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const submitBtn = document.getElementById("submit-booking-btn");

    let currentStep = 0;

    // Load persisted quote from pricing page if available
    const persistedQuote = sessionStorage.getItem("editkaro_quote");
    const quoteAlert = document.getElementById("persisted-quote-alert");

    if (persistedQuote && quoteAlert) {
        const quote = JSON.parse(persistedQuote);
        quoteAlert.innerHTML = `
            <div class="glass-card" style="margin-bottom: 2rem; padding: 1.5rem; border-color: var(--neon-cyan); background: rgba(6, 182, 212, 0.05);">
                <h4 style="color: var(--neon-cyan); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">✨ Custom Plan Detected</h4>
                <p style="font-size: 0.9rem;">You selected <strong>${quote.volume} x ${quote.videoType}</strong> with <strong>${quote.speed}</strong> delivery. Total estimated: <strong>${quote.totalPrice.toLocaleString()}/mo</strong>. We have pre-configured your request!</p>
            </div>
        `;
    }

    // Step navigation controller
    function updateWizard() {
        // Show/hide sections
        steps.forEach((step, idx) => {
            if (idx === currentStep) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }
        });

        // Update Indicators
        stepIndicators.forEach((ind, idx) => {
            if (idx < currentStep) {
                ind.className = "step-indicator completed";
                ind.textContent = "✓";
            } else if (idx === currentStep) {
                ind.className = "step-indicator active";
                ind.textContent = idx + 1;
            } else {
                ind.className = "step-indicator";
                ind.textContent = idx + 1;
            }
        });

        // Update Progress Line width
        const totalSteps = steps.length;
        const progressPercent = (currentStep / (totalSteps - 1)) * 100;
        if (progressLine) {
            progressLine.style.width = `${progressPercent}%`;
        }

        // Configure Nav Buttons
        if (currentStep === 0) {
            prevBtn.style.display = "none";
        } else {
            prevBtn.style.display = "inline-flex";
        }

        if (currentStep === totalSteps - 1) {
            nextBtn.style.display = "none";
            submitBtn.style.display = "inline-flex";
        } else {
            nextBtn.style.display = "inline-flex";
            submitBtn.style.display = "none";
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            if (validateStep(currentStep)) {
                currentStep++;
                if (currentStep === 2) {
                    // Step 3 features matching editor lists and scheduler
                    matchEditor();
                }
                updateWizard();
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            currentStep--;
            updateWizard();
        });
    }

    // Step validation helper
    function validateStep(stepIdx) {
        if (stepIdx === 0) {
            // Check if vibe card is active
            const activeVibe = document.querySelector(".vibe-card.active");
            if (!activeVibe) {
                alert("Please select a video editing vibe / style to proceed!");
                return false;
            }
            return true;
        } else if (stepIdx === 1) {
            // Check inputs
            const name = document.getElementById("client-name").value.trim();
            const email = document.getElementById("client-email").value.trim();
            const channel = document.getElementById("client-channel").value.trim();
            if (name === "" || email === "" || channel === "") {
                alert("Please fill in your Name, Email, and Channel reference!");
                return false;
            }
            return true;
        }
        return true;
    }

    // Vibe Card Selector Toggle
    const vibeCards = document.querySelectorAll(".vibe-card");
    vibeCards.forEach(card => {
        card.addEventListener("click", () => {
            vibeCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        });
    });

    // Match Editor function based on vibe selection
    const editorListContainer = document.getElementById("matched-editor-list");
    function matchEditor() {
        if (!editorListContainer) return;
        
        const activeVibeText = document.querySelector(".vibe-card.active h4").textContent;
        let matchedName = "Rohan S.";
        let matchedStyle = "High Retention & Shorts Specialist";
        let matchedAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80";

        if (activeVibeText.includes("Cinematic")) {
            matchedName = "Vikram K.";
            matchedStyle = "Color Grading & Cinematic Documentary Editor";
            matchedAvatar = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80";
        } else if (activeVibeText.includes("Aesthetic")) {
            matchedName = "Aryan D.";
            matchedStyle = "Gaming & Anime Flow Montage Specialist";
            matchedAvatar = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80";
        }

        editorListContainer.innerHTML = `
            <div class="editor-match-card">
                <img class="editor-match-avatar" src="${matchedAvatar}" alt="${matchedName}">
                <div class="editor-match-info">
                    <div class="editor-match-name">${matchedName}</div>
                    <div class="editor-match-style">🎯 Matches Selected Vibe: ${matchedStyle}</div>
                    <p style="font-size: 0.8rem; color: #9ca3af; margin-top: 0.25rem;">Ranks in the top 5% on Editkaro, generated 50M+ organic views.</p>
                </div>
                <div class="badge">Assigned</div>
            </div>
        `;
    }

    // Interactive Calendar Grid Rendering
    const calendarGrid = document.querySelector(".calendar-grid");
    if (calendarGrid) {
        renderCalendar();
    }

    function renderCalendar() {
        calendarGrid.innerHTML = "";

        // Add weekday header labels
        const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        daysOfWeek.forEach(day => {
            const div = document.createElement("div");
            div.className = "calendar-header-day";
            div.textContent = day;
            calendarGrid.appendChild(div);
        });

        // Current date calculations (simulate July 2026)
        const totalDays = 31;
        const startOffset = 3; // July 2026 starts on Wednesday

        // Append empty spacer boxes for offset
        for (let i = 0; i < startOffset; i++) {
            const emptyDiv = document.createElement("div");
            calendarGrid.appendChild(emptyDiv);
        }

        // Append month days
        for (let day = 1; day <= totalDays; day++) {
            const dayDiv = document.createElement("div");
            dayDiv.className = "calendar-day";
            dayDiv.textContent = day;

            // Make some days disabled (e.g. past days or fully booked days)
            if (day < 13 || day % 6 === 0) {
                dayDiv.classList.add("disabled");
            } else {
                dayDiv.addEventListener("click", () => {
                    document.querySelectorAll(".calendar-day").forEach(d => d.classList.remove("active"));
                    dayDiv.classList.add("active");
                });
            }

            calendarGrid.appendChild(dayDiv);
        }
    }

    // Time Slot Selector
    const timeSlots = document.querySelectorAll(".time-slot");
    timeSlots.forEach(slot => {
        slot.addEventListener("click", () => {
            timeSlots.forEach(s => s.classList.remove("active"));
            slot.classList.add("active");
        });
    });

    // Form Submission / Thank you modal
    const bookingForm = document.getElementById("booking-intake-form");
    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Validate calendar and time slot selections
            const activeDay = document.querySelector(".calendar-day.active");
            const activeSlot = document.querySelector(".time-slot.active");

            if (!activeDay || !activeSlot) {
                alert("Please select both a date and a time slot for your discovery call!");
                return;
            }

            // Display Success Overlay / Modal
            showSuccessModal(activeDay.textContent, activeSlot.textContent);
        });
    }

    function showSuccessModal(day, slot) {
        const body = document.querySelector("body");
        const modal = document.createElement("div");
        modal.className = "lightbox active"; // Reuse lightbox styling
        modal.id = "success-modal";
        modal.innerHTML = `
            <div class="lightbox-content glass-card" style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 3rem; background: var(--bg-dark); max-width: 500px; aspect-ratio: auto; height: auto;">
                <div style="width: 80px; height: 80px; border-radius: 50%; background: rgba(6, 182, 212, 0.1); border: 2px solid var(--neon-cyan); display: flex; align-items: center; justify-content: center; font-size: 2.5rem; color: var(--neon-cyan); margin-bottom: 2rem; box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);">✓</div>
                <h2 style="font-size: 2rem; margin-bottom: 1rem;" class="text-grad-primary">Project Booked!</h2>
                <p style="color: #9ca3af; margin-bottom: 1.5rem; font-size: 0.95rem;">Your strategy call is confirmed for <strong>July ${day}, 2026</strong> at <strong>${slot}</strong>. An email invite has been sent with link details.</p>
                <p style="color: #d1d5db; margin-bottom: 2rem; font-size: 0.9rem; background: rgba(168, 85, 247, 0.05); padding: 0.8rem; border-radius: 8px; border: 1px solid rgba(168, 85, 247, 0.1);">You can now access your workspace to upload footage & request edits.</p>
                <button class="btn btn-primary" id="go-to-dash-btn">Access Client Workspace</button>
            </div>
        `;

        body.appendChild(modal);

        // Redirect to Dashboard
        const goDash = modal.querySelector("#go-to-dash-btn");
        goDash.addEventListener("click", () => {
            window.location.href = "dashboard.html";
        });
    }

    // Initialize wizard on load
    updateWizard();
});
