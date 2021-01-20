import {
  UPDATE_CHECKINS_HABIT,
  UPDATE_CHECKINS_HABIT_SUCCESS,
  UPDATE_CHECKINS_HABIT_FAIL,
} from '../../../actions/types'
import { call, takeEvery, put } from 'redux-saga/effects'
import { updateCheckinsHabit } from '../../api/Habit/UpdateCheckinsHabit'

function* updateCheckinsHabitFlow(action) {
  try {
    const response = yield updateCheckinsHabit(action.id, action.data)
    if (response !== undefined) {
      yield put({
        type: UPDATE_CHECKINS_HABIT_SUCCESS,
        message: response.message,
        data: response,
      })
    } else {
      yield put({
        type: UPDATE_CHECKINS_HABIT_FAIL,
        message: response.message,
        data: null,
      })
    }
  } catch (error) {
    yield put({
      type: UPDATE_CHECKINS_HABIT_FAIL,
      message: 'Không thể kết nối tới hệ thống',
      data: 'Update habit fail',
    })
  }
}

export function* watchUpdateCheckinsHabit() {
  yield takeEvery(UPDATE_CHECKINS_HABIT, updateCheckinsHabitFlow)
}
