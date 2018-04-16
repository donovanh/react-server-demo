import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import Loadable from 'react-loadable'
import { Provider } from 'react-redux'
import { configureStore, sagas, sagaMiddleware } from './store'

if (typeof window !== 'undefined') {
  const store = configureStore(window.REDUX_STATE || {})

  sagaMiddleware.run(sagas)

  const AppBundle = (
    <Provider store={store}>
      <App />
    </Provider>
  )

  window.onload = () => {
    Loadable.preloadReady().then(() => {
      ReactDOM.hydrate(
        AppBundle,
        document.getElementById('root')
      )
    })
  }

  // TODO: Implement service worker for PWA
  // import('./registerServiceWorker')
  //   .then(({ default: register }) => register())
}

export { App }
export * from './store'
