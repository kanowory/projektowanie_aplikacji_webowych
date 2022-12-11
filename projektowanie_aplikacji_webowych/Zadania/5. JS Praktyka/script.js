window.onload = function () {
    let boxContainer = document.getElementById('box-container');
    let liczbaWierszy = document.getElementById('liczba-wierszy');
    let liczbaKolumn = document.getElementById('liczba-kolumn');

    document.getElementById('stworz').addEventListener('click', function (){
        for (let i = 1; i < liczbaWierszy; i++) {
            for (let j = 1; j < liczbaKolumn; j++) {
                let newElement = document.createElement('div');
                newElement.classList.add('box');

                boxContainer.appendChild(newElement);
            }
        }
    });



}


