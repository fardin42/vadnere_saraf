import { gsap } from '../utils/gsap.js';

export class HeaderCarousel {
    constructor() {
        this.init();
    }

    init() {
        const headerContainer = document.querySelector('header .container');
        if (!headerContainer) return;

        const carouselHTML = `
            <div class="row align-items-center h-100">
                <div class="col-lg-6 text-center text-lg-start">
                    <h1 class="display-4 fw-bold mb-4">
                        Vadnere Saraf
                        <span class="d-block text-sand mt-2" style="font-size: clamp(0.4em, 3vw, 0.6em);">Since 1947</span>
                    </h1>
                    <p class="lead opacity-75 mb-4">
                        Discover our exquisite collection of traditional Maharashtrian jewelry, 
                        where heritage meets contemporary elegance.
                    </p>
                    <a href="#collections" class="btn btn-accent btn-lg">
                        Explore Collection
                    </a>
                </div>
                <div class="col-lg-6">
                    <div class="header-carousel">
                        <!-- Main Swiper -->
                        <div class="swiper mainSwiper">
                            <div class="swiper-wrapper">
                                ${this.createSlides()}
                            </div>
                        </div>
                        
                        <!-- Thumbnail Swiper -->
                        <div class="swiper thumbSwiper mt-3">
                            <div class="swiper-wrapper">
                                ${this.createSlides()}
                            </div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        headerContainer.innerHTML = carouselHTML;
        this.initSwiper();
    }

    createSlides() {
        const images = [
            { src: 'assets/jewelry/anklets.png', alt: 'Traditional Anklets' },
            { src: 'assets/jewelry/bracelets.png', alt: 'Bridal Collection' },
            { src: 'assets/jewelry/chains.png', alt: 'Gold Chains Collection' },
           
            
            { src: 'assets/jewelry/bracelets.png', alt: 'Elegant Bracelets' },
            { src: 'assets/jewelry/anklets.png', alt: 'Traditional Anklets' },
            { src: 'assets/jewelry/chains.png', alt: 'Gold Chains Collection' },
           
            { src: 'assets/jewelry/bracelets.png', alt: 'Bridal Collection' }
        ];

        return images.map(img => `
            <div class="swiper-slide">
                <img src="${img.src}" alt="${img.alt}">
            </div>
        `).join('');
    }

    initSwiper() {
        // Initialize thumbnail swiper first
        const thumbsSwiper = new Swiper(".thumbSwiper", {
            slidesPerView: 5,
            spaceBetween: 8,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            watchSlidesProgress: true,
            breakpoints: {
                320: {
                    slidesPerView: 4,
                    spaceBetween: 6
                },
                480: {
                    slidesPerView: 5,
                    spaceBetween: 8
                }
            }
        });

        // Initialize main swiper
        const mainSwiper = new Swiper(".mainSwiper", {
            spaceBetween: 10,
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },
            thumbs: {
                swiper: thumbsSwiper
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            }
        });

        // Add GSAP animation on slide change
        mainSwiper.on('slideChange', () => {
            gsap.from(mainSwiper.slides[mainSwiper.activeIndex], {
                opacity: 0,
                scale: 1.1,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    }
}