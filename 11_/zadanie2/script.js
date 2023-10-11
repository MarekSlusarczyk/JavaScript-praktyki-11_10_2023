// 2. Napisz funkcję JavaScript, która zwraca elementy tablicy większe lub równe niż podana przez użytkownika liczba.

// Przykładowa odpowiedź: 
// dla tablicy [11, 45, 4, 31, 64, 10] i liczby 45, zwróci -> [45,64]

function checkNreturn(liczba) {
    const liczby = [1, 4, 5, 6,7, 34, 45, 56, 67, 78, 89, 99]
    const wiekszeOdPodanej = []
    for(let i = 0; i < liczby.length; i++) {
        if (liczba < liczby[i]) {
            wiekszeOdPodanej.push(liczby[i]);
        }
    }
    return wiekszeOdPodanej;
};

document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('input');
    const btn = document.querySelector('button')
    btn.addEventListener('click', function() {
        let liczba = parseInt(input.value)  
        console.log('Liczby większe od podanej liczby: ' +  checkNreturn(liczba).join(', '))
    })
});