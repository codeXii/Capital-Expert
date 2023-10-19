var redirect = document.querySelector('.redirecet');
var password = document.querySelector('.password');
var cpassword = document.querySelector('.cpassword');



redirect.addEventListener('click', function(){
    if(password.value != cpassword.value){
        alert('Passwords do not match');
    }else{
        alert("Registration in progress");
         window.location.href = "./success.html";
    }
    
});
