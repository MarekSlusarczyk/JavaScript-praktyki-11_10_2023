// 4. Napisz program w języku JavaScript, obliczający mnożenie i dzielenie dwóch liczb. (Dane powinny być podane przez użytkownika). (Zabezpiecz program przed wartością zerową.)


document.addEventListener("DOMContentLoaded", function() {
    const input_1 = document.getElementById('liczba1')
    const input_2 = document.getElementById('liczba2')
    const btn_mnoz = document.querySelector('button#mnoz')
    const btn_dziel = document.querySelector('button#dziel')

    btn_mnoz.addEventListener('click', function() {
        let liczba1 = parseInt(input_1.value);
        let liczba2 = parseInt(input_2.value);

        let iloczyn = liczba1 * liczba2

        console.log(iloczyn)
    })

    btn_dziel.addEventListener('click', function() {
        let liczba1 = parseInt(input_1.value);
        let liczba2 = parseInt(input_2.value);

        if (liczba2 === 0) {
            console.log('Nie można dzielić przez 0!')
            return
        }

        let iloraz = liczba1 / liczba2

        console.log(iloraz)
    })

});
