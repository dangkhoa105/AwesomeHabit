import { all } from 'redux-saga/effects'
import { watchLogin } from './Authentication/LoginSaga'

export default function* rootSaga() {
  yield
  all([watchLogin()])
}
