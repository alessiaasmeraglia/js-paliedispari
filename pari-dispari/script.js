/*** Pari o Dispari ***/

//L'utente sceglie tra pari o dispari
let parolaUtente = prompt("Scegli tra pari o dispari");
//Poi inserisce un numero da 1 a 5
let numeroUtente = parseInt(prompt ("Scegli un numero da 1 a 5"));

// Controllo se la scelta e il numero corrispondono
if (controllaParolaNumero(parolaUtente, numeroUtente) === false) {
    alert("Errore: la parola scelta non corrisponde al numero inserito");
} else {
    //Variabile con il numero estratto dal computer
    let numeroComputer = numeriRandomComputer(1, 5);
    //Variabile che contiene il risultato della somma di utente e computer
    let risultato = sommaNumeri(numeroUtente, numeroComputer);
    //Variabile che contiene l'esito della punzione pariOdispari
    let esito = pariOdispari(risultato);
    //Variabile che contiene il controllo del vincitore
    let vincitore = controllaVincitore(parolaUtente, esito);

    console.log("Scelta utente:", parolaUtente);
    console.log("Numero utente:", numeroUtente);
    console.log("Numero computer:", numeroComputer);
    console.log("Somma:", risultato);
    console.log("La somma è:", esito);
    console.log(vincitore);
    alert(vincitore);
}


//Funzione che genera un numero casuale tra min e max
function numeriRandomComputer(min, max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

//Funzione che genera la somma
function sommaNumeri(a, b) {
    return a + b;
}

//Funzione per stabilire se la somma dei due numeri è pari o dispari
function pariOdispari(n) {
    if (n % 2 === 0) {
        return "pari";
    }else{
        return "dispari";
    }
}

//Funzione per dichiarare chi ha vinto
function controllaVincitore(parolaUtente, esito){
    if (parolaUtente === esito) {
        return "Hai vinto";
    } else {
        return "Ha vinto il computer";
    }
}

//Funzione per controllare che parola e numero utente corrisponda
function controllaParolaNumero(parolaUtente, numeroUtente) {
    return parolaUtente === pariOdispari(numeroUtente);
} 