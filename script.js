


const signUp = document.getElementById('reg')


var login = document.getElementById('login')
let form2 = document.getElementById('form-box2')
var form1 = document.getElementById('form-box1')

var emailInput = document.getElementById("emailInput");
var LoginForm = document.getElementById("loginForm");
var btn = document.getElementById('btn')
var PasswordError = document.getElementById("passwordError")
var passwordInput = document.getElementById("passwordInput")
var EmailError = document.getElementById("emailError")
const emailPattern = /^[^\@]+@[^\@]+\.(com|net|org|edu)$/i;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

signUp.addEventListener("click", function () {
   form1.style.display = "none"
   form2.style.display = "block";

})
login.addEventListener('click', function () {
   form1.style.display = 'block';
   form2.style.display = 'none';
})

btn.addEventListener("click", function () {
   let emailValue = emailInput.value.trim();


   if (emailPattern.test(emailValue)) {
      EmailError.textContent = "Valid email ✅";
      emailInput.style.border = "5px solid green";
   } else {
      if (emailValue === '') {
         EmailError.textContent = "This Feild Can't be Empty";

      } else {
         EmailError.textContent = "Invalid email format ❌";
      }
      emailInput.style.border = "3px solid red";
   }
   let passwordValue = emailInput.value.trim();

   if (passwordPattern.test(passwordValue)) {
      PasswordError.textContent = "Strong password ✅";
      passwordInput.style.border = "3px solid green";
   } else {
      PasswordError.textContent = "password length must grater than 5 charr";
      PasswordError.style.color = "red";
   }


})






