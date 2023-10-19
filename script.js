var redirect = document.querySelector('.redirecet');
var login1 = document.querySelector('.login1');


redirect.addEventListener('click', function(){
    alert("Registration in progress");
         window.location.href = "./success.html";
});


login1.addEventListener('click', function(){
    alert("i got clicked");
});