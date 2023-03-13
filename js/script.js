// Mail :posta_in_arrivo:
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// SCRIVO LE MAIL
const mail = ["lolli@gmail", "gionny@gmail", "bonny@gmail", "tony@merlot"]
console.log(mail);

const userMail = prompt("Qual' e la tua email?");

// SE la userMail rientra nelle mail 
let result = false;

for (let i = 0; i < mail.length; i++) {
    const trueMail = mail[i]
    if (trueMail === userMail) {
        result = true;
        console.log(`benvenuto ${userMail}`);
    }
}
if (result === false) {
    console.log(`Signor ${userMail} prima di accedere iscriviti al nostro sito`);
} else {
    let win = ""
    if (result === true) {
        const myRandom = Math.floor((Math.random() * 6) + 1);
        const pcRandom = Math.floor((Math.random() * 6) + 1);
        console.log(`${userMail} hai tirato ${myRandom} mentre il tuo avversario ha tirato ${pcRandom}`);
        if (myRandom > pcRandom) {
            win = "ai vinto"
        } else if (myRandom < pcRandom) {
            win = "ai perso"
        } else {
            win = "ai pareggiato"
        }
        console.log(`${userMail}  ${win}`);
    } else {
        console.log(`${userMail} devi iscriverti al sito prima di poter giocare`);
    }
    
}


// Gioco dei dadi :dado_da_gioco:
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// // Stabilire il vincitore, in base a chi fa il punteggio più alto.



