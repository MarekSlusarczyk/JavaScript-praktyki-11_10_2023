// 1. Pobierz wszystkie niezbędne elementy HTML, takie jak: input, miejsce na pole i obwód, przycisk.
/* 2. Napisz funkcję pozwalającją na obliczenie obwodu kwadaratu, pamiętaj aby:
    - funkcja pobierała aktualną wartośc boku
    - funkcja obliczała obwód
    - przypisywała obwód do elementu HTML
    - zwracała obwód
    - była zabezpieczona przed wartością pustą, jak i ujemnymi bokami
    - zwracała null jeżeli bok będzie pusty lub ujemny
*/
// 3. Utworzoną funkcję połącz z przyciskiem za pomocą zdarzenia (klikniecie).

/* 4. Utwórz funkcję umożliwiającą obliczenie pola kwadratu, pamiętaj:
    - funkcja powinna pobierać aktualną wartość boku
    - obliczać pole kwadratu
    - być zabezpieczona przed wartościami ujemnymi jak i pustym inputem
    - zwracać pole kwadratu, jeżeli wartość zostanie obliczona
    - zwracać null, jeżeli pole nie zostanie obliczone
*/
// 5. utworzoną funkcję połącz z polem input za pomocą zdarzenia wywołującego się w trakcie wprowadzania wartości do inputa. 



/*                                 DODATKOWE                                   */

// Utwórz funkcjonalość, która bedzie rysowała kwadrat po wprowadzeniu boku kwadratu.

// Podpowiedzi: 

/* 
    1. Utwórz funkcję odpowiedzialną za tworzenie kwadratu, pamiętaj aby:
        - funkcja zawsze tworzyła nowy kwadrat,
        - nowy kwadrat powinien posiadać przypisaną klasę "obiekt"
        - nowy kwadrat musi mieć długość i szerokość równą wprowadzonej wartości
        - pamiętaj aby nowy kwadrat został dodany do diva z klasą "kontener",
        - po utworzeniu kwadratu, zwróc nowy kwadrat,
        - zabezpiecz funkcję, aby nie tworzyła kwadratu dla wartości pusty i ujemnych

    2. Utworzona funkcja powinna usuwać stary kwadrat, tak aby w trakcie wprowadzania nowej wartości do inputa, pojawiał się tylko jeden kwadrat.

    3. Utworzona funkcja powinna zostać podłączona do zdarzenia odpowiadającego za przechytywanie wartości "inputa" w trakcie wpisywania w nim wartości.

*/

document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('input');
    const pole = document.querySelector('.pole');
    const obwod = document.querySelector('.obwod');
    const btn = document.querySelector('button');
    const container = document.querySelector('.kontener');
    
    let wartoscBoku;
    input.addEventListener("input", (event) => {
        wartoscBoku = event.target.value
        pole.innerHTML = obliczPole(wartoscBoku);
        container.innerHTML = rysujKwadrat(event.target.value);
    });

    btn.addEventListener('click', function() {
        obwod.innerHTML = obliczObwod(wartoscBoku)
    })

    function obliczObwod(value) {
        if (parseInt(value) > 0 && value !== '') {
            let iloscBokow = 4
            let wartoscObwodu = value * iloscBokow;
            return wartoscObwodu
        } else {
            return null
        }
    }

    function obliczPole(value) {
        console.log(value)
        if (parseInt(value) > 0 && value !== '') {
            let wartoscPola = value * value
            return wartoscPola
        } else {
            return null
        }
    }

    
    function rysujKwadrat(value) {
        if (parseInt(value) > 0 && value !== '') {
            let kwadrat = '<div class="obiekt" style="width: '+value+'cm; height: '+value+'cm;"></div>'
            return kwadrat;
        } else {
            return '';
        }
    }
})