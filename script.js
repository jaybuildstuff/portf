document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ADVANCED NAME FLIP (Cleaner Logic)
    const nameEl = document.getElementById('flip-name');
    const names = ["Jay", "Yididya"];
    let index = 0;

    function flipName() {
        // 1. Slide Up (Exit)
        nameEl.classList.add('flip-up');
        nameEl.classList.remove('flip-down');

        setTimeout(() => {
            // 2. Change Text while invisible
            index = (index + 1) % names.length;
            nameEl.textContent = names[index];
            
            // 3. Reset position to bottom (Preparation)
            nameEl.classList.remove('flip-up');
            nameEl.classList.add('flip-down');

            // 4. Small delay to allow CSS to register the 'bottom' position before sliding to center
            setTimeout(() => {
                nameEl.classList.remove('flip-down');
            }, 50);
        }, 600); // Match CSS transition time
    }

    // Initial delay before first flip
    setTimeout(() => {
        setInterval(flipName, 3000); // Changed to 3s for better readability
    }, 2000);

    // 2. ACCORDION & CINEMATIC BARS
    const toggles = document.querySelectorAll('.category-toggle');
    const contents = document.querySelectorAll('.category-content');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const isActive = content.classList.contains('active');
            
            // Close all others
            contents.forEach(c => {
                c.classList.remove('active');
                // Optional: Close letterbox if no other content is active
                // document.body.classList.remove('cinematic'); 
            });
            
            if (!isActive) {
                content.classList.add('active');
                document.body.classList.add('cinematic');
                // Smooth scroll to content
                content.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                // If clicking active item, close it and remove cinematic mode
                document.body.classList.remove('cinematic');
            }
        });
    });

    // 3. CURSOR & MAGNETIC LOGIC
    const cursor = document.querySelector('.custom-cursor');
    
    // Only move cursor if device is not touch-based (optional optimization)
    if (window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        const interactables = document.querySelectorAll('a, button, .tag, .magnetic, input, textarea');
        
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('active'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
        });

        // Magnetic Effect with Boundary Check
        document.querySelectorAll('.magnetic').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                // Limit the movement so it doesn't fly off
                const strength = 0.3;
                btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = `translate(0px, 0px)`;
                // Ensure transition is smooth on leave
                btn.style.transition = "transform 0.3s ease";
            });
            
            btn.addEventListener('mouseenter', () => {
                 btn.style.transition = "transform 0.1s ease"; // Faster response on enter
            });
        });
    } else {
        // Hide custom cursor on touch devices
        cursor.style.display = 'none';
        document.body.style.cursor = 'auto';
    }

    // 4. UI INITIALIZATION
    // Update bar animation
    const bar = document.querySelector(".progress");
    if (bar) setTimeout(() => bar.style.width = "100%", 500);

    // Dynamic Date
    const updateEl = document.getElementById('last-update');
    const now = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    if(updateEl) updateEl.innerText = `LAST UPDATE: ${now.toLocaleDateString('en-US', options)}`;

    // 5. BIO TAG INTERACTION (Bonus Feature)
    // Clicking a tag in the bio automatically opens the relevant project section
    const bioTags = document.querySelectorAll('.tag');
    bioTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const targetId = tag.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            const targetButton = targetContent ? targetContent.previousElementSibling : null;

            if (targetContent && targetButton) {
                // Close others
                contents.forEach(c => c.classList.remove('active'));
                document.body.classList.remove('cinematic');

                // Open Target
                setTimeout(() => {
                    targetContent.classList.add('active');
                    document.body.classList.add('cinematic');
                    targetContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        });
    });
});
