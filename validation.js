const formSection = document.querySelector('.desktop-form');
const emailControl = document.querySelector('#email-id');

const alertMessage = document.createElement('p');
alertMessage.classList.add('error-Message');
alertMessage.textContent = 'Your Email Address should only contain lowercase letters.';
const errorParentDiv = document.querySelector('.error-parent');
errorParentDiv.appendChild(alertMessage);

function validationFunct(e) {
  if (emailControl.value !== emailControl.value.toLowerCase()) {
    errorParentDiv.style.display = 'block';
    e.preventDefault();
  } else {
    errorParentDiv.style.display = 'none';
  }
}

formSection.addEventListener('submit', validationFunct);
