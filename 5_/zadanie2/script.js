// 2. Napisz program w JavaScript, który obliczy różnicę między podaną liczbą a liczbą 13, jeśli liczba jest większa niż 13, zwróci podwójną różnicę (bezwzględną).


// Wartości poprawne
// Dla liczby: 32 -> zwróci 38
// Dla liczby: 11 -> zwróci 2

document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('input');

    const btn = document.querySelector('button')

    btn.addEventListener('click', function() {
        let liczba13 = 13;
        let podanaLiczba = parseInt(input.value);

        let wynik = liczba13 - podanaLiczba;

        if (podanaLiczba > liczba13) {
            wynik = Math.abs(wynik * 2);
        }

        console.log(wynik);
    })
});
