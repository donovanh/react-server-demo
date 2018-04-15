import {
  createStore,
  compose,
  applyMiddleware
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'

export const sagaMiddleware = createSagaMiddleware()

const createStoreWithMiddleware = compose(applyMiddleware(
  sagaMiddleware
))(createStore)

export const configureStore = (initialState = {}) => {
  return createStoreWithMiddleware(reducers, initialState)
}

export { default as sagas } from './sagas'
