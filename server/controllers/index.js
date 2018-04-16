const express = require('express')

const serverRenderer = require('../middleware/renderer')

const router = express.Router()
const path = require('path')

// root (/) should always serve our server rendered page
router.use('^/$', serverRenderer)

// other static resources should just be served as they are
router.use(express.static(
  path.resolve(__dirname, '..', '..', 'client', 'build'),
  { maxAge: '30d' }
))

module.exports = router
