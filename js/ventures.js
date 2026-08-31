const venturesData = [
    {
        id: 'digiologist',
        title: 'The Digiologist',
        year: '2018',
        role: 'Founder',
        industry: 'Digital Strategy & Marketing',
        description: `The Digiologist is built on a simple idea: digital growth should be driven by strategy, not guesswork.

It operates as a digital strategy and consulting platform focused on helping businesses build systems that actually generate results. From social media positioning to performance marketing and brand structuring, the focus remains on clarity, execution, and measurable growth.

What sets it apart is its approach. Instead of chasing trends, The Digiologist works on understanding business models, customer behavior, and market positioning — and then builds strategies that align with real objectives.

I lead the vision and strategic direction, working closely on how brands can scale in a competitive digital environment.`,
        image: 'assets/hero.jpg', // Placeholder image
        website: 'https://thedigiologist.com/'
    },
    {
        id: 'markhor-alpha',
        title: 'Markhor Alpha',
        year: '2019',
        role: 'Founder',
        industry: 'Clothing Brand',
        description: `Markhor Alpha is a menswear brand built around identity, presence, and modern style.

It focuses on creating clothing that balances everyday wear with a sense of confidence and individuality. From casual essentials to more refined pieces, the brand is designed for men who want to present themselves with clarity and edge.

The idea behind Markhor Alpha is not just fashion — it is positioning. What you wear reflects how you see yourself, and the brand is built around that mindset.

As founder, I oversee brand direction, positioning, and long-term growth strategy.
`,
        image: 'assets/hero.jpg',
        website: 'https://example.com'
    },
    {
        id: 'dubiland',
        title: 'Dubiland',
        year: '2025',
        role: 'Founder',
        industry: 'Real Estate',
        description: `Dubiland is a real estate-focused platform built around opportunity, access, and market insight.

It connects investors, buyers, and developers with projects in the UAE, with a focus on clarity and trust in a highly competitive market. The platform is designed to simplify discovery while maintaining a strong understanding of the real estate landscape.

Beyond listings, Dubiland is positioned as a bridge between information and decision-making — helping clients navigate options with confidence.

I lead its strategic development, focusing on positioning, digital growth, and long-term expansion.
`,
        image: 'assets/hero.jpg',
        website: 'https://dubiland.ae/'
    },
    {
        id: 'shieldcraft',
        title: 'Shieldcraft Detailing Lab',
        year: '2026',
        role: 'Founder',
        industry: 'Automotive Luxury Services',
        description: `Shieldcraft Detailing Lab is built around precision, protection, and automotive excellence.

The focus is on premium car care services including paint protection film (PPF), detailing, and surface preservation — designed for clients who value both aesthetics and long-term protection.

The brand is positioned to combine technical expertise with a premium experience, ensuring that every vehicle is treated with attention to detail and high standards.

I am involved in building its brand, positioning, and business strategy as it develops into a strong presence in the market.
`,
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
