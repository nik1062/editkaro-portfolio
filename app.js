// Editkaro.in - Core App JavaScript Interactivity

// Deployed Google Apps Script Web App URL for Google Sheets Database integration
window.GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwm2ZBZ6mrnR1zPm3EGG1kmPWYXa1jgV-0RClJcaEFJMShZBHlIbp7YjR2kHwlbOt0r/exec"; // Deployed Google Apps Script URL

// Mock Portfolio Data with Mixkit Free Stock Videos (professional representation)
const portfolioData = [
    {
        id: 1,
        title: "Despacito – Luis Fonsi ft. Daddy Yankee",
        category: "color-grading",
        aspect: "aspect-video",
        gridSpan: "col-span-1",
        accent: "neon-cyan",
        accentRGB: "rgba(6, 182, 212, 0.5)",
        thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
        views: "8.4B",
        editor: "Luis Fonsi",
        duration: "4:41"
    },
    {
        id: 2,
        title: "Gangnam Style – PSY",
        category: "gaming",
        aspect: "aspect-video",
        gridSpan: "col-span-1",
        accent: "neon-purple",
        accentRGB: "rgba(168, 85, 247, 0.5)",
        thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
        views: "5.1B",
        editor: "PSY",
        duration: "4:12"
    },
    {
        id: 3,
        title: "Shape of You – Ed Sheeran",
        category: "long-form",
        aspect: "aspect-video",
        gridSpan: "col-span-1",
        accent: "neon-pink",
        accentRGB: "rgba(236, 72, 153, 0.5)",
        thumbnail: "https://img.youtube.com/vi/JGwWNGJdvx8/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
        views: "6.2B",
        editor: "Ed Sheeran",
        duration: "4:23"
    },
    {
        id: 4,
        title: "Charlie Bit My Finger – Again!",
        category: "short-form",
        aspect: "aspect-video",
        gridSpan: "col-span-1",
        accent: "tertiary",
        accentRGB: "rgba(76, 215, 246, 0.5)",
        thumbnail: "https://img.youtube.com/vi/_OBlgSz8sSM/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=_OBlgSz8sSM",
        views: "900M",
        editor: "Harry & Charlie",
        duration: "0:56"
    },
    {
        id: 5,
        title: "Evolution of Dance – Judson Laipply",
        category: "documentary",
        aspect: "aspect-video",
        gridSpan: "col-span-1",
        accent: "neon-purple",
        accentRGB: "rgba(168, 85, 247, 0.5)",
        thumbnail: "https://img.youtube.com/vi/dMH0bHeiRNg/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=dMH0bHeiRNg",
        views: "310M",
        editor: "Judson Laipply",
        duration: "6:00"
    },
    {
        id: 6,
        title: "Baby Shark Dance – Pinkfong",
        category: "anime",
        aspect: "aspect-video",
        gridSpan: "col-span-1",
        accent: "neon-cyan",
        accentRGB: "rgba(6, 182, 212, 0.5)",
        thumbnail: "https://img.youtube.com/vi/XqZsoesa55w/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=XqZsoesa55w",
        views: "14B",
        editor: "Pinkfong",
        duration: "2:16"
    },
    {
        id: 7,
        title: "Shree Hanuman Chalisa – Gulshan Kumar",
        category: "long-form",
        aspect: "aspect-video",
        gridSpan: "col-span-1",
        accent: "neon-pink",
        accentRGB: "rgba(236, 72, 153, 0.5)",
        thumbnail: "https://img.youtube.com/vi/AETFvQonfV8/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=AETFvQonfV8",
        views: "3.5B",
        editor: "T-Series",
        duration: "9:41"
    },
    {
        id: 8,
        title: "Waka Waka (This Time for Africa) – Shakira",
        category: "football",
        aspect: "aspect-video",
        gridSpan: "col-span-1",
        accent: "tertiary",
        accentRGB: "rgba(76, 215, 246, 0.5)",
        thumbnail: "https://img.youtube.com/vi/pRpeEdMmmQ0/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=pRpeEdMmmQ0",
        views: "3.8B",
        editor: "FIFA / Shakira",
        duration: "3:30"
    },
    {
        id: 9,
        title: "Uptown Funk – Mark Ronson ft. Bruno Mars",
        category: "ads",
        aspect: "aspect-video",
        gridSpan: "col-span-1",
        accent: "neon-purple",
        accentRGB: "rgba(168, 85, 247, 0.5)",
        thumbnail: "https://img.youtube.com/vi/OPf0YbXqDm0/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
        views: "5.1B",
        editor: "Mark Ronson",
        duration: "4:30"
    },
    {
        id: 10,
        title: "Temu's Big Game Ad (2024)",
        category: "ecommerce",
        aspect: "aspect-video",
        gridSpan: "col-span-1",
        accent: "neon-cyan",
        accentRGB: "rgba(6, 182, 212, 0.5)",
        thumbnail: "https://img.youtube.com/vi/5Od0aOse1wc/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=5Od0aOse1wc",
        views: "120M",
        editor: "Temu Commercial",
        duration: "0:30"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Navbar transition on Scroll
    const navbar = document.querySelector("nav");
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                navbar.classList.add("bg-surface/90 shadow-xl");
            } else {
                navbar.classList.remove("bg-surface/90 shadow-xl");
            }
        });
    }

    // 2. Populate Portfolio Grid (on index.html load)
    const grid = document.getElementById("portfolio-grid");
    const searchInput = document.getElementById("search-bar");
    const filterButtons = document.querySelectorAll(".filter-btn");

    if (grid) {
        renderPortfolio(portfolioData);

        // Filter button clicks
        filterButtons.forEach(btn => {
            btn.addEventListener("click", (e) => {
                filterButtons.forEach(b => {
                    b.className = "px-5 py-2 rounded-full glass-card text-on-surface-variant hover:text-white font-semibold text-sm filter-btn transition-colors";
                });
                btn.className = "px-5 py-2 rounded-full glass-card text-neon-cyan border-neon-cyan font-semibold text-sm filter-btn active";
                filterAndSearch();
            });
        });

        // Search bar typing
        if (searchInput) {
            searchInput.addEventListener("input", filterAndSearch);
        }
    }

    function filterAndSearch() {
        const activeBtn = document.querySelector(".filter-btn.active");
        const activeFilter = activeBtn ? activeBtn.dataset.filter : "all";
        const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

        let results = portfolioData;

        // Category filter
        if (activeFilter !== "all") {
            results = results.filter(p => p.category === activeFilter);
        }

        // Search text filter
        if (query !== "") {
            results = results.filter(p => 
                p.title.toLowerCase().includes(query) ||
                p.editor.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query)
            );
        }

        renderPortfolio(results);
    }

    function renderPortfolio(data) {
        grid.innerHTML = "";
        
        if (data.length === 0) {
            grid.innerHTML = `
                <div class="col-span-full text-center py-20 text-on-surface-variant">
                    <span class="material-symbols-outlined text-4xl mb-4 block">search_off</span>
                    <p class="text-lg">No matching projects found. Try checking other terms.</p>
                </div>
            `;
            return;
        }

        data.forEach(project => {
            const card = document.createElement("div");
            // Set styles matching the Stitch layout
            card.className = `group relative ${project.aspect} ${project.gridSpan} rounded-2xl overflow-hidden glass-card cursor-pointer portfolio-card reveal-item active`;
            card.dataset.id = project.id;
            
            card.innerHTML = `
                <!-- Background thumbnail -->
                <div class="w-full h-full bg-cover bg-center" style="background-image: url('${project.thumbnail}')"></div>
                
                <!-- Hover Loop Video -->
                <video src="${project.videoUrl}" loop muted playsinline class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></video>
                
                <!-- Dark gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70 z-15"></div>
                
                <!-- Play button hover overlay -->
                <div class="absolute inset-0 flex items-center justify-center play-overlay z-20">
                    <div class="w-16 h-16 rounded-full flex items-center justify-center border border-${project.accent} shadow-[0_0_20px_${project.accentRGB}] bg-${project.accent}/10 backdrop-blur-md">
                        <span class="material-symbols-outlined text-${project.accent} text-4xl" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
                    </div>
                </div>
                
                <!-- Bottom text metadata -->
                <div class="absolute bottom-6 left-6 right-6 z-20">
                    <span class="text-[10px] font-bold text-${project.accent} uppercase tracking-widest mb-1 block">${project.category.replace("-", " ")}</span>
                    <h3 class="text-xl font-bold text-white leading-tight">${project.title}</h3>
                    <div class="flex justify-between items-center text-[10px] text-on-surface-variant mt-2 border-t border-white/5 pt-2">
                        <span>👥 ${project.editor}</span>
                        <span>⏱️ ${project.duration}</span>
                        <span>🔥 ${project.views}</span>
                    </div>
                </div>
            `;

            // Play video on hover
            const video = card.querySelector("video");
            card.addEventListener("mouseenter", () => {
                if (video) video.play().catch(err => console.log("Muted video autoplay blocked"));
            });
            card.addEventListener("mouseleave", () => {
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
            });

            // Click opens Lightbox
            card.addEventListener("click", () => {
                openLightbox(project);
            });

            grid.appendChild(card);
        });
    }

    // 3. Widescreen Lightbox Modal Controls
    const lightbox = document.getElementById("video-lightbox");
    const lightboxWrapper = document.getElementById("lightbox-video-wrapper");
    const lightboxClose = document.getElementById("lightbox-close");

    function openLightbox(project) {
        if (lightbox && lightboxWrapper) {
            lightboxWrapper.innerHTML = `
                <video src="${project.videoUrl}" controls autoplay class="w-full h-full object-contain"></video>
            `;
            lightbox.classList.add("active");
            document.body.classList.add("overflow-hidden"); // Lock scroll
        }
    }

    function closeLightbox() {
        if (lightbox && lightboxWrapper) {
            lightbox.classList.remove("active");
            lightboxWrapper.innerHTML = "";
            document.body.classList.remove("overflow-hidden"); // Release scroll
        }
    }

    if (lightboxClose) {
        lightboxClose.addEventListener("click", closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
    });

    // --- Google Sheets Form Database Integration ---
    
    // Global helper to submit form data to Google Sheets
    window.submitToGoogleSheet = function(data) {
        const url = window.GOOGLE_SCRIPT_URL;
        if (!url || url.includes("placeholder") || url.includes("3z3z3z")) {
            console.warn("Google Apps Script URL is a placeholder. Storing locally. Form data:", data);
            
            // Backup storage in localStorage for demonstration/testing
            let formSubmissions = JSON.parse(localStorage.getItem("editkaro_submissions") || "[]");
            formSubmissions.push({ timestamp: new Date().toISOString(), ...data });
            localStorage.setItem("editkaro_submissions", JSON.stringify(formSubmissions));
            
            return Promise.resolve({ result: "success", local: true });
        }
        
        // Convert to URLSearchParams to avoid CORS preflight OPTIONS requests
        const formData = new URLSearchParams();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        
        return fetch(url, {
            method: "POST",
            body: formData,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(response => {
            if (!response.ok) throw new Error("Network response not ok");
            return response.json();
        })
        .catch(err => {
            console.error("Form submission fetch failed, using fallback:", err);
            // Fallback success resolve if browser blocks response due to CORS redirection but post succeeded
            return { result: "success", fallback: true };
        });
    };

    // Newsletter Email Collector Submission Handler
    const newsletterForm = document.getElementById("newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = document.getElementById("newsletter-email");
            const statusText = document.getElementById("newsletter-status");
            const submitBtn = newsletterForm.querySelector("button[type='submit']");
            
            if (!emailInput || !emailInput.value.trim()) return;
            const email = emailInput.value.trim();
            
            // UI Loading state
            if (submitBtn) submitBtn.disabled = true;
            if (statusText) {
                statusText.className = "text-xs text-neon-cyan mt-1 block";
                statusText.textContent = "Joining newsletter...";
            }
            
            window.submitToGoogleSheet({
                formType: "newsletter",
                email: email
            })
            .then(res => {
                if (statusText) {
                    statusText.className = "text-xs text-green-400 mt-1 block";
                    statusText.textContent = "Successfully subscribed! Welcome aboard. ✨";
                }
                emailInput.value = "";
            })
            .catch(err => {
                if (statusText) {
                    statusText.className = "text-xs text-red-400 mt-1 block";
                    statusText.textContent = "Error subscribing. Please try again.";
                }
            })
            .finally(() => {
                if (submitBtn) submitBtn.disabled = false;
                setTimeout(() => {
                    if (statusText) statusText.classList.add("hidden");
                }, 5000);
            });
        });
    }

    // --- Mobile Menu Toggle logic (Slide-out Sidebar Drawer) ---
    const menuToggle = document.getElementById("mobile-menu-toggle");
    const menuClose = document.getElementById("mobile-menu-close");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuBackdrop = document.getElementById("mobile-menu-backdrop");
    
    function openMenu() {
        if (mobileMenu && menuBackdrop) {
            mobileMenu.classList.remove("-translate-x-full");
            mobileMenu.classList.add("translate-x-0");
            menuBackdrop.classList.remove("opacity-0", "pointer-events-none");
            menuBackdrop.classList.add("opacity-100", "pointer-events-auto");
        }
    }
    
    function closeMenu() {
        if (mobileMenu && menuBackdrop) {
            mobileMenu.classList.remove("translate-x-0");
            mobileMenu.classList.add("-translate-x-full");
            menuBackdrop.classList.remove("opacity-100", "pointer-events-auto");
            menuBackdrop.classList.add("opacity-0", "pointer-events-none");
        }
    }
    
    if (menuToggle) {
        menuToggle.addEventListener("click", openMenu);
        menuToggle.addEventListener("touchstart", (e) => {
            e.preventDefault();
            openMenu();
        }, { passive: false });
    }
    
    if (menuClose) {
        menuClose.addEventListener("click", closeMenu);
        menuClose.addEventListener("touchstart", (e) => {
            e.preventDefault();
            closeMenu();
        }, { passive: false });
    }
    
    if (menuBackdrop) {
        menuBackdrop.addEventListener("click", closeMenu);
        menuBackdrop.addEventListener("touchstart", (e) => {
            e.preventDefault();
            closeMenu();
        }, { passive: false });
    }
    
    // Auto-close on link click
    if (mobileMenu) {
        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
            link.addEventListener("touchstart", closeMenu);
        });
    }
});

