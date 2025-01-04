import { gsap } from './utils/gsap.js';
import { NavigationComponent } from './components/Navigation.js';
import { createCategoryCarousel } from './components/CategoryCarousel.js';
import { FooterComponent } from './components/Footer.js';
import { HeaderCarousel } from './components/HeaderCarousel.js';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Navigation
    new NavigationComponent();
    
    // Initialize Header Carousel
    new HeaderCarousel();
    
    // Initialize category carousel
    const categoryContainer = document.querySelector('.category');
    if (categoryContainer) {
        createCategoryCarousel(categoryContainer);
    } else {
        console.error('Category container not found');
    }

    // Initialize Footer
    new FooterComponent();
}); 