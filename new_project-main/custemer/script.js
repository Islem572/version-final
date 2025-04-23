    function first_name () 
{
    var nom = first-name.trim();
    //verfication est ce que le nom est vide ou pas
    if (nom == "") {
        console.log("the name is empty");
        return false;
}
//verfication est ce que le nom est alphabetique ou pas
    else if (!/^[a-zA-Z]+$/.test(nom)) {
        console.log("the name is not alphabetic");
        return false;
    }
}
function last_name () 
{
    var prenom = last-name.trim();
    //verfication est ce que le prenom est vide ou pas
    if (prenom == "") {
        console.log("the name is empty");
}
//verfication est ce que le prenom est alphabetique ou pas 
    else if (!/^[a-zA-Z]+$/.test(prenom)) {
        console.log("the last name is not alphabetic");
    }
}
 // fonction pour verifier si l'email est valide ou pas
function email ()
{
    var email = work-email.trim();
    //verfication est ce que l'email est vide ou pas
    if (email == "") {
        console.log("the email is empty");
}
//verfication est ce que l'email est valide ou pas
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        console.log("the email is not valid");
    }
}
function main () 
{
    //appel de la fonction pour verifier le nom
    first_name();
    //appel de la fonction pour verifier le prenom
    last_name();
    //appel de la fonction pour verifier l'email
    email();
}