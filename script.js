document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation Initialization
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            
            // If the element is within the viewport, add the 'active' class
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // Listen for scroll events
    window.addEventListener('scroll', revealOnScroll);
    
    // Trigger once on load to reveal elements that are already visible
    revealOnScroll();
});
