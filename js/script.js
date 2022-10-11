/*  -----------------------------------------------------------------------------------------------
    
    MAIL

    Chiedi all’utente la sua email,
    controlla che sia nella lista di chi può accedere,
    stampa un messaggio appropriato sull’esito del controllo.
--------------------------------------------------------------------------------------------------- */

// Array della liste delle mail 
const listaMail = ["mariorossi@gmail.com", "mariorossi@libero.it", "prova@mail.it", "luigiverdi@gmail.com", "luigiverdi@libero.it", "pippo"];
// console.log(listaMail);

let inputMail = document.getElementById('userMail');
let btn = document.querySelector('button');

// Funzione per l'azione del click del bottone
const action = function() {
    let check = false; 
    let answer = document.querySelector('.answer');
    let userMail = inputMail.value;
    for(let i = 0; i < listaMail.length; i++) {
        if(userMail == listaMail[i]){
            check = true;
        } 
    } 
    if(check) {
        answer.innerHTML = `Questa mail è valida! Puoi accedere!`;
        document.getElementById('go-to-dadi').className = 'd-block container text-center mt-5';
    } else {
        answer.innerHTML = 'Questa mail non è valida! Non puoi accedere!';
    }
    inputMail.value = "";
}
btn.addEventListener('click', action);


/*  -----------------------------------------------------------------------------------------------
    
    GIOCO DEI DADI

    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
--------------------------------------------------------------------------------------------------- */
// Creo 2 variabili per il nome dei giocatori
let player1 = "Giocatore";
let player2 = "Computer";

let btnDadi = document.querySelector('.btnDadi');

// Funzione per l'azione del click del bottone
const tiraIlDado = function() {
    let answerDadi = document.querySelector('.answer-dadi');
    // Creo due varibili ed assegno un numero random da 1 a 6 ad ognuna
    let numeroRandom1 = Math.floor(Math.random() * 6) + 1;
    let numeroRandom2 = Math.floor(Math.random() * 6) + 1;

    // setAttribute per aggiungere attributi agli elementi .img1 e img2
    document.querySelector(".img1").setAttribute("src",
        "../img/dice" + numeroRandom1 + ".png");

    document.querySelector(".img2").setAttribute("src",
        "../img/dice" + numeroRandom2 + ".png");

    if(numeroRandom1 === numeroRandom2) {
        answerDadi.innerHTML = 'Pareggio!';
    } else if(numeroRandom1 < numeroRandom2) {
        answerDadi.innerHTML = player2 + ' ha tirato il dado e ha fatto: ' + numeroRandom2 + '. Vince!';
    } else {
        answerDadi.innerHTML = player1 + ' ha tirato il dado e ha fatto: ' + numeroRandom1 + '. Vince!';
    }
}
btnDadi.addEventListener('click', tiraIlDado);