var redirect = document.querySelector('.redirecet');
var password = document.querySelector('.password');
var cpassword = document.querySelector('.cpassword');



redirect.addEventListener('click', function(){

    if(password.value != cpassword.value){
        alert('Passwords do not match');
    }else if(password.value == "" || cpassword.value == ""){
        alert("Please fill in a valid password");
    }else{
        alert('Registration in progress | Creating account');
        window.location.href = "./success.html";
    }
    
});
