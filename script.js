// Initialize AOS library with custom settings
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: false,
    mirror: true
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init();

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');

    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after clicking a link
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
});

// Form submission handler
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('¡Gracias por contactarnos! Te responderemos pronto.');
        form.reset();
    });
}