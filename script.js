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

// ============================================================
// CASE STUDY MODAL LOGIC
// ============================================================

function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // Scroll modal panel to top
    const panel = modal.querySelector('.cs-modal-panel');
    if (panel) panel.scrollTop = 0;
    modal.scrollTop = 0;
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const lightbox = document.getElementById('cs-lightbox');
        if (lightbox && lightbox.classList.contains('is-open')) {
            closeLightbox();
            return;
        }

        document.querySelectorAll('.cs-modal.is-open').forEach(modal => {
            modal.classList.remove('is-open');
        });
        document.body.style.overflow = '';
    }
});

// ============================================================
// LIGHTBOX LOGIC
// ============================================================

function openLightbox(imgSrc, captionText) {
    const lightbox = document.getElementById('cs-lightbox');
    const lightboxImg = document.getElementById('cs-lightbox-img');
    const lightboxCaption = document.getElementById('cs-lightbox-caption');

    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = imgSrc;
    
    if (lightboxCaption) {
        lightboxCaption.textContent = captionText || '';
    }
    
    lightbox.classList.add('is-open');
}

function closeLightbox() {
    const lightbox = document.getElementById('cs-lightbox');
    if (lightbox) {
        lightbox.classList.remove('is-open');
    }
}
