// Reviews Page JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded!'); // Debug log
    
    // Get all review cards
    const reviewCards = document.querySelectorAll('.review-card');
    const filterSelects = document.querySelectorAll('.filter-select');
    const sortSelect = document.querySelector('.sort-select');
    const clearFiltersBtn = document.querySelector('.clear-filters');
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    console.log('Found elements:', {
        reviewCards: reviewCards.length,
        filterSelects: filterSelects.length,
        sortSelect: sortSelect,
        clearFiltersBtn: clearFiltersBtn,
        searchInput: searchInput,
        searchButton: searchButton
    });

    // Filter functionality
    function filterReviews() {
        console.log('Filtering reviews...'); // Debug log
        
        // Get filter values
        const genreFilter = document.querySelector('select[class*="filter-select"]').value;
        const ratingFilter = document.querySelectorAll('select[class*="filter-select"]')[1]?.value || '';
        const yearFilter = document.querySelectorAll('select[class*="filter-select"]')[2]?.value || '';
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

        console.log('Filter values:', { genreFilter, ratingFilter, yearFilter, searchTerm });

        reviewCards.forEach(card => {
            let showCard = true;

            // Get movie data from the card
            const title = card.querySelector('h4')?.textContent.toLowerCase() || '';
            const genre = card.querySelector('.genre')?.textContent.toLowerCase() || '';
            const year = card.querySelector('.year')?.textContent || '';
            const rating = card.querySelector('.rating-stars')?.textContent || '';
            const description = card.querySelector('p')?.textContent.toLowerCase() || '';

            console.log('Card data:', { title, genre, year, rating });

            // Genre filter
            if (genreFilter && genreFilter !== '' && !genre.includes(genreFilter.toLowerCase())) {
                showCard = false;
                console.log('Filtered out by genre:', title);
            }

            // Rating filter
            if (ratingFilter && ratingFilter !== '') {
                const starCount = (rating.match(/★/g) || []).length;
                const requiredRating = parseInt(ratingFilter);
                if (starCount < requiredRating) {
                    showCard = false;
                    console.log('Filtered out by rating:', title);
                }
            }

            // Year filter
            if (yearFilter && yearFilter !== '' && year !== yearFilter) {
                showCard = false;
                console.log('Filtered out by year:', title);
            }

            // Search filter
            if (searchTerm && searchTerm !== '') {
                const searchableText = `${title} ${genre} ${description}`;
                if (!searchableText.includes(searchTerm)) {
                    showCard = false;
                    console.log('Filtered out by search:', title);
                }
            }

            // Show/hide card
            if (showCard) {
                card.style.display = 'block';
                card.style.opacity = '1';
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
            }
        });

        updateResultsCount();
    }

    // Sort functionality
    function sortReviews() {
        console.log('Sorting reviews...'); // Debug log
        
        const sortValue = sortSelect ? sortSelect.value : 'latest';
        const reviewsGrid = document.querySelector('.reviews-grid');
        const visibleCards = Array.from(reviewCards).filter(card => card.style.display !== 'none');

        visibleCards.sort((a, b) => {
            const titleA = a.querySelector('h4')?.textContent.toLowerCase() || '';
            const titleB = b.querySelector('h4')?.textContent.toLowerCase() || '';
            const ratingA = a.querySelector('.rating-stars')?.textContent || '';
            const ratingB = b.querySelector('.rating-stars')?.textContent || '';
            const yearA = a.querySelector('.year')?.textContent || '';
            const yearB = b.querySelector('.year')?.textContent || '';

            switch (sortValue) {
                case 'title':
                    return titleA.localeCompare(titleB);
                case 'rating':
                    const starsA = (ratingA.match(/★/g) || []).length;
                    const starsB = (ratingB.match(/★/g) || []).length;
                    return starsB - starsA; // Highest first
                case 'latest':
                    return yearB - yearA; // Newest first
                default:
                    return 0;
            }
        });

        // Reorder cards in the grid
        visibleCards.forEach(card => {
            reviewsGrid.appendChild(card);
        });
    }

    // Update results count
    function updateResultsCount() {
        const visibleCards = Array.from(reviewCards).filter(card => card.style.display !== 'none');
        const resultsText = document.querySelector('.reviews-header h3');
        if (resultsText) {
            resultsText.textContent = `Latest Reviews (${visibleCards.length} results)`;
        }
        console.log('Visible cards:', visibleCards.length);
    }

    // Clear all filters
    function clearAllFilters() {
        console.log('Clearing all filters...'); // Debug log
        
        // Reset filter selects
        filterSelects.forEach(select => {
            select.value = '';
        });

        // Reset search input
        if (searchInput) {
            searchInput.value = '';
        }

        // Reset sort
        if (sortSelect) {
            sortSelect.value = 'latest';
        }

        // Show all cards
        reviewCards.forEach(card => {
            card.style.display = 'block';
            card.style.opacity = '1';
        });

        updateResultsCount();
    }

    // Event listeners
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            console.log('Filter changed:', this.value);
            filterReviews();
        });
    });

    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            console.log('Sort changed:', this.value);
            sortReviews();
        });
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }

    if (searchButton) {
        searchButton.addEventListener('click', filterReviews);
    }

    // Search on Enter key
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                filterReviews();
            }
        });
    }

    // Initialize
    updateResultsCount();
    console.log('Initialization complete!');
});

// Add smooth animations
function addCardAnimations() {
    const cards = document.querySelectorAll('.review-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
}

// Add this CSS to your reviews.css file for animations
const style = document.createElement('style');
style.textContent = `
    .review-card {
        transition: all 0.3s ease;
    }
    
    .review-card.fade-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .review-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }
`;
document.head.appendChild(style);

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', addCardAnimations); 