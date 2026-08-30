const venturesData = [
    {
        id: 'digiologist',
        title: 'The Digiologist',
        year: '2018',
        role: 'Founder',
        industry: 'Digital Strategy & Marketing',
        description: 'A forward-thinking digital agency specializing in brand positioning, advanced marketing strategies, and comprehensive digital ecosystem development. Founded on the principle of integrating data-driven insights with creative execution to scale businesses globally.',
        image: 'assets/hero.jpg', // Placeholder image
        website: 'https://example.com'
    },
    {
        id: 'markhor-alpha',
        title: 'Markhor Alpha',
        year: '2019',
        role: 'Co-Founder',
        industry: 'Technology Solutions',
        description: 'An innovative technology firm building scalable, robust software solutions for enterprise clients. Markhor Alpha bridges the gap between complex business requirements and elegant technical architecture, delivering products that drive efficiency.',
        image: 'assets/hero.jpg',
        website: 'https://example.com'
    },
    {
        id: 'dubiland',
        title: 'Dubiland',
        year: '2025',
        role: 'Strategic Partner',
        industry: 'Real Estate Tech',
        description: 'A revolutionary platform redefining property technology in emerging markets. Dubiland leverages advanced data analytics and seamless user experiences to transform how commercial and residential real estate is managed and acquired.',
        image: 'assets/hero.jpg',
        website: 'https://example.com'
    },
    {
        id: 'shieldcraft',
        title: 'Shieldcraft Detailing Lab',
        year: '2026',
        role: 'Founder',
        industry: 'Automotive Luxury Services',
        description: 'A premium automotive detailing laboratory focused on high-end preservation and aesthetic enhancement. Shieldcraft combines state-of-the-art ceramic technologies with meticulous craftsmanship to provide unparalleled care for luxury vehicles.',
        image: 'assets/hero.jpg',
        website: 'https://example.com'
    }
];

// Helper to get venture by ID
function getVentureById(id) {
    return venturesData.find(venture => venture.id === id);
}

// Export for module usage (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { venturesData, getVentureById };
}
