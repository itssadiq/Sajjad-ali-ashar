const booksData = [
    {
        id: 'digital-intelligence-1',
        title: 'The Age of Digital Intelligence — Volume I',
        year: '2026',
        description: 'An exploration of how digital intelligence is reshaping human interaction, societal structures, and the future of work.',
        price: '$24.99',
        coverImage: 'assets/hero.jpg', // Placeholder image
        purchaseLink: 'https://amazon.com'
    },
    {
        id: 'digital-intelligence-2',
        title: 'The Age of Digital Intelligence — Volume II',
        year: '2026',
        description: 'Building upon the foundations of Volume I, this book dives deeper into the philosophical and ethical implications of widespread AI adoption.',
        price: '$26.99',
        coverImage: 'assets/hero.jpg',
        purchaseLink: 'https://amazon.com'
    },
    {
        id: 'sociology-ai',
        title: 'Sociology in the Age of AI',
        year: '2026',
        description: 'A comprehensive study on how artificial intelligence is changing community dynamics and personal relationships in the modern era.',
        price: '$22.99',
        coverImage: 'assets/hero.jpg',
        purchaseLink: 'https://amazon.com'
    },
    {
        id: 'sands-of-legacy',
        title: 'Sands of Legacy',
        year: '2026',
        description: 'A deep dive into history and culture, tracing the footsteps of past civilizations and their enduring legacy on the modern world.',
        price: '$19.99',
        coverImage: 'assets/hero.jpg',
        purchaseLink: 'https://amazon.com'
    },
    {
        id: 'madawa',
        title: 'Madawa',
        year: '2025',
        description: 'A captivating narrative that blends historical fiction with profound personal discovery, set against the backdrop of shifting empires.',
        price: '$18.99',
        coverImage: 'assets/hero.jpg',
        purchaseLink: 'https://amazon.com'
    },
    {
        id: 'ramz',
        title: 'Ramz',
        year: '2026',
        description: 'Unlocking the secrets of ancient wisdom and exploring how it applies to our modern-day challenges and pursuit of meaning.',
        price: '$21.99',
        coverImage: 'assets/hero.jpg',
        purchaseLink: 'https://amazon.com'
    }
];

// Helper to get book by ID
function getBookById(id) {
    return booksData.find(book => book.id === id);
}

// Export for module usage (optional, if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { booksData, getBookById };
}
