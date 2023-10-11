// 1. Pobierz niezbędne elementy: wszystkie znaczniki strong, i przycisk.
// 2. Utwórz funkcję, która będzie zmieniała kolor wszystkich elementów pogrubionych.
// 3. Utwórz funkcję, która będzie przywracała kolor wszystkich elementów pogrubionych.
// 4. Połącz pierwszą funkcję, ze zdarzeniem po najechaniu na przycisk.
// 5. Połącz drugą funkcję, ze zdarzeniem po zdjechaniu myszku z przycisku.

document.addEventListener("DOMContentLoaded", function() {
    const strong = document.querySelectorAll('strong');
    const btn = document.querySelector('button');

    btn.addEventListener('mouseover', function() {
        // strong[0].style.color = 'red';
        czerwony();

    })

    btn.addEventListener('mouseleave', function() {
        // strong[0].style.color = 'black';
        czarny();
    })

    function czerwony() {
        for(let i = 0; i < strong.length; i++) {
            strong[i].style.color = 'red';
        }
    }

    function czarny() {
        for(let i = 0; i < strong.length; i++) {
            strong[i].style.color = 'black';
        }
    }
})