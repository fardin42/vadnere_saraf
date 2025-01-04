export class NavigationComponent {
    constructor() {
        this.init();
    }

    init() {
        const navContainer = document.querySelector('.nav-container');
        if (!navContainer) {
            console.error('Navigation container not found');
            return;
        }

        navContainer.innerHTML = `
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="#">Jewelry</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Collections</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;

        // Since we're using Bootstrap's collapse functionality, we don't need to manually handle the toggling
        // Bootstrap's JavaScript will automatically handle the collapse behavior
        // We only need to handle closing the menu when clicking nav links on mobile
        
        const navbarCollapse = navContainer.querySelector('.navbar-collapse');
        const navLinks = navContainer.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Check if the navbar is expanded (mobile view)
                if (window.innerWidth < 992) { // Bootstrap's lg breakpoint
                    // Use Bootstrap's collapse API to hide the menu
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            });
        });
    }
}