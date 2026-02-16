document.addEventListener("DOMContentLoaded", () => {
    
    // 1. NAME FLIP ANIMATION - FIXED FOR DIFFERENT LENGTHS
    const name1 = document.getElementById('flip-name-1');
    const name2 = document.getElementById('flip-name-2');
    const names = [name1, name2];
    let currentIndex = 0;

    function flipName() {
        const current = names[currentIndex];
        const next = names[(currentIndex + 1) % names.length];
        
        // Exit current name (slide up)
        current.classList.remove('active');
        current.classList.add('exit-up');
        
        // Prepare next name (from bottom)
        next.classList.add('enter-down');
        
        setTimeout(() => {
            // Switch names
            current.classList.remove('exit-up');
            next.classList.remove('enter-down');
            next.classList.add('active');
            
            currentIndex = (currentIndex + 1) % names.length;
        }, 500);
    }

    // Start flipping after initial delay
    setTimeout(() => {
        setInterval(flipName, 3000);
    }, 2000);

    // 2. ACCORDION - NOTHING OPEN BY DEFAULT, CLICK TO OPEN/CLOSE
    const toggles = document.querySelectorAll('.category-toggle');
    const contents = document.querySelectorAll('.category-content');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const isActive = content.classList.contains('active');
            
            // Close ALL sections first (including buttons)
            contents.forEach(c => c.classList.remove('active'));
            toggles.forEach(t => t.classList.remove('active'));
            
            // If the clicked section wasn't active, open it
            if (!isActive) {
                content.classList.add('active');
                toggle.classList.add('active');
                document.body.classList.add('cinematic');
                
                // Smooth scroll to content
                setTimeout(() => {
                    content.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            } else {
                // If it was active, close everything (including cinematic mode)
                document.body.classList.remove('cinematic');
            }
        });
    });

    // 3. MAGNETIC BUTTON EFFECT (No Custom Cursor)
    document.querySelectorAll('.magnetic').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const strength = 0.3;
            btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
            btn.style.transition = "transform 0.3s ease";
        });
        
        btn.addEventListener('mouseenter', () => {
            btn.style.transition = "transform 0.1s ease";
        });
    });

    // 4. UI INITIALIZATION
    // Update bar animation
    const bar = document.querySelector(".progress");
    if (bar) setTimeout(() => bar.style.width = "100%", 500);

    // Dynamic Date
    const updateEl = document.getElementById('last-update');
    const now = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    if(updateEl) updateEl.innerText = `LAST UPDATE: ${now.toLocaleDateString('en-US', options)}`;

    // 5. BIO TAG INTERACTION
    const bioTags = document.querySelectorAll('.tag');
    bioTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const targetId = tag.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            
            // Find the button that corresponds to this content
            const targetButton = Array.from(toggles).find(t => 
                t.nextElementSibling && t.nextElementSibling.id === targetId
            );

            if (targetContent && targetButton) {
                // Close all first
                contents.forEach(c => c.classList.remove('active'));
                toggles.forEach(t => t.classList.remove('active'));
                document.body.classList.remove('cinematic');

                // Open target
                setTimeout(() => {
                    targetContent.classList.add('active');
                    targetButton.classList.add('active');
                    document.body.classList.add('cinematic');
                    targetContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        });
    });
});
