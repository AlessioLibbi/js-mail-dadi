// Mail :posta_in_arrivo:
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// SCRIVO LE MAIL
const mail = [ "lolli@gmail", "gionny@gmail", "bonny@gmail", "tony@merlot"]
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
console.log(result);

if (result === false) {
    console.log(`Signor ${userMail} prima di accedere iscriviti al nostro sito`);
}

