// Note: for dev run with NODE_ENV=development nodemon server/bootstrap.js
require('ignore-styles')
require('babel-register')({
  ignore: [ /(node_modules)/ ],
  presets: ['es2015', 'react-app']
})
require('./index')
