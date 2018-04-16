import { fork } from 'redux-saga/effects'

export default (sagas) => function * () {
  yield sagas.map(([saga, ...params]) => fork(saga, ...params))
}
