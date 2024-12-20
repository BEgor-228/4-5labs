const select = document.getElementById('choices2');
const cardsContainer = document.querySelector('.cards');
const cards = Array.from(document.querySelectorAll('.card'));

// Сохранение оригинального порядка карточек
const originalOrder = [...cards];

select.addEventListener('change', () => {
    const sortOption = select.value;
    if (sortOption === 'second') {
        // '123'
        // Number('123')
        // +'123'
        // Сортировка по возрастанию цены
        const sortedCards = cards.sort((a, b) => {
            return Number(a.getAttribute('data-price')) - Number(b.getAttribute('data-price'));
        });
        cardsContainer.innerHTML = '';
        sortedCards.forEach(card => cardsContainer.appendChild(card));
    } else if (sortOption === 'third') {
        // Сортировка по убыванию цены
        const sortedCards = cards.sort((a, b) => {
            return parseInt(b.getAttribute('data-price')) - parseInt(a.getAttribute('data-price'));
        });
        cardsContainer.innerHTML = '';
        sortedCards.forEach(card => cardsContainer.appendChild(card));
    } else {
        // По умолчанию (оригинальный порядок)
        cardsContainer.innerHTML = '';
        originalOrder.forEach(card => cardsContainer.appendChild(card));
    }
});