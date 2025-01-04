import { poiItems } from '../data/poiData.js';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export class POIComponent {
    constructor(container) {
        if (!container) return;
        
        // Check if GSAP is available
        if (!window.gsap) {
            console.error('GSAP is required for animations');
            return;
        }
        
        this.container = container;
        this.init();
    }
    
    init() {
        try {
            // Register ScrollTrigger if available
            if (window.ScrollTrigger) {
                window.gsap.registerPlugin(window.ScrollTrigger);
            }
            this.render();
            this.initGSAP();
            this.addEventListeners();
        } catch (error) {
            console.error('Error initializing POI component:', error);
        }
    }
    
    render() {
        this.container.innerHTML = `
            <section class="poi-section py-5">
                <div class="container">
                    <div class="text-center mb-5">
                        <h2 class="text-brown">Discover Our Collection</h2>
                        <p class="text-muted">Explore our carefully curated pieces</p>
                    </div>
                    
                    <div class="poi-wrapper">
                        <figure class="position-relative">
                            <img src="assets/model.jpg" alt="Model wearing our jewelry collection" class="img-fluid">
                            
                            <ul class="poi-list">
                                <li class="poi-item" style="top: 25%; left: 15%;">
                                    <button class="poi-btn" data-bs-toggle="modal" data-bs-target="#poiModal1">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </li>
                                <li class="poi-item" style="top: 45%; left: 30%;">
                                    <button class="poi-btn" data-bs-toggle="modal" data-bs-target="#poiModal2">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </li>
                                <li class="poi-item" style="top: 60%; left: 20%;">
                                    <button class="poi-btn" data-bs-toggle="modal" data-bs-target="#poiModal3">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </li>
                                <li class="poi-item" style="top: 35%; right: 25%;">
                                    <button class="poi-btn" data-bs-toggle="modal" data-bs-target="#poiModal4">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </li>
                            </ul>
                        </figure>
                    </div>
                </div>
            </section>

            <!-- Modals -->
            ${this.createModals()}
        `;
    }
    
    createModals() {
        const items = [
            {
                id: 1,
                title: 'Diamond Necklace',
                description: 'Exquisite diamond necklace featuring a delicate chain with brilliant-cut diamonds.',
                price: '$3,499',
                image: 'assets/jewelry/necklace-detail.jpg'
            },
            {
                id: 2,
                title: 'Pearl Earrings',
                description: 'Classic freshwater pearl earrings with 18K gold settings.',
                price: '$899',
                image: 'assets/jewelry/earrings-detail.jpg'
            },
            {
                id: 3,
                title: 'Gold Bracelet',
                description: 'Handcrafted 18K gold bracelet with intricate chain design.',
                price: '$1,299',
                image: 'assets/jewelry/bracelet-detail.jpg'
            },
            {
                id: 4,
                title: 'Crystal Pendant',
                description: 'Stunning crystal pendant on a sterling silver chain.',
                price: '$599',
                image: 'assets/jewelry/pendant-detail.jpg'
            }
        ];

        return items.map(item => `
            <div class="modal fade" id="poiModal${item.id}" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body p-4">
                            <div class="row align-items-center">
                                <div class="col-md-5">
                                    <figure class="mb-md-0 mb-3">
                                        <img src="${item.image}" alt="${item.title}" class="img-fluid rounded">
                                    </figure>
                                </div>
                                <div class="col-md-7">
                                    <h3 class="mb-3">${item.title}</h3>
                                    <p class="text-muted mb-4">${item.description}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="price">
                                            <span class="h4 mb-0">${item.price}</span>
                                        </div>
                                        <button class="btn btn-primary">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    initGSAP() {
        try {
            // Initial animations
            window.gsap.from('.poi-wrapper figure', {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.poi-wrapper',
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse'
                }
            });
            
            // Stagger POI buttons
            window.gsap.from('.poi-item', {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: '.poi-wrapper',
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse'
                }
            });
        } catch (error) {
            console.error('GSAP animation error:', error);
        }
    }
    
    addEventListeners() {
        try {
            // Mark POI as visited when clicked
            const poiButtons = this.container.querySelectorAll('.poi-item');
            poiButtons.forEach(item => {
                item.addEventListener('click', () => {
                    item.classList.add('visited');
                });
            });
            
            // Modal animations
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                modal.addEventListener('show.bs.modal', () => {
                    window.gsap.fromTo(modal.querySelector('.modal-content'), 
                        { scale: 0.5, opacity: 0 },
                        { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
                    );
                });
            });
        } catch (error) {
            console.error('Error adding event listeners:', error);
        }
    }
}