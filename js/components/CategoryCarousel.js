export function createCategoryCarousel(container) {
    if (!container) {
        console.error('Container element not found for CategoryCarousel');
        return;
    }

    console.log('Creating category carousel...'); // Debug log

    // Check if required libraries are loaded
    if (typeof Swiper === 'undefined') {
        console.error('Swiper is not loaded. Please include Swiper library.');
        return;
    }

    if (!window.gsap) {
        console.error('GSAP is not loaded. Please include GSAP library.');
        return;
    }

    // Add a small delay to ensure DOM is ready
    setTimeout(() => {
        initSwiper();
        console.log('Swiper initialization attempted'); // Debug log
    }, 100);

    const categorySection = document.createElement('div');
    categorySection.className = 'category-section py-5';
    categorySection.style.zIndex = '1';
    
    categorySection.innerHTML = `
        <div class="container">
            <div class="section-header text-center mb-5">
                <h2 class="text-brown">Our Collections</h2>
                <div class="section-line"></div>
            </div>
            
            <div class="swiper category-carousel">
                <div class="swiper-wrapper">
                    ${createCategoryItems()}
                </div>
                
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    `;

    container.appendChild(categorySection);
}

function createCategoryItems() {
    const categories = [
        { title: 'Rings', image: 'assets/jewelry/rings.png' },
        { title: 'Necklaces', image: 'assets/jewelry/necklace.png' },
        { title: 'Earrings', image: 'assets/jewelry/earrings.png' },
        { title: 'Bracelets', image: 'assets/jewelry/bracelets.png' },
        { title: 'Anklets', image: 'assets/jewelry/necklace.png' },
        { title: 'Bangles', image: 'assets/jewelry/bangles.png' },
        { title: 'Chains', image: 'assets/jewelry/chains.png' },
        { title: 'Mangalsutras', image: 'assets/jewelry/necklace.png' },
        { title: 'Nose Pins', image: 'assets/jewelry/necklace.png' }
    ];

    return categories.map(category => `
        <div class="swiper-slide">
            <div class="category-item">
                <div class="category-circle">
                    <div class="category-image-wrapper">
                        <img src="${category.image}" alt="${category.title}" loading="lazy">
                    </div>
                    <div class="category-overlay d-flex flex-column">
                        <h5 class="category-title">${category.title}</h5>
                        <span class="view-collection">View Collection</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function initSwiper() {
    try {
        const swiperElement = document.querySelector('.category-carousel');
        if (!swiperElement) {
            console.error('Swiper element not found');
            return;
        }

        const swiper = new Swiper('.category-carousel', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            grabCursor: true,
            loop: false,
            speed: 800,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 20
                },
                480: {
                    slidesPerView: 2.2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 3.2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 4.2,
                    spaceBetween: 30
                }
            }
        });

        // GSAP animations
        const items = document.querySelectorAll('.category-item');
        if (items.length === 0) {
            console.warn('No category items found for GSAP animations');
            return;
        }

        // Add GSAP animations with error handling
        try {
            window.gsap.from(items, {
                opacity: 0,
                y: 30,
                duration: 1,
                stagger: 0.15,
                ease: "elastic.out(0.6, 0.3)",
                scrollTrigger: {
                    trigger: '.category-section',
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse'
                }
            });

            // Hover animations
            items.forEach(item => {
                const circle = item.querySelector('.category-circle');
                const overlay = item.querySelector('.category-overlay');
                const image = item.querySelector('img');
                
                if (!circle || !overlay || !image) {
                    console.warn('Missing required elements for hover animations');
                    return;
                }

                item.addEventListener('mouseenter', () => {
                    window.gsap.to(circle, {
                        y: -10,
                        duration: 0.4,
                        ease: "back.out(1.7)"
                    });
                    
                    window.gsap.to(overlay, {
                        opacity: 1,
                        duration: 0.3,
                        ease: "power2.inOut"
                    });
                    
                    window.gsap.to(image, {
                        scale: 1.1,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                });
                
                item.addEventListener('mouseleave', () => {
                    // Separate animations for different properties
                    window.gsap.to(circle, {
                        y: 0,
                        duration: 0.3,
                        ease: "power2.inOut"
                    });
                    
                    window.gsap.to(overlay, {
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.inOut"
                    });
                    
                    window.gsap.to(image, {
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.inOut"
                    });
                });
            });

        } catch (error) {
            console.error('Error setting up GSAP animations:', error);
        }

    } catch (error) {
        console.error('Error initializing Swiper:', error);
    }
} 