/* Palidroma
L'avete già fatta, quindi va solo convertita in funzione XD:
Chiedere all’utente di inserire una parola,
Creare una funzione per capire se la parola inserita è palindroma,

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.,
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).,
Sommiamo i due numeri,
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione),
Dichiariamo chi ha vinto. */

/* //Inserisco parola
let parolaUtente = prompt("Inserisci una parola");
//Preparo la variabile vuota che sarà costituita dalla parola inversa
let parolaInversa = "";
//Uso il ciclo for che parte dall'ultima lettera fino alla prima e aggiunge ogni lettera al contrario alla variabile parolaInversa
for (let i = parolaUtente.length -1; i >= 0; i--) {
    parolaInversa = parolaInversa + parolaUtente[i];
}
//confronto le due parole
if (parolaUtente === parolaInversa) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola NON è palindroma");
} */

//L'utente sceglie tra pari o dispari
//let parolaUtente = prompt("Scegli tra pari o dispari");
//Poi inserisce un numero da 1 a 5
let numeroUtente = parseInt(prompt ("Scegli un numero da 1 a 5"));
//Variabile con il numero estratto dal computer
let numeroComputer = numeriRandomComputer(1, 5);
//Variabile che contiene il risultato della somma di utente e computer
let risultato = sommaNumeri(numeroUtente, numeroComputer);
//Variabile che contiene l'esito della punzione pariOdispari
let esito = pariOdispari(risultato);


//Funzione che genera un numero casuale tra min e max
function numeriRandomComputer(min, max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}
console.log("Numero utente:", numeroUtente);
console.log("Numero computer:", numeroComputer);
//Funzione che genera la somma
function sommaNumeri(a, b) {
    return a + b;
}
//console.log(risultato); 

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pariOdispari(n) {
    if (n % 2 === 0) {
        return "pari";
    }else{
        return "dispari";
    }
}
console.log("La somma è:",esito)

//Dichiariamo chi ha vinto
function controllaVincitore(numeroUtente, esito){
    if (numeroUtente === esito) {
        return "Hai vinto";
    } else {
        return "Ha vinto il computer";
    }
}

let vincitore = controllaVincitore(numeroUtente, esito);
console.log(vincitore);