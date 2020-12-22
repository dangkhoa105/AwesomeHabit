import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from '../../../actions/types'
import { call, takeEvery, put } from 'redux-saga/effects'
import { login } from '../../api/Authentication/Login'

function* LoginFlow(action) {
  try {
    const response = yield login(action.email, action.password)
    if (response !== undefined) {
      yield put({
        type: LOGIN_SUCCESS,
        message: 'Lấy dữ liệu thành công',
        data: response,
      })
    } else {
      yield put({
        type: LOGIN_FAIL,
        message: 'Không thể kết nối tới hệ thống',
        data: null,
      })
    }
  } catch (error) {
    yield put({
      type: LOGIN_FAIL,
      message: 'Không thể kết nối tới hệ thống',
      data: 'Login fail',
    })
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN, LoginFlow)
}
