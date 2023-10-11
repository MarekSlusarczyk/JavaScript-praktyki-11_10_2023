// 2. Napisz program w JavaScript, który będzie iterować od 0 do 15. Dla każdej iteracji niech sprawdza czy liczba jest parzysta, czy nieparzysta, oraz wyświetla komunikat. 

let i = 0
while(i <= 15) {
    let typLiczby;
    if (i % 2 === 0) {
        typLiczby = 'parzysta'
    } else {
        typLiczby = 'nieparzysta'
    }
    console.log('Liczba ' + i + ' jest ' + typLiczby)
    i++;
}