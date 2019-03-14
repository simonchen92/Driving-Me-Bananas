'use strict'
const config = require('../config.js')
const store = require('../store.js')

const createEntry = (formData) => {
  // // console.log('createGame was successful')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/entries',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(formData)
  })
}

const getEntries = (formData) => {
  // // console.log('getGames was succesful')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/entries',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(formData)
  })
}

const updateEntry = (formData) => {
  // console.log('update Entry AJAX request was succesful')
  const entry = formData.entry
  // // console.log("entry")
  // // console.log(entry)
  const id = formData.entry.id
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/entries/${id}`,
    headers: { Authorization: `Token token=${store.user.token}` },
    data: {
      'entry': {
        'title': entry.title,
        'description': entry.description
      }
    }
  })
}

const deleteEntry = (id) => {
  // // console.log('getGames was succesful')
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/entries/${id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json'
  })
}

module.exports = {
  createEntry,
  getEntries,
  updateEntry,
  deleteEntry
}
