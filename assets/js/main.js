// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

//1 dobbiamo generare 5 numeri casuali....assegniamo la funzione math random ad una variabile.
var casualNumber
function generatoreNumeri() {
   return Math.floor(Math.random() * 1000) + 1;
 };

//adesso dobbiamo far generare qst numero x 5 vlt.
//i risultati della funzione generatoreNumeri li mettiamo in un array.

var numberPcArray = [];
//generiamo quindi un ciclo.

while (numberPcArray.length < 5) {
  casualNumber = generatoreNumeri();

  if (numberPcArray.indexOf(casualNumber) == -1) {
    numberPcArray.push(casualNumber);
  }
}
  alert("Ecco i numeri da memorizzare " + (numberPcArray));

//a qst punto impostiamo un timer da 30 sec ......
//dopo ciò chiederemo al nostro utente di darci 5 numeri.

var seconds = 5;

var counter = setInterval(function(){

  //nst condizione per countdown;
  if (seconds == 0) {
    alert("time-out!! Adesso vediamo quanti numeri ricordi");
    clearInterval(counter);


    //adesso chiediamo all'utente di darci 5 numeri ma uno alla volta;
    //impostiamo un nuovo ciclo.
    //creiamo un array contenitore dei numeri dell'utente giusti e uno dei numeri sbagliati.
    var numeriRicordati = [];
    var numeriSbagliati = [];

    for (var i = 0; i < 5; i++) {
      var domandaUtente = Number(prompt("inserisci un numero di quelli visti prima...."));

      if (check(numberPcArray, domandaUtente) == true) {
        console.log("hai ricordato un numero");
        numeriRicordati.push(domandaUtente);
      }else {
        console.log("numero sbagliato");
        numeriSbagliati.push(domandaUtente);
      }
    };
    console.log("questi sono i numeri ricordati " + numeriRicordati);
    console.log("questi sono i numeri sbagliati " + numeriSbagliati);
    alert("hai ricordato " + numeriRicordati.length + " numeri");

  } else {
    seconds--;
  }
}, 1000);






//creiamo una funziona che scorre array per vedere se i numeri sono uguali.
function check(array, numero) {
    for (var i = 0; i <= 5; i++) {
      if (array[i] == numero) {
        return true;
      }
    }
    return false;
  }
