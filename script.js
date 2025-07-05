


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
   btn.addEventListener
   let emailValue = emailInput.value.trim();
   let passwordValue = emailInput.value.trim();


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
   if (passwordPattern.test(passwordValue)) {
      PasswordError.textContent = "Strong password ✅";
      passwordInput.style.border = "3px solid green";
   } else {
      PasswordError.textContent = passwordValue === ""
         ? "Password field can't be empty"
         : "Password must be at least 8 characters, include letters and numbers";
      passwordInput.style.border = "3px solid red";
   }


})
// })



// يمكنك استخدام الزر للتحقق النهائي مثلاً
// btn.addEventListener("click", function (e) {
//    e.preventDefault(); // إذا كنت داخل form
//    const emailValue = emailInput.value;

//    if (emailPattern.test(emailValue)) {
//       alert("Email is valid, submitting form...");
//    } else {
//       alert("Please enter a valid email.");
//    }
// });








// if (emailPattern.test(emailValue)) {
//    //          //message.textContent = "Valid email ✅";
//    //          EmailError.textContent = ""
//    //          emailInput.style.border = "green 5px solid";
//    //          e.preventDefault()


//    //       }

// })
emailInput.value = ""

// LoginForm.addEventListener("click", validation)


// LoginForm.addEventListener("click", function (e) {
//    e.preventDefault()

//    const emailValue = emailInput.value;
//    // Simple email validation regex
//    const emailPattern = /^[^\@]+@[^\@]+\.(com|net|org|edu)$/i;
//    emailInput.addEventListener("input", function (e) {

//       if (emailPattern.test(emailValue)) {
//          //message.textContent = "Valid email ✅";
//          EmailError.textContent = ""
//          emailInput.style.border = "green 5px solid";
//          e.preventDefault()


//       } else {
//          EmailError.textContent = "Invalid email ";
//          EmailError.style.color = "red";
//       }
//    })

//    password.addEventListener("input", function (e) {
//       if (password.value.length > 6) {

//          // e.preventDefault()
//          PasswordError.textContent = ""
//          password.style.border = "green 5px solid";


//       }
//       else {
//          PasswordError.textContent = "password length must grater than 5 charr";
//          PasswordError.style.color = "red";
//       }
//    })

// })

// var el = $("#form-box1");

// $("h3").on("click", function () {
//    var el = $("#form-box1");
//    el.toggle();
// });


