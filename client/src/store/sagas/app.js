import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
import {SET_MESSAGE, SET_MESSAGE_FINAL} from '../constants/app'

export function* appSaga(message) {
  // wait for 2 seconds and dispatch the new action
  yield delay(2000)
  yield put({ type: SET_MESSAGE_FINAL, message })
}

export function* appSagaWatcher() {
  yield takeEvery(SET_MESSAGE, function* (action) {
    yield appSaga(action.message)
  })
}

export default [
  appSagaWatcher()
]
