//1. Utwórz program przeliczający stopnie Fahrenheita na stopnie Kelvina i Celsjusza.
//2. Rozpocznij od pobrania najważniejszych elementów HTML za pomocą querySelector.
//3. Utwórz funkcję zamieniającą stopnie fahrenheita na kelvina, pamiętaj aby:
    //- funkcja była zabezpieczona przed pustą wartością (brak liczby w inpucie)
    //- funkcja zwracała wartość zaokrągloną do dwóch miejsc po przecinku
    //- funkcja obliczaną wartość wprowadzała do pola "#tempKel".
//4. Funkcja powinna zostać połączona ze zdarzeniem kliknięcia, uruchamianym po naciśnięciu na przycisk.
//5. Utwórz funkcję zamieniającą stopnie fahrenheita na celsjusza, pamiętaj aby:
    //- funkcja pobierała wartościa z inputa w trakcie pisania
    //- funkcja była zabezpieczona przed wartością pustą (brak liczby w input)
    //- obliczaną wartoścć przypisywała do inputa o nazwie celsjusz
//6. Utworzoną funkcję połącz ze zdarzeniem "input", wywoływanym na inpucie o nazwie fahrenheit.

document.addEventListener("DOMContentLoaded", function() {
    const inputFahrenheit = document.querySelector('input[name="fahrenheit"]');
    const inputCelsjusz = document.querySelector('input[name="celsjusz"]');
    const stopnieKelvina = document.querySelector('#tempKel');
    const btn = document.querySelector('button');

    inputFahrenheit.addEventListener("input", (event) => {
        inputCelsjusz.value = fahrenheitNaCelsjusz(event.target.value)
    });

    btn.addEventListener('click', function() {
        stopnieKelvina.innerHTML = fahrenheitNaKelvin();
    })

    function fahrenheitNaKelvin() {
        let temperaturaWFahrenheitach = parseInt(inputFahrenheit.value);
        if (!isNaN(temperaturaWFahrenheitach)) {
            let temperaturaWKelvinach = (temperaturaWFahrenheitach + 459.67) * (5/9);
            
            return temperaturaWKelvinach.toFixed(2);
        } else {
            return 'Wartość jest pusta!'
        }
    }

    function fahrenheitNaCelsjusz(value) {
        if (value == '') {
            return '';
        } else {
            let temperaturaWCelsjuszach = (value - 32) * (5/9);
            return temperaturaWCelsjuszach.toFixed(2);
        }
    };
});
