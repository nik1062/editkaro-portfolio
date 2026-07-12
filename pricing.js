// Editkaro.in - Pricing & Quote Calculator Logic

document.addEventListener("DOMContentLoaded", () => {
    // Calculator elements
    const volumeSlider = document.getElementById("calc-volume");
    const volumeVal = document.getElementById("volume-val");
    
    const lengthSlider = document.getElementById("calc-length");
    const lengthVal = document.getElementById("length-val");
    
    const speedSelect = document.getElementById("calc-speed");
    
    const addonCards = document.querySelectorAll(".addon-card");
    
    // Summary elements
    const sumVolume = document.getElementById("sum-volume");
    const sumLength = document.getElementById("sum-length");
    const sumSpeed = document.getElementById("sum-speed");
    const sumAddons = document.getElementById("sum-addons");
    const sumTotal = document.getElementById("sum-total");
    const bookBtn = document.getElementById("book-calculated-btn");

    if (volumeSlider && lengthSlider) {
        // Initialize event listeners
        volumeSlider.addEventListener("input", updateQuote);
        lengthSlider.addEventListener("input", updateQuote);
        if (speedSelect) speedSelect.addEventListener("change", updateQuote);

        addonCards.forEach(card => {
            card.addEventListener("click", () => {
                card.classList.toggle("active");
                updateQuote();
            });
        });

        // Run initial calculation
        updateQuote();
    }

    function updateQuote() {
        const volume = parseInt(volumeSlider.value);
        const length = parseInt(lengthSlider.value);
        const speed = speedSelect ? speedSelect.value : "standard";

        // Update Slider Labels
        volumeVal.textContent = `${volume} Video${volume > 1 ? 's' : ''}`;
        lengthVal.textContent = length === 1 ? "Short-form (<60s)" : `${length} min${length > 1 ? 's' : ''}`;

        // Base rate calculation per video
        let baseRate = 0;
        let videoTypeLabel = "";
        
        if (length === 1) {
            baseRate = 45; // $45 per short-form
            videoTypeLabel = "Short-form (<1 min)";
        } else if (length <= 5) {
            baseRate = 110; // $110 per mid-form (1-5 min)
            videoTypeLabel = "Medium-form (1-5 min)";
        } else {
            baseRate = 220; // $220 per long-form (5-15 min)
            videoTypeLabel = "Long-form (5-15 min)";
        }

        // Speed Multiplier
        let speedMultiplier = 1.0;
        let speedLabel = "Standard (5-7 Days)";
        if (speed === "fast") {
            speedMultiplier = 1.35;
            speedLabel = "Priority (48 Hours)";
        } else if (speed === "express") {
            speedMultiplier = 1.6;
            speedLabel = "Express (24 Hours)";
        }

        // Add-ons calculation
        let totalAddonCostPerVideo = 0;
        let activeAddonsList = [];

        addonCards.forEach(card => {
            if (card.classList.contains("active")) {
                const price = parseFloat(card.dataset.price);
                totalAddonCostPerVideo += price;
                activeAddonsList.push(card.querySelector("h4").textContent);
            }
        });

        // Core Calculation
        const costPerVideo = (baseRate * speedMultiplier) + totalAddonCostPerVideo;
        const totalMonthlyEstimate = Math.round(costPerVideo * volume);

        // Update summary text
        if (sumVolume) sumVolume.textContent = `${volume} x ${videoTypeLabel}`;
        if (sumLength) sumLength.textContent = `$${Math.round(baseRate * speedMultiplier)} / video`;
        if (sumSpeed) sumSpeed.textContent = speedLabel;
        if (sumAddons) {
            sumAddons.textContent = activeAddonsList.length > 0 
                ? `+ $${totalAddonCostPerVideo} / video (${activeAddonsList.join(", ")})` 
                : "None selected";
        }
        if (sumTotal) sumTotal.textContent = `$${totalMonthlyEstimate.toLocaleString()}/mo`;

        // Store quote configuration in sessionStorage for retrieval in the booking page
        const quoteConfig = {
            volume: volume,
            videoType: videoTypeLabel,
            speed: speedLabel,
            addons: activeAddonsList,
            totalPrice: totalMonthlyEstimate
        };
        sessionStorage.setItem("editkaro_quote", JSON.stringify(quoteConfig));
    }

    // Redirect to Booking and carry the values
    if (bookBtn) {
        bookBtn.addEventListener("click", () => {
            window.location.href = "booking.html";
        });
    }
});
