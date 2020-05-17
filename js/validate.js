var phoneInput = document.getElementById('inputEmail');
var phoneInvalidMsg = document.getElementById('email-msg');

phoneInput.addEventListener('keydown', function validateEmail(e) {
    var email = e.target.value
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    var isValidEmail = re.test(String(email).toLowerCase())

    if (isValidEmail == false) {
        phoneInvalidMsg.style.display = 'block'
    } else {
        phoneInvalidMsg.style.display = 'none'
    }
})

// camelCase -> variable,function,constants
// PascalCase -> classes,constructors,interfaces

var passwordInput = document.getElementById('inputPassword');
var passwordInvalidPw= document.getElementById('password-msg');

passwordInput.addEventListener('keydown', function validatepassword(e) {
    var password = e.target.value
   
    var isValidPassword =(password.length >=3)?true:false;
    if (isValidPassword == false) {
        passwordInvalidPw.style.display = 'block'
    } else {
        passwordInvalidPw.style.display = 'none'
    }
})
var phoneInput = document.getElementById('inputPhone');
var phoneInvalidMsg = document.getElementById('ph-msg');

if(phoneInput){
    phoneInput.addEventListener('keyup', function validatePhone(e) {
        var phone = e.target.value
    
        var re =/^(\(?[0-9]{3}\)?)((\s|\-){1})?[0-9]{3}((\s|\-){1})?[0-9]{4}$/
        var isValidPhone = re.test(phone)

    
        if (isValidPhone == false) {
            phoneInvalidMsg.style.display = 'block'
        } else {
            phoneInvalidMsg.style.display = 'none'
        }
    })
}


// testing