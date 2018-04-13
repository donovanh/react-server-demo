const express = require('express')

const serverRenderer = require('../middleware/renderer')
const { configureStore, setMessage } = require('../../client/build/static/js')

const router = express.Router()
const path = require('path')

const actionIndex = (req, res, next) => {
  const store = configureStore()
  store.dispatch(setMessage("Hi, I'm from server!"))
  serverRenderer(store)(req, res, next)
}

// root (/) should always serve our server rendered page
router.use('^/$', actionIndex)

// other static resources should just be served as they are
router.use(express.static(
  path.resolve(__dirname, '..', '..', 'client', 'build'),
  { maxAge: '30d' }
))

module.exports = router
