// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Check if elements exist before adding event listeners
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            console.log('Menu toggled'); // For testing - check browser console
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    } else {
        console.error('Hamburger or nav-menu not found!');
    }
});

// Smooth scroll for anchor links (if you use any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ===== HERO SLIDESHOW =====
let slideIndex = 1;
let slideTimer;

// Initialize slideshow
function initSlideshow() {
    showSlides(slideIndex);
    startAutoSlide();
}

// Start automatic slideshow
function startAutoSlide() {
    slideTimer = setInterval(function() {
        changeSlide(1);
    }, 5000); // Change every 5 seconds
}

// Reset timer when manually changing
function resetTimer() {
    clearInterval(slideTimer);
    startAutoSlide();
}

// Change slide (next/prev)
function changeSlide(n) {
    showSlides(slideIndex += n);
    resetTimer();
}

// Go to specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
    resetTimer();
}

// Show slides
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (!slides.length) return; // Exit if no slides on this page
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    // Show current slide and activate current dot
    slides[slideIndex-1].classList.add("active");
    if (dots.length > 0) {
        dots[slideIndex-1].classList.add("active");
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initSlideshow();
});