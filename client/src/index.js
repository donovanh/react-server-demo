import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

import Loadable from 'react-loadable'
import { Provider } from 'react-redux'
import { configureStore, sagas, sagaMiddleware } from './store'

import globalStyleRules from './theme/globalStyleRules'

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

export { App, globalStyleRules }
export * from './store'
