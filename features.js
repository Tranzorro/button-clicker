function like(){
    alert("ninja was liked!");
}
function swaptext(){
    const buttontext = document.getElementById("Login");
    if(buttontext.innerText =="Login"){
        buttontext.innerText = "Logout";
    }
    else{
        buttontext.innerText = "Login";
    }
}
function doremove(){
    const mybutton = document.getElementById("definebutton");
    mybutton.remove();
}