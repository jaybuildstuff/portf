// 1. Accordion (Fixed for smooth interaction)
document.querySelectorAll(".category-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        
        // Safety check to ensure next element is actually the content box
        if (content && content.classList.contains('category-content')) {
            content.classList.toggle("active");
            
            // Optional: Close other open categories (Accordion style)
            // document.querySelectorAll('.category-content.active').forEach(open => {
            //    if (open !== content) open.classList.remove('active');
            // });
        }
    });
});

// 2. Tag Navigation (Smooth Scroll)
document.querySelectorAll(".tag").forEach(tag => {
    tag.addEventListener("click", () => {
        const targetId = tag.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ 
                behavior: "smooth",
                block: "start" 
            });
        }
    });
});

// 3. Profile Glow (With Null Safety)
const profile = document.getElementById("profileToggle");
if (profile) {
    profile.addEventListener("click", () => {
        profile.classList.toggle("active");
    });
}

// 4. Progress Animation (With Timeout for reliability)
window.addEventListener("load", () => {
    const progressBar = document.querySelector(".progress");
    if (progressBar) {
        // A tiny delay ensures the browser registers the 0% state before moving to 100%
        setTimeout(() => {
            progressBar.style.width = "100%";
        }, 100);
    }
});

// 5. Dynamic Date
const updateDateElement = document.getElementById("last-update");
if (updateDateElement) {
    const today = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    updateDateElement.textContent = `Last Updated: ${today.toLocaleDateString(undefined, options)}`;
}
