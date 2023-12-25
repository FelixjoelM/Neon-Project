//   var loginbutton = document.getElementById('login-button');

//   loginbutton.addEventListener('click', function() 
//   {
//     window.location.href = "login-form.html";
//   });


  document.addEventListener("DOMContentLoaded", function() {
    var homepageButton = document.getElementById("homepage-button"); //loginpage
    var loginbutton = document.getElementById('login-button'); //homepage
    var registerButton = document.getElementById('register-button'); //homepage
    var registerbuttonreg = document.getElementById('homepage-button1') //registerpage
    var  loginbutton1 = document.getElementById('login-button1') //registerpage
    var  registerbutton1 = document.getElementById('register-button1') //loginpage

    if (loginbutton) {
        loginbutton.addEventListener("click", function() {
            // alert("Register button clicked!");
            window.location.href = "login-form.html";
        });
    }

    if (homepageButton) {
        homepageButton.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    } 

    if (registerButton) {
        registerButton.addEventListener("click", function() {
            window.location.href = "register-form.html";
        });
    }
    if (registerbuttonreg) {
        registerbuttonreg.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
    if (loginbutton1) {
        loginbutton1.addEventListener("click", function() {
            window.location.href = "login-form.html";
        });
    }
    if (registerbutton1) {
        registerbutton1.addEventListener("click", function() {
            window.location.href = "register-form.html";
        });
    }
});
