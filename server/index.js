const express = require('express')
const indexController = require('./controllers/index')
const serverRenderer = require('./middleware/renderer')
const { configureStore } = require('../client/build/static/js')

const PORT = 8000
const path = require('path')

// initialize the application and create the routes
const app = express()
app.use(indexController)

const router = express.Router()
// root (/) should always serve our server rendered page
const store = configureStore()

router.use('^/$', serverRenderer(store))
// other static resources should just be served as they are
router.use(express.static(
  path.resolve(__dirname, '..', 'client', 'build'),
  { maxAge: '30d' }
))
// tell the app to use the above rules
app.use(router)

// start the app
app.listen(PORT, (error) => {
  if (error) {
    return console.log('something bad happened', error)
  }

  console.log('listening on ' + PORT + '...')
})
