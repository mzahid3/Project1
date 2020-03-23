// jQuery 3.x-style ready event and locally scoped $

jQuery(function ($) {
    $('html').removeClass('nojs');
    $("html").addClass("hasjs");
   
    });

// checking for password 
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
// checking for less then 6
  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }
// checking for more then 20 
  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

// checking for message
    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})