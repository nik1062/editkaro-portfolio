// Editkaro.in - Mock Client Dashboard Interactivity

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("review-video");
    const commentInput = document.getElementById("new-comment-input");
    const commentSubmit = document.getElementById("submit-comment-btn");
    const commentsList = document.getElementById("comments-container");
    
    // Sidebar tabs navigation
    const sidebarItems = document.querySelectorAll(".sidebar-item");
    const dashboardSections = document.querySelectorAll(".dashboard-section");

    // Dynamic Comments Array
    let comments = [
        { id: 1, timestamp: "0:04", text: "Add a fast zoom effect on the face here to build tension." },
        { id: 2, timestamp: "0:12", text: "Background music is a bit too loud, reduce by -3dB." },
        { id: 3, timestamp: "0:25", text: "Add dynamic sound effect (whoosh) during the slide transition." }
    ];

    // Initialize Dashboard UI
    if (commentsList) {
        renderComments();
    }

    // Sidebar navigation logic
    if (sidebarItems.length > 0) {
        sidebarItems.forEach(item => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const targetTab = item.dataset.tab;

                sidebarItems.forEach(sib => sib.classList.remove("active"));
                item.classList.add("active");

                dashboardSections.forEach(section => {
                    section.style.display = section.id === `tab-${targetTab}` ? "block" : "none";
                });

                // Auto-close sidebar on mobile after clicking tab
                const sidebar = document.querySelector("aside");
                if (window.innerWidth < 1024 && sidebar) {
                    sidebar.classList.remove("translate-x-0");
                    sidebar.classList.add("-translate-x-full");
                }
            });
        });
    }

    // Capture and submit comment
    if (commentSubmit && commentInput && video) {
        commentSubmit.addEventListener("click", submitComment);
        commentInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                submitComment();
            }
        });
    }

    function submitComment() {
        const text = commentInput.value.trim();
        if (text === "") return;

        // Calculate current timestamp from video
        const seconds = Math.floor(video.currentTime);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const timestamp = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;

        // Add to comments list
        comments.push({
            id: Date.now(),
            timestamp: timestamp,
            text: text
        });

        // Clear input and re-render
        commentInput.value = "";
        renderComments();
        
        // Auto scroll to bottom of comments
        setTimeout(() => {
            commentsList.scrollTop = commentsList.scrollHeight;
        }, 100);
    }

    function renderComments() {
        if (!commentsList) return;
        commentsList.innerHTML = "";

        // Sort comments by timestamp (numerical comparison)
        const sortedComments = [...comments].sort((a, b) => {
            const timeA = timestampToSeconds(a.timestamp);
            const timeB = timestampToSeconds(b.timestamp);
            return timeA - timeB;
        });

        sortedComments.forEach(comment => {
            const div = document.createElement("div");
            div.className = "comment-item";
            div.innerHTML = `
                <div class="comment-timestamp" cursor: pointer; title="Click to jump to time">⏱️ ${comment.timestamp}</div>
                <div class="comment-text">${comment.text}</div>
            `;

            // Jump video to timestamp on click
            div.querySelector(".comment-timestamp").addEventListener("click", () => {
                video.currentTime = timestampToSeconds(comment.timestamp);
                video.play();
            });

            commentsList.appendChild(div);
        });
    }

    // --- Mobile Sidebar Toggle logic ---
    const sidebarToggle = document.getElementById("dashboard-sidebar-toggle");
    const sidebarClose = document.getElementById("dashboard-sidebar-close");
    const sidebarElement = document.querySelector("aside");

    if (sidebarToggle && sidebarElement) {
        sidebarToggle.addEventListener("click", () => {
            sidebarElement.classList.remove("-translate-x-full");
            sidebarElement.classList.add("translate-x-0");
        });
        sidebarToggle.addEventListener("touchstart", (e) => {
            e.preventDefault();
            sidebarElement.classList.remove("-translate-x-full");
            sidebarElement.classList.add("translate-x-0");
        }, { passive: false });
    }

    if (sidebarClose && sidebarElement) {
        sidebarClose.addEventListener("click", () => {
            sidebarElement.classList.remove("translate-x-0");
            sidebarElement.classList.add("-translate-x-full");
        });
        sidebarClose.addEventListener("touchstart", (e) => {
            e.preventDefault();
            sidebarElement.classList.remove("translate-x-0");
            sidebarElement.classList.add("-translate-x-full");
        }, { passive: false });
    }

    function timestampToSeconds(timestamp) {
        const parts = timestamp.split(":");
        const minutes = parseInt(parts[0]);
        const seconds = parseInt(parts[1]);
        return (minutes * 60) + seconds;
    }
});
