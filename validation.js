const formSection = document.querySelector('.desktop-form');
const emailControl =document.querySelector('#email-id');

const alertMessage = document.createElement('p');
alertMessage.classList.add('error-Message');
alertMessage.textContent = "Your Email Address contains UPPERCASE letters, please lowercase letters. (e.g username@gmail.com"; 
const errorParentDiv = document.querySelector('error-parent');
errorParentDiv.appendChild(alertMessage);

formSection.addEventListener('submit', validationFunct)


