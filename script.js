document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;

        document.querySelectorAll('.card').forEach(card => {
            const cardText = card.textContent.toLowerCase();
            if (cardText.includes(query)) {
                card.style.display = '';
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    searchInput.addEventListener('input', function () {
        if (!searchInput.value.trim()) {
            document.querySelectorAll('.card').forEach(card => {
                card.style.display = '';
            });
        }
    });

    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        const dropLink = dropdown.querySelector('.nav-link');

        dropLink.addEventListener('click', function (e) {
            if (window.matchMedia('(hover: none)').matches) {
                e.preventDefault();
                const isOpen = dropdown.classList.contains('open');
                if (!isOpen) {
                    e.preventDefault();
                    dropdown.classList.add('open');
                }
            }
        });

        document.addEventListener('click', function (e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });
    }
});