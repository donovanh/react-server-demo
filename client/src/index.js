import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'

import Loadable from 'react-loadable'
import { Provider as ReduxProvider } from 'react-redux'
import { configureStore } from './store'

import ThemeProvider from './theme/ThemeProvider'

if (typeof window !== 'undefined') {
  const store = configureStore(window.REDUX_STATE || {})

  const AppBundle = (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ReduxProvider>
  )

  window.onload = () => {
    Loadable.preloadReady().then(() => {
      ReactDOM.hydrate(
        AppBundle,
        document.getElementById('root')
      )
    })
  }

  import('./registerServiceWorker')
    .then(({default: register}) => register())
}

export {App}
export * from './store'
