/* Palidroma */

//Inserisco parola
let parolaUtente = prompt("Inserisci una parola");

function trovaPalindromi(parolaUtente){
    //Preparo la variabile vuota che sarà costituita dalla parola inversa
    let parolaInversa = "";

    //Uso il ciclo for che parte dall'ultima lettera fino alla prima e aggiunge ogni lettera al contrario alla variabile parolaInversa
    for (let i = parolaUtente.length -1; i >= 0; i--) {
        parolaInversa = parolaInversa + parolaUtente[i];
    }
    //confronto le due parole
    if (parolaUtente === parolaInversa) {
        console.log("La parola è palindroma");
        alert("La parola è palindroma");
    } else {
        console.log("La parola NON è palindroma");
        alert("La parola NON è palindroma");
    }
}

let risultatoPali = trovaPalindromi(parolaUtente);