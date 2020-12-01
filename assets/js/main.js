// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

//1 dobbiamo generare 5 numeri casuali....assegniao la funzione math random ad una variabile.
var casualNumber
function generatoreNumeri() {
   return Math.floor(Math.random() * 1000) + 1;
 };
//adesso dobbiamo far generare qst numero x 5 vlt.
//i risultati della funzione math li mettiamo in un array.

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
//dopo ciò chiederemo al nstro utente di darci 5 numeri.
