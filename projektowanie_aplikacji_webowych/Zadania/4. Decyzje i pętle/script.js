//Zadanie 1
function czyParzysta (liczba) {
    if ((liczba % 2) == 0) {
        console.log('Liczba ' + liczba + ' jest parzysta.');
    } else {
        console.log('Liczba ' + liczba + ' jest nieparzysta.');
    }
}
czyParzysta(6);

console.log('---------------------------------')

//Zadanie 2
function wypiszPodzielnePrzez3() {
    for (let i = 1; i <= 100 ; i++) {
        if ((i % 3) == 0) {
            console.log(i);
        }
    }
}
wypiszPodzielnePrzez3();