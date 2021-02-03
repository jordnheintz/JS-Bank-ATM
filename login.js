const loginEmail = document.getElementById("loginEmail").value;
const loginPass = document.getElementById("loginPass");
const loginPin = document.getElementById("LoginPin");
const btnLogin = document.getElementById("btnLogin");
const password = "aaaaa";



btnLogin.addEventListener('click', () => {

    if (loginPass === password) {
        alert("Login Successful.");
    } else {
        alert("Login Unsuccessful.");
}
    
});
