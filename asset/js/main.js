/*
CONSEGNA:
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


/* STEP:

1 - Utente inserisce la parola

2 - Prendo il valore dell'input registrandolo in una variabile

3 - Avvio la sequenza tramite un bottone, quindi registro anche quel input

4 - Creo la funzione che al click del bottone raccoglie l'input della parola

*/


//input parola inserita dall'utente
let InputPalindrome = document.getElementById('InputPali');

//Tasto per verificare
let Button1 = document.getElementById('btn1').value;

//Al click raccolgo i dati
document.addEventListener("click", RegDataInput);


function RegDataInput() {
    console.log(InputPalindrome.value);
};



function verPali(word) {

}