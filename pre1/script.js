document.addEventListener('DOMContentLoaded', function() {
    // Button click tracking
    const ctaButton = document.querySelector('.submit-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            console.log('CTA Button clicked - redirecting to Google');
        });
    }

    // Footer links handling
    document.querySelectorAll('.footer-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // In production, these would link to actual pages
            console.log('Footer link clicked:', this.textContent);
        });
    });

    // Smooth image loading
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        heroImage.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    }
});
