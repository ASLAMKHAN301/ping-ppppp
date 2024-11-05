const input = document.querySelector('.input');
const button = document.querySelector('.button');
const errorMessage = document.querySelector('.error-message');
const gmailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[gG][mM][aA][iI][lL]\.com$/;

button.addEventListener('click', function(e){
    if(!gmailPattern.test(input.value)){
        errorMessage.classList.remove('hidden') 
        input.classList.add('active')
    } else{
        alert(`${input.value}`)
    }
})