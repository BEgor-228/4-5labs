document.addEventListener('DOMContentLoaded', () => {
    const filterButton = document.querySelector('.filter');
    const choices1 = document.querySelector('.choices1');
    const checkboxes = document.querySelectorAll('.check input[type="checkbox"]');
    const cards = document.querySelectorAll('.card');

    // Показать/скрыть фильтры
    filterButton.addEventListener('click', () => {
        if (choices1.style.display === 'none' || choices1.style.display === '') {
            choices1.style.display = 'block';
        } else {
            choices1.style.display = 'none';
        }
    });

    // Фильтрация карточек
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const selectedBrands = Array.from(checkboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);

            cards.forEach(card => {
                const cardBrand = card.getAttribute('data-brand');
                if (selectedBrands.length === 0 || selectedBrands.includes(cardBrand)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});