// 6. (Dodatkowe). Napisz program w JavaScript, który przyjmuje liczbę jako dane wejściowe i wstawia kreski (-) między każdą z dwóch liczb parzystych.

// Przykładowa odpowiedź:
// dla liczby: 025468 -> odpowiedź: 0-254-6-8


document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('input');
    const btn = document.querySelector('button');

    btn.addEventListener('click', function() {
        let liczbaString = input.value;
        const arrayOfNumbers = [];
        const arrayOfNumbersWithLines = [];

        for(let i = 0; i < liczbaString.length; i++) {
            arrayOfNumbers.push(parseInt(liczbaString[i]));
        }

        for(let i = 0; i < arrayOfNumbers.length; i++) {
            if (arrayOfNumbers[i] % 2 == 0 && arrayOfNumbers[i+1] % 2 == 0) {
                arrayOfNumbersWithLines.push(arrayOfNumbers[i]);
                arrayOfNumbersWithLines.push('-');
            } else {
                arrayOfNumbersWithLines.push(arrayOfNumbers[i]);
            }
        }

        liczbaString = arrayOfNumbersWithLines.join('').toString();
        console.log(liczbaString)
    })
});