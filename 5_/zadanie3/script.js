// 3. Napisz program w JavaScript, który obliczy sumę dwóch podanych liczb całkowitych. Jeśli dwie wartości są takie same, funkcja zwraca potrójną ich sumę.

// Wartości poprawne:
// Dla liczb: 10, 20 -> zwróci 30
// Dla liczb: 10, 10 -> zwróci 60

document.addEventListener("DOMContentLoaded", function() {
    const input_1 = document.getElementById('liczba1')
    const input_2 = document.getElementById('liczba2')
    const btn = document.querySelector('button')

    btn.addEventListener('click', function() {
        let liczba1 = parseInt(input_1.value);
        let liczba2 = parseInt(input_2.value);

        let suma = liczba1 + liczba2
        if (liczba1 === liczba2) {
            suma *= 3
        }

        console.log(suma)
    })

});
