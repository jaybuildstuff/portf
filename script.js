document.addEventListener("DOMContentLoaded", () => {
    
    // 1. NAME FLIP ANIMATION
    const name1 = document.getElementById('flip-name-1');
    const name2 = document.getElementById('flip-name-2');
    const names = [name1, name2];
    let currentIndex = 0;
    let flipInterval;

    function flipName() {
        const current = names[currentIndex];
        const next = names[(currentIndex + 1) % names.length];
        
        current.classList.remove('active');
        current.classList.add('exit-up');
        next.classList.add('enter-down');
        
        setTimeout(() => {
            current.classList.remove('exit-up');
            next.classList.remove('enter-down');
            next.classList.add('active');
            currentIndex = (currentIndex + 1) % names.length;
        }, 500);
    }

    setTimeout(() => {
        flipInterval = setInterval(flipName, 3000);
    }, 2000);

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(flipInterval);
        } else {
            flipInterval = setInterval(flipName, 3000);
        }
    });

    // 2. ACCORDION - NOTHING OPEN BY DEFAULT
    const toggles = document.querySelectorAll('.category-toggle');
    const contents = document.querySelectorAll('.category-content');
    const projectsSection = document.getElementById('projects');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const isActive = content.classList.contains('active');
            
            contents.forEach(c => c.classList.remove('active'));
            toggles.forEach(t => t.classList.remove('active'));
            
            if (!isActive) {
                content.classList.add('active');
                toggle.classList.add('active');
                document.body.classList.add('cinematic');
                
                // Scroll directly to projects section
                setTimeout(() => {
                    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Then scroll to the content
                    setTimeout(() => {
                        content.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 300);
                }, 100);
            } else {
                document.body.classList.remove('cinematic');
            }
        });
    });

    // 3. MAGNETIC BUTTON - DISABLED ON MOBILE
    const isMobile = window.innerWidth <= 768;
    
    if (!isMobile) {
        document.querySelectorAll('.magnetic').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = `translate(0px, 0px)`;
                btn.style.transition = "transform 0.3s ease";
            });
            
            btn.addEventListener('mouseenter', () => {
                btn.style.transition = "transform 0.1s ease";
            });
        });
    }

    // 4. UI INITIALIZATION
    const bar = document.querySelector(".progress");
    if (bar) setTimeout(() => bar.style.width = "100%", 500);

    const updateEl = document.getElementById('last-update');
    const now = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    if(updateEl) updateEl.innerText = `LAST UPDATE: ${now.toLocaleDateString('en-US', options)}`;

    // 5. BIO TAG INTERACTION - SCROLL TO PROJECTS
    const bioTags = document.querySelectorAll('.tag');
    bioTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const targetId = tag.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            
            const targetButton = Array.from(toggles).find(t => 
                t.nextElementSibling && t.nextElementSibling.id === targetId
            );

            if (targetContent && targetButton) {
                contents.forEach(c => c.classList.remove('active'));
                toggles.forEach(t => t.classList.remove('active'));
                document.body.classList.remove('cinematic');

                setTimeout(() => {
                    // First scroll to projects section
                    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    
                    // Then open the content
                    setTimeout(() => {
                        targetContent.classList.add('active');
                        targetButton.classList.add('active');
                        document.body.classList.add('cinematic');
                        targetContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 400);
                }, 100);
            }
        });
    });

    // 6. YOUTUBE THUMBNAIL FALLBACK
    document.querySelectorAll('.project-item img').forEach(img => {
        img.addEventListener('error', () => {
            img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="130" viewBox="0 0 200 130"%3E%3Crect fill="%23111" width="200" height="130"/%3E%3Ctext fill="%23333" x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="sans-serif" font-size="14"%3ENo Preview%3C/text%3E%3C/svg%3E';
        });
    });
});
