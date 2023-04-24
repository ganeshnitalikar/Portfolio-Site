function validate() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    if(name == "" || name == null){
        alert("Enter Name");
        document.getElementById("name").focus();
        return false;
    }else if(email.indexOf("@")== -1 || email==null || email==""){
        alert("Enter Valid Email");
        document.getElementById("email").focus();
        return false;
    }
}

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ganeshnitalikar@gmail.com",
    Password : "",
    To : 'ganeshnitalikar@gmail.com',
    From : document.getElementById("email").value,
    Subject : "Message Tittle",
    Body : "Name: " + document.getElementById("name")
}).then(
  message => alert(message)
);
