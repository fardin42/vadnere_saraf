export class FooterComponent {
    constructor() {
        this.init();
    }

    init() {
        const footerContainer = document.querySelector('footer');
        if (!footerContainer) {
            console.error('Footer container not found');
            return;
        }

        footerContainer.className = 'text-center text-lg-start text-cream';
        footerContainer.style.backgroundColor = '#1e3b4b';
        
        footerContainer.innerHTML = `
            <!-- Grid container -->
            <div class="container p-4 pb-0">
                <!-- Section: Links -->
                <section>
                    <!--Grid row-->
                    <div class="row">
                        <!-- Company Info -->
                        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 class="text-uppercase mb-4 font-weight-bold text-sand">
                                Vadnere Saraf
                            </h6>
                            <p class="text-cream opacity-75">
                                A legacy of trust since 1947. Nashik's premier destination for 
                                traditional Maharashtrian jewelry. Experience the finest craftsmanship 
                                passed down through generations.
                            </p>
                        </div>

                        <hr class="w-100 clearfix d-md-none bg-sand opacity-25" />

                        <!-- Collections -->
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 class="text-uppercase mb-4 font-weight-bold text-sand">Collections</h6>
                            <p><a class="text-cream text-decoration-none opacity-75 hover-sand" href="#">Thushi</a></p>
                            <p><a class="text-cream text-decoration-none opacity-75 hover-sand" href="#">Mangalsutra</a></p>
                            <p><a class="text-cream text-decoration-none opacity-75 hover-sand" href="#">Tanmani</a></p>
                            <p><a class="text-cream text-decoration-none opacity-75 hover-sand" href="#">Mohanmala</a></p>
                        </div>

                        <hr class="w-100 clearfix d-md-none bg-sand opacity-25" />

                        <!-- Services -->
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 class="text-uppercase mb-4 font-weight-bold text-sand">Services</h6>
                            <p><a class="text-cream text-decoration-none opacity-75 hover-sand" href="#">Gold Exchange</a></p>
                            <p><a class="text-cream text-decoration-none opacity-75 hover-sand" href="#">Monthly Savings Scheme</a></p>
                            <p><a class="text-cream text-decoration-none opacity-75 hover-sand" href="#">Custom Orders</a></p>
                            <p><a class="text-cream text-decoration-none opacity-75 hover-sand" href="#">Old Gold Purchase</a></p>
                        </div>

                        <hr class="w-100 clearfix d-md-none bg-sand opacity-25" />

                        <!-- Contact -->
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 class="text-uppercase mb-4 font-weight-bold text-sand">Contact</h6>
                            <p class="opacity-75">
                                <i class="fas fa-home me-3 text-sand"></i> 
                                Vadnere Mansion, Main Road,<br>
                                Saraf Bazaar, Nashik 422001
                            </p>
                            <p class="opacity-75">
                                <i class="fas fa-envelope me-3 text-sand"></i>
                                contact@vadneresaraf.com
                            </p>
                            <p class="opacity-75">
                                <i class="fas fa-phone me-3 text-sand"></i>
                                +91 253 123 4567
                            </p>
                            <p class="opacity-75">
                                <i class="fas fa-clock me-3 text-sand"></i>
                                10:00 AM - 8:00 PM (Mon-Sat)<br>
                                <span class="ms-4 ps-1">11:00 AM - 6:00 PM (Sun)</span>
                            </p>
                        </div>
                    </div>
                </section>

                <hr class="my-3 bg-sand opacity-25">

                <!-- Copyright & Social Media -->
                <section class="p-3 pt-0">
                    <div class="row d-flex align-items-center">
                        <!-- Copyright -->
                        <div class="col-md-7 col-lg-8 text-center text-md-start">
                            <div class="p-3 opacity-75">
                                © ${new Date().getFullYear()} Copyright:
                                <a class="text-sand text-decoration-none fw-bold" href="#">Vadnere Saraf</a>
                                <br>
                                <small class="mt-2 d-block">
                                    BIS Hallmarked | ISO 9001:2015 Certified | Established 1947
                                </small>
                            </div>
                        </div>

                        <!-- Social Media -->
                        <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                            <a class="btn btn-outline-sand btn-floating m-1" href="#" role="button" aria-label="Facebook">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a class="btn btn-outline-sand btn-floating m-1" href="#" role="button" aria-label="Instagram">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a class="btn btn-outline-sand btn-floating m-1" href="#" role="button" aria-label="WhatsApp">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                            <a class="btn btn-outline-sand btn-floating m-1" href="https://goo.gl/maps/yourGoogleMapsLink" target="_blank" role="button" aria-label="Google Maps">
                                <i class="fas fa-map-marker-alt"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }
} 