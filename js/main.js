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

    // Books Dynamic Rendering
    const booksListContainer = document.getElementById('books-list');
    
    if (booksListContainer && typeof booksData !== 'undefined') {
        let booksHtml = '';
        
        booksData.forEach(book => {
            booksHtml += `
                <a href="book.html?id=${book.id}" class="group py-6 px-4 -mx-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-b-2 border-gray-300 hover:border-gray-400 hover:bg-gray-100 rounded-xl transition-all duration-300 cursor-pointer">
                    <div class="flex items-center gap-3">
                        <span class="body-longform text-[16px] font-medium text-[var(--dark-text)] group-hover:translate-x-2 transition-transform duration-300">${book.title}</span>
                    </div>
                    <div class="flex items-center justify-between w-full sm:w-auto gap-4 mt-2 sm:mt-0 group-hover:-translate-x-2 transition-transform duration-300">
                        <span class="body-longform text-[16px] text-[var(--dark-text)] font-medium">${book.year}</span>
                        <svg class="w-5 h-5 text-[var(--dark-text)] transition-transform duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 sm:block hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                    </div>
                </a>
            `;
        });
        
        
        booksListContainer.innerHTML = booksHtml;
    }

    // Ventures Dynamic Rendering
    const venturesListContainer = document.getElementById('ventures-list');
    
    if (venturesListContainer && typeof venturesData !== 'undefined') {
        let venturesHtml = '';
        
        venturesData.forEach(venture => {
            venturesHtml += `
                <a href="venture.html?id=${venture.id}" class="group py-6 px-4 -mx-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-b-2 border-gray-300 hover:border-gray-400 hover:bg-gray-100 rounded-xl transition-all duration-300 cursor-pointer">
                    <div class="flex items-center gap-3">
                        <span class="body-longform text-[16px] sm:text-[18px] font-bold text-[var(--dark-text)] group-hover:translate-x-2 transition-transform duration-300">${venture.title}</span>
                    </div>
                    <div class="flex items-center justify-between w-full sm:w-auto gap-4 mt-2 sm:mt-0 group-hover:-translate-x-2 transition-transform duration-300">
                        <span class="body-longform text-[14px] sm:text-[16px] text-[var(--dark-text)] font-medium">${venture.year}</span>
                        <svg class="w-5 h-5 text-[var(--dark-text)] transition-transform duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 sm:block hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                    </div>
                </a>
            `;
        });
        
        venturesListContainer.innerHTML = venturesHtml;
    }
});
