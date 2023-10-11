// 1. Pobierz niezbędne elementy HTML takie jak: kontener na zdjęcia i przycisk
// 2. Utwórz tablicę zawierającą nazwy zdjęć
/* 3. Utwórz funkcję której zadaniem będzie: 
    - losowanie dowolnej liczby z zakresu 0 - długość tablicy
    - do losowania użyj Math.random, pamiętaj o zaokrągleniu otrzymanej liczby
    - z tablicy pobierz dowolne zdjęcie z wykorzystaniem wylosowanej liczby
    - za pomocą stylu zmień tło kontenera na zdjęcia 
    - zwróć pobrane zdjęcie
*/
// 4. Podłącz funkcję za pomocą zdarzenia do przycisku

document.addEventListener("DOMContentLoaded", function() {
    const kontener = document.querySelector('.photoContainer');
    const btn = document.querySelector('button');
    const zdjecia = [
        './photos/bird.jpg',
        './photos/brak.png',
        './photos/cat.jpg',
        './photos/crystal.jpg',
        './photos/desert.jpg',
        './photos/ice.jpg',
        './photos/picture.png',
        './photos/sunset.jpg',
    ]

    btn.addEventListener('click', function() {
        kontener.style.backgroundImage = 'url('+zdjecia[losujZdjecie()]+')';
    })

    function losujZdjecie() {
        let wylosowana = Math.random() * (zdjecia.length-1 - 0) + 0;
        console.log(wylosowana.toFixed(0));
        return wylosowana.toFixed(0);
    }
})