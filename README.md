# js-paliedispari

## Descrizione

Questo progetto contiene due esercizi in JavaScript:

- **Palindroma**
- **Pari e Dispari**

L’obiettivo è esercitarsi con:

- `prompt`
- `if / else`
- numeri casuali
- funzioni
- return
- controllo di condizioni

---

## Esercizio 1: Palindroma

### Obiettivo

Chiedere all’utente di inserire una parola e verificare, tramite una funzione, se la parola è palindroma.

Una parola è **palindroma** se si legge allo stesso modo da sinistra a destra e da destra a sinistra.

### Esempi

- `anna` → palindroma
- `oso` → palindroma
- `casa` → non palindroma

### Passaggi

1. Chiedere all’utente di inserire una parola
2. Creare una funzione che controlla se la parola è palindroma
3. Stampare il risultato in console

### Logica

Per controllare se una parola è palindroma si può:

- invertire la parola
- confrontare la parola originale con quella invertita

Se sono uguali, la parola è palindroma.

---

## Esercizio 2: Pari e Dispari

### Obiettivo

Creare il gioco pari e dispari tra utente e computer.

### Regole

1. L’utente sceglie **pari** oppure **dispari**
2. L’utente inserisce un numero da **1 a 5**
3. Il computer genera un numero casuale da **1 a 5**
4. Si sommano i due numeri
5. Si controlla se la somma è pari o dispari
6. Si dichiara il vincitore

### Passaggi

1. Chiedere all’utente di scegliere tra `pari` e `dispari`
2. Chiedere all’utente di inserire un numero da `1` a `5`
3. Creare una funzione per generare il numero casuale del computer
4. Creare una funzione per sommare i due numeri
5. Creare una funzione per capire se un numero è pari o dispari
6. Creare una funzione per dichiarare il vincitore
7. Stampare tutti i risultati in console

### Logica

- se il risultato della somma è **pari** e l’utente ha scelto `pari`, vince l’utente
- se il risultato della somma è **dispari** e l’utente ha scelto `dispari`, vince l’utente
- in tutti gli altri casi vince il computer

---

## Struttura del progetto

```bash
js-paliedispari/
│
├── README.md
├── palindroma/
│   └── index.html
    └── script.js
└── pari-dispari/
    └── index.html
    └── script.js