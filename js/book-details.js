document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');

    const bookContent = document.getElementById('book-content');
    const errorContent = document.getElementById('error-content');

    if (!bookId) {
        showError();
        return;
    }

    // Assuming getBookById is available from books.js
    const book = getBookById(bookId);

    if (book) {
        renderBookDetails(book);
    } else {
        showError();
    }

    function showError() {
        bookContent.classList.add('hidden');
        errorContent.classList.remove('hidden');
        errorContent.classList.add('flex');
    }

    function renderBookDetails(book) {
        // Update page title dynamically
        document.title = `${book.title} | Sajjad Ali Ashar`;

        const html = `
            <!-- Book Cover -->
            <div class="col-span-1 lg:col-span-5">
                <div class="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                    <img src="${book.coverImage}" alt="${book.title} Cover" class="w-full h-full object-cover">
                </div>
            </div>

            <!-- Book Details -->
            <div class="col-span-1 lg:col-span-7 flex flex-col justify-center">
                <span class="eyebrow-h6 text-[#A3A3A3] mb-4">Published in ${book.year}</span>
                <h1 class="heading-h2 text-[var(--black)] mb-6">${book.title}</h1>
                
                <div class="w-full h-px bg-[#E6E6E6] mb-8"></div>
                
                <div class="flex flex-col gap-6 body-longform text-[#212121] mb-10">
                    <p>${book.description}</p>
                </div>
                
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
                    <div class="flex flex-col">
                        <span class="text-[14px] text-[#A3A3A3] font-medium uppercase tracking-wider mb-1">Price</span>
                        <span class="text-[28px] font-bold text-[var(--black)]">${book.price}</span>
                    </div>
                    
                    <a href="${book.purchaseLink}" target="_blank" rel="noopener noreferrer" class="bg-[var(--black)] text-[var(--white)] rounded-full px-10 py-4 font-semibold text-[16px] transition-colors duration-200 hover:bg-[#333] flex items-center justify-center min-w-[200px]">
                        Buy Now
                    </a>
                </div>
            </div>
        `;

        bookContent.innerHTML = html;
        bookContent.classList.remove('hidden');
    }
});
