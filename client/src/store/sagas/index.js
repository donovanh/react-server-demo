import { all } from 'redux-saga/effects'
import app from './app'

export default function * sagas () {
  yield all([
    ...app
  ])
}

export * from './app'
