// 4. Napisz program, który zsumuje liczby będące wielokrotnościami liczb 3 lub 5, wśród wszystkich liczb całkowitych poniżej 1000.

// Wynik: 233168
let i = 0;
let suma = 0;
while (i < 1000) {
    if (i % 3 == 0 || i % 5 == 0) {
        suma += i
    }

    i++;
}

console.log(suma)

