const button = document.querySelector('#menu-button'); // Hamburger Icon
const menu = document.querySelector('#menu'); // Menu

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

document.getElementById("email-form").addEventListener('submit', functSubmit);

//Form validation

function functSubmit (event) {
    // if the email field is valid, we let the form submit
  
    if(!document.getElementById("email").validity.valid) {
      // If it isn't, we display an appropriate error message
      document.getElementById("emailError").classList.toggle('hidden')
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
    if (document.getElementById("name").validity.valueMissing){
        document.getElementById("nameError").classList.toggle('hidden')
    
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
      
    }
    if (document.getElementById("message").validity.valueMissing) {
        document.getElementById("messageError").classList.toggle('hidden')
      event.preventDefault();
    }
  }