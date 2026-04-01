/* Palidroma */

//Inserisco parola
let testoUtente = prompt("Inserisci una parola");

function trovaPalindromi(testo){
    // Normalizzo il testo:
    // - tutto minuscolo
    // - tolgo spazi e caratteri non alfabetici/numerici
    let testoPulito = testo.toLowerCase().replace(/[^a-z0-9àèéìòù]/gi, "");

    //Preparo la variabile vuota che sarà costituita dalla parola inversa
    let testoInverso = "";

    //Uso il ciclo for che parte dall'ultima lettera fino alla prima e aggiunge ogni lettera al contrario alla variabile parolaInversa
    for (let i = testoPulito.length -1; i >= 0; i--) {
        testoInverso += testoPulito[i];
    }
    //confronto le due parole
    if (testoPulito === testoInverso) {
        console.log("La parola è palindroma");
        alert("La parola è palindroma");
    } else {
        console.log("La parola NON è palindroma");
        alert("La parola NON è palindroma");
    }
}
//Chiamo la funzione
trovaPalindromi(testoUtente);