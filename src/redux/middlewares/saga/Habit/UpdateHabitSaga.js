import { UPDATE_HABIT, UPDATE_HABIT_SUCCESS, UPDATE_HABIT_FAIL } from '../../../actions/types'
import { call, takeEvery, put } from 'redux-saga/effects'
import { updateHabit } from '../../api/Habit/UpdateHabit'

function* updateHabitFlow(action) {
  try {
    const response = yield updateHabit(action.id, action.data)
    if (response !== undefined) {
      yield put({
        type: UPDATE_HABIT_SUCCESS,
        message: response.message,
        data: response,
      })
    } else {
      yield put({
        type: UPDATE_HABIT_FAIL,
        message: response.message,
        data: null,
      })
    }
  } catch (error) {
    yield put({
      type: UPDATE_HABIT_FAIL,
      message: 'Không thể kết nối tới hệ thống',
      data: 'Update habit fail',
    })
  }
}

export function* watchUpdateHabit() {
  yield takeEvery(UPDATE_HABIT, updateHabitFlow)
}
