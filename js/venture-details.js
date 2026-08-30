document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ventureId = urlParams.get('id');

    const ventureContent = document.getElementById('venture-content');
    const errorContent = document.getElementById('error-content');

    if (!ventureId) {
        showError();
        return;
    }

    const venture = getVentureById(ventureId);

    if (venture) {
        renderVentureDetails(venture);
    } else {
        showError();
    }

    function showError() {
        ventureContent.classList.add('hidden');
        errorContent.classList.remove('hidden');
        errorContent.classList.add('flex');
    }

    function renderVentureDetails(venture) {
        document.title = `${venture.title} | Sajjad Ali Ashar`;

        const html = `
            <!-- Hero Banner -->
            <section class="w-full relative h-[60vh] min-h-[400px] flex items-end pb-16 bg-[var(--black)]">
                <!-- Background Image (Optional, using a solid color/gradient or the venture image) -->
                <div class="absolute inset-0 z-0">
                    <img src="${venture.image}" alt="${venture.title} Hero" class="w-full h-full object-cover opacity-40">
                    <div class="absolute inset-0 bg-gradient-to-t from-[var(--black)] to-transparent"></div>
                </div>
                
                <div class="w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 mx-auto relative z-10 flex flex-col pt-32">
                    <span class="eyebrow-h6 text-[#A3A3A3] mb-4">Venture Overview</span>
                    <h1 class="heading-h1 text-[var(--white)] text-[48px] sm:text-[64px] lg:text-[80px] font-bold leading-tight tracking-tight">${venture.title}</h1>
                </div>
            </section>

            <!-- Main Details Content -->
            <section class="w-full bg-[var(--white)] py-20 lg:py-32">
                <div class="w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        
                        <!-- Left Metadata Column -->
                        <div class="lg:col-span-4 flex flex-col gap-10">
                            <div class="flex flex-col gap-2">
                                <span class="eyebrow-h6 text-[#A3A3A3] text-[13px]">Founded</span>
                                <span class="heading-h5 text-[var(--black)]">${venture.year}</span>
                            </div>
                            <div class="w-full h-px bg-[#E6E6E6]"></div>
                            
                            <div class="flex flex-col gap-2">
                                <span class="eyebrow-h6 text-[#A3A3A3] text-[13px]">Role</span>
                                <span class="heading-h5 text-[var(--black)]">${venture.role}</span>
                            </div>
                            <div class="w-full h-px bg-[#E6E6E6]"></div>
                            
                            <div class="flex flex-col gap-2">
                                <span class="eyebrow-h6 text-[#A3A3A3] text-[13px]">Industry</span>
                                <span class="heading-h5 text-[var(--black)]">${venture.industry}</span>
                            </div>
                            <div class="w-full h-px bg-[#E6E6E6]"></div>
                            
                            <a href="${venture.website}" target="_blank" rel="noopener noreferrer" class="mt-4 bg-[var(--black)] text-[var(--white)] rounded-full px-8 py-4 font-semibold text-[16px] transition-colors duration-200 hover:bg-[#333] flex items-center justify-center gap-3 self-start">
                                Visit Website
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        </div>
                        
                        <!-- Right Description Column -->
                        <div class="lg:col-span-8 flex flex-col">
                            <h3 class="heading-h3 text-[var(--black)] mb-8 tracking-[-0.02em] leading-[1.3]">About ${venture.title}</h3>
                            <div class="body-longform text-[#212121] leading-relaxed flex flex-col gap-6 text-[18px]">
                                <p>${venture.description}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        `;

        ventureContent.innerHTML = html;
        
        // Slight delay to allow DOM to process before fading in
        setTimeout(() => {
            ventureContent.classList.remove('opacity-0');
        }, 50);
    }
});
