function verfier () {
    //declaration variable
    var fn = document.getElementById("first-name").value;
    var ln = document.getElementById("last-name").value;
    var em = document.getElementById("work-email").value;
    var pass = document.getElementById("password").value;
    var cpass = document.getElementById("confirm-password").value;
    //declaration un variable qui contient un charactere
    var char = /^[a-zA-Z]+$/;
    //verifier est ce que le nom vide ou non
    if (fn == "") {
        alert("First name is required");
        return false;
    }
    //verifier est ce que le nom est alphabetique ou non
    else if (!fn.match(char)) {
        alert("First name must be alphabetic characters only");
        return false;
    }   
    //verifier est ce que le prenom vide ou non
    else if (ln == "") {
        alert("Last name is required");
        return false;
    }
    //verifier est ce que le prenom est alphabetique ou non
    else if (!ln.match(char)) {
        alert("Last name must be alphabetic characters only");
        return false;
    }
    //verifier est ce que le mail vide ou non
    else if (em == "") {
        alert("Email is required");
        return false;
    }
    //verifier est ce que le mail est valide ou non
    else if (!em.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/)) {
        alert("Email is not valid");
        return false;
    }
    //verifier est ce que le mot de passe vide ou non
    else if (pass == "") {
        alert("Password is required");
        return false;
    }
    //verifier est ce que le mot de passe est  fort ou non
    else if (pass.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }   
    //verifier est ce que le mot de passe est identique ou non
    else if (pass != cpass) {
        alert("Password and confirm password do not match");
        return false;
    }
}