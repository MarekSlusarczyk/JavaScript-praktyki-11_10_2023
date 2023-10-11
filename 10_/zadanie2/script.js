// 2. Napisz program zwracający pierwszy element tablicy. Program powinien umożliwiać wprowadzenie zmiennej, dzięki której zostanie zwrócone "n", elementów tablicy.
// Dodatkowe informacje:
// Jeśli tablica jest pusta -> zwróć komunikat
// Jeśli tablica nie jest pusta, a użytkownik nie podał żadnej wartości "n" -> zwróć pierwszy element tablicy.
// Jeśli tablica nie jest pusta, i użytkownik podał wartość "n" -> zwróć "n" elementów tablicy, zaczynając od pozycji 0.

const array = [2, 5, 7, 8, 9, 10, 25, 44, 45, 34, 23, 5, 7, 8, 2, 3, 4, 4];
document.addEventListener("DOMContentLoaded", function() {
    // console.log("Pierwszy element tablicy: " + array[0])
    // console.log("Podaj który element chcesz otrzymać: (min. wartość 0, maks. wartość " + array.length + ")")

    const input = document.querySelector('input');
    const btn = document.querySelector('button');

    btn.addEventListener('click', function() {
        let nElement = input.value
        if (array.length == 0) {
            console.log("Tablica jest pusta")
        } else if (nElement == '') {
            console.log("Nie podano wartości \nPierwszy element tablicy: " + array[0])
        } else if (nElement !== '') {
            // console.log(array[parseInt(nElement)])
        }
    });

});