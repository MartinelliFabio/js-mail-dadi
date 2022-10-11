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
let player1 = "Giocatore";
let player2 = "Computer";

let btnDadi = document.querySelector('.btnDadi');

const tiraIlDado = function() {
    let answerDadi = document.querySelector('.answer-dadi')
    let numeroRandom1 = Math.floor(Math.random() * 6) + 1;
    let numeroRandom2 = Math.floor(Math.random() * 6) + 1;

    if(numeroRandom1 === numeroRandom2) {
        answerDadi.innerHTML = 'Pareggio!';
    } else if(numeroRandom1 < numeroRandom2) {
        answerDadi.innerHTML = player2 + ' ha tirato il dado e ha fatto: ' + numeroRandom2 + ' Vince!';
    } else {
        answerDadi.innerHTML = player1 + ' ha tirato il dado e ha fatto: ' + numeroRandom1 + ' Vince!';
    }
}
btnDadi.addEventListener('click', tiraIlDado);