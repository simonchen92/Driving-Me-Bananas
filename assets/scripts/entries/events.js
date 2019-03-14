'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onCreateEntry = (event) => {
  // console.log('on Create Entry is a Success')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // console.log(formData)
  // formData.entry.user_id = store.user.id

  api.createEntry(formData)
    .then(ui.onCreateEntrySuccess)
    .catch(ui.failure)
}

const onGetEntries = (event) => {
  // console.log('on Get Entries Success')
  event.preventDefault()

  api.getEntries({user_id: store.user.id})
    .then(ui.onGetEntriesSuccess)
    .catch(ui.failure)
}

const onUpdateEntry = (event) => {
  // console.log('on Update Entry Success')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // // console.log("formdata")
  // // console.log(formData)

  api.updateEntry(formData)
    .then(ui.onUpdateEntrySuccess)
    .then(() => onGetEntries(event))
    .catch(ui.failure)
}

const onDeleteEntry = (event) => {
  // console.log('on Delete Entry is a success')
  const entryId = $(event.target).closest('section').data('id')
  event.preventDefault()
  api.deleteEntry(entryId)
    .then(() => onGetEntries(event))
    .catch(ui.failure)
}

const onClearEntries = () => {
  // console.log('on Clear Entries is a success!!!')
  event.preventDefault()
  ui.clearEntries()
}

// entries event listeners

const entryHandler = () => {
  $('#create-entry-form').on('submit', onCreateEntry)
  $('#get-entries-form').on('submit', onGetEntries)
  $('#content').on('click', '.delete', onDeleteEntry)
  $('#content').on('submit', '.update-form', onUpdateEntry)
  $('#clear-entries-btn').on('click', onClearEntries)
}

module.exports = {
  onCreateEntry,
  onGetEntries,
  onUpdateEntry,
  onClearEntries,
  entryHandler
}
