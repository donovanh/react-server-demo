import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider as ReduxProvider } from 'react-redux'

// import our main App component
import App from '../../client/src/App'
const path = require('path')
const fs = require('fs')

export default (store) => (req, res, next) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'client', 'build', 'index.html')
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err)
      return res.status(404).end()
    }
    // render the app as a string
    const html = ReactDOMServer.renderToString(
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    )
    const reduxState = JSON.stringify(store.getState())
    // inject the rendered app into our html and send it
    const output = htmlData
      .replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      )
      .replace('"__SERVER_REDUX_STATE__"', reduxState)
    return res.send(output)
  })
}
