const { createElement } = require('react')
const ReactDOMServer = require('react-dom/server')
const { Provider } = require('react-redux')

// const our main App component
const { App } = require('../../client/build/static/js')
const path = require('path')
const fs = require('fs')

module.exports = (store) => (req, res, next) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'client', 'build', 'index.html')
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err)
      return res.status(404).end()
    }
    // render the app as a string
    const html = ReactDOMServer.renderToString(
      createElement(Provider, {store}, createElement(App)),
    )
    const reduxState = JSON.stringify(store.getState())
    // inject the rendered app into our html and send it
    const output = htmlData
      .replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      )
      .replace(/window.REDUX_STATE\s*=[^\n]+/, reduxState)
    return res.send(output)
  })
}
