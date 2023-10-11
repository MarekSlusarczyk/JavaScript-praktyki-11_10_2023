// 4. Napisz program w JavaScript, który znajdzie sumę kwadratów wektora liczbowego.

// Przykładowa odpowiedź:
// Dla liczb: 0,1,2,3,4 -> wynik: 30

const liczby = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let sumaKwadratow = 0;
for (let i = 0; i < liczby.length; i++) {
    sumaKwadratow += Math.pow(liczby[i], 2)
}

console.log('Suma kwadratów wektora liczbowego wynosi: ' + sumaKwadratow);