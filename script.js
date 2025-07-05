


var signUp = document.getElementById('reg')
var login = document.getElementById('login')
let form2 = document.getElementsByClassName('form-box2')
var form1 = document.getElementsByClassName('form-box1')
signUp.addEventListener('click', function () {
   form1[0].style.display = 'none';
   form2[0].style.display = 'block';
})

login.addEventListener('click', function () {
   form1[0].style.display = 'block';
   form2[0].style.display = 'none';
})

var emailInput = document.getElementById("emailInput");
var LoginForm = document.getElementById("loginForm");
// LoginForm.addEventListener("click", validation)
var PasswordError = document.getElementById("passwordError")
var password = document.getElementById("password")
var EmailError = document.getElementById("emailError")


LoginForm.addEventListener("click", function (e) {
   e.preventDefault()

   const emailValue = emailInput.value;
   // Simple email validation regex
   const emailPattern = /^[^\@]+@[^\@]+\.(com|net|org|edu)$/i;
   emailInput.addEventListener("input", function (e) {

      if (emailPattern.test(emailValue)) {
         //message.textContent = "Valid email ✅";
         EmailError.textContent = ""
         emailInput.style.border = "green 5px solid";
         e.preventDefault()


      } else {
         EmailError.textContent = "Invalid email ";
         EmailError.style.color = "red";
      }
   })

   password.addEventListener("input", function (e) {
      if (password.value.length > 6) {

         // e.preventDefault()
         PasswordError.textContent = ""
         password.style.border = "green 5px solid";


      }
      else {
         PasswordError.textContent = "password length must grater than 5 charr";
         PasswordError.style.color = "red";
      }
   })

})

// var el = $("#form-box1");

// $("h3").on("click", function () {
//    var el = $("#form-box1");
//    el.toggle();
// });


