const form = document.getElementsByTagName('form')[0]

const name = document.getElementById('name')
const nameError = document.querySelector('#name + span.error')

name.addEventListener('input', function (event) {
  if (name.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    nameError.textContent = '' // Reset the content of the message
    nameError.className = 'error' // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError()
  }
})

const email = document.getElementById('mail')
const emailError = document.querySelector('#mail + span.error')

//email input validation
email.addEventListener('input', function (event) {
  // Each time the user types something, we check if the

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = '' // Reset the content of the message
    emailError.className = 'error' // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError()
  }
})
//email input tracking ends

// mobile input tracking
const mobile = document.getElementById('mobile')
const mobileError = document.querySelector('#mobile + span.error')

mobile.addEventListener('input', function (event) {
  if (mobile.value.length == 10) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    mobileError.textContent = '' // Reset the content of the message
    mobileError.className = 'error' // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError()
  }
})
// adding eventListener to the form

form.addEventListener('submit', function (event) {
  // if the name field is valid, we let the form submit
  if (!name.validity.valid) {
    showError()
    event.preventDefault()
  }

  // if the email field is valid, we let the form submit

  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError()
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault()
  }

  // if the mobile field is valid, we let the form submit
  if (!mobile.validity.valid) {
    showError()
    event.preventDefault()
  }

  // form has to be submitted here
})

function showError() {
  //name error
  if (name.validity.valueMissing) {
    nameError.textContent = 'Please enter the name'
  } else if (name.validity.tooShort) {
    nameError.textContent = `name should be at least ${name.minLength} characters; you entered ${name.value.length}.`
  }

  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an e-mail address.'
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an e-mail address.'
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`
  }

  if (mobile.value.length != 10) {
    mobileError.textContent = `mobile should be of 10 digit.`
  }

  // Set the styling appropriately
  emailError.className = 'error active'
  nameError.className = 'error active'
  mobileError.className = 'error active'
}
