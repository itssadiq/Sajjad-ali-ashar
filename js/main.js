document.addEventListener('DOMContentLoaded', () => {
    // Navbar Toggle Logic
    const menuBtn = document.getElementById('menu-btn');
    const menuDropdown = document.getElementById('menu-dropdown');
    const closeBtn = document.getElementById('close-btn');
    const menuLinks = document.querySelectorAll('.menu-link');

    if (menuBtn && menuDropdown && closeBtn) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.add('opacity-0', 'pointer-events-none');
            menuBtn.classList.remove('opacity-100');
            
            menuDropdown.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
            menuDropdown.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
        });

        const closeMenu = () => {
            menuBtn.classList.remove('opacity-0', 'pointer-events-none');
            menuBtn.classList.add('opacity-100');
            
            menuDropdown.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
            menuDropdown.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
        };

        closeBtn.addEventListener('click', closeMenu);

        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});
