const { createElement } = require('react')
const ReactDOMServer = require('react-dom/server')
const { Provider } = require('react-redux')

// const our main App component
const { App } = require('../../client/build/static/js')

const path = require('path')
const fs = require('fs')
const { configureStore, sagaMiddleware, appSaga, waitAll } = require('../../client/build/static/js')

module.exports = (req, res, next) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'client', 'build', 'index.html')
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err)
      return res.status(404).end()
    }

    const store = configureStore()

    const element = createElement(Provider, { store }, createElement(App))

    // using this as a template, first element is a saga, other elements are arguments
    const sagas = [
      [ appSaga, 'Hi, I\'m from server!']
    ]
    const sagaTask = sagaMiddleware.run(waitAll(sagas))

    sagaTask
      .done
      .then(() => {
        // render the app as a string
        const html = ReactDOMServer.renderToString(
          element
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
      .catch(e => console.log(e))
  })
}
