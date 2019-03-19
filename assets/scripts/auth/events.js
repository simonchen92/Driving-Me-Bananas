'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const entryEvents = require('../entries/events')

const onSignUp = (event) => {
  // console.log('on SignUp Succes')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSucess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  // console.log('on Sign In Success')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSucess)
    // get all existing entries on sign in
    .then(() => { entryEvents.onGetEntries() })
    .catch(ui.signInFailure)
}

// Toggle buttons for sign in/up

const onSignInToggle = (event) => {
  // console.log('sign in toggle works')
  ui.signInToggle()
}

const onSignUpToggle = (event) => {
  // console.log('sign up toggle works')
  ui.signUpToggle()
}

const onChangePassword = (event) => {
  // console.log('on Change Password success')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = (event) => {
  // console.log('on Sign Out Success')
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// event handler for on click

const authHandler = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-btn').on('click', onSignOut)
  // below are button toggle for auth for future iterations
  $('#sign-in-toggle').on('click', onSignInToggle)
  $('#sign-up-toggle').on('click', onSignUpToggle)
}

// sign up/in button listeners

// $('#sign-up-btn').on('click', function () {
//   $('#sign-up-form').fadeIn('slow')
//   $('#sign-in-form').fadeOut('slow')
//   $('#change-password-form').fadeOut('slow')
//   $('#user-message').show(500)
// })

// $('#sign-in-btn').on('click', function () {
//   $('#sign-in-form').fadeIn('slow')
//   $('#sign-up-form').fadeOut('slow')
//   $('#change-password-form').fadeOut('slow')
//   $('#user-message').show(500)
// })

$('#change-password-btn').on('click', function () {
  $('#change-password-form').fadeIn('slow')
  // $('#sign-up-form').fadeOut('slow')
  // $('#sign-in-form').fadeOut('slow')
  $('#user-message').show(500)
})

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  authHandler
}
