import { GET_HABITS, GET_HABITS_SUCCESS, GET_HABITS_FAIL } from '../../../actions/types'
import { call, takeEvery, put } from 'redux-saga/effects'
import { getHabits } from '../../api/Habit/GetHabits'

function* getHabitsFlow(action) {
  try {
    const response = yield getHabits()
    if (response !== undefined) {
      yield put({
        type: GET_HABITS_SUCCESS,
        message: 'Lấy dữ liệu thành công',
        data: response,
      })
    } else {
      yield put({
        type: GET_HABITS_FAIL,
        message: 'Không thể kết nối tới hệ thống',
        data: null,
      })
    }
  } catch (error) {
    yield put({
      type: GET_HABITS_FAIL,
      message: 'Không thể kết nối tới hệ thống',
      data: 'Get habits fail',
    })
  }
}

export function* watchGetHabits() {
  yield takeEvery(GET_HABITS, getHabitsFlow)
}
