const Login = document.querySelector(".loginBtn");
const Sign = document.querySelector(".signupbtn");

var submit = document.getElementById('submit-btn');
var contact = document.getElementById('contact-container');
var logincontainer = document.getElementById('login');
var welcome = document.getElementById('welcome');
var contactbtn = document.getElementById('contact');

document.getElementsByClassName('.signupbtn').onclick = function(){
    window.location.href = "signup.hmtl";
}

function validate(){

var username = document.getElementById("user").value;
var password = document.getElementById("password").value;

if (username === 'Kolens' && password === 'password123'){
    window.location.href = "playlist.html";
}
else {
    alert("Username/Password Incorrect");
}
console.log(username == 'Kolens' && password == 'password123');
}

Login.onclick = validate;

Sign.onclick = function(){
    window.location.href = "signup.html";
}

contactbtn.onclick = function(){
    logincontainer.classList.add('hidden');
    welcome.classList.add('hidden');
    contact.classList.add('active');
}

submit.onclick = function(){
    contact.classList.remove('active');
    logincontainer.classList.remove('hidden');
    welcome.classList.remove('hidden');
}