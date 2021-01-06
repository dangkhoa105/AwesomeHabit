import { CREATE_HABIT, CREATE_HABIT_SUCCESS, CREATE_HABIT_FAIL } from '../../../actions/types'
import { call, takeEvery, put } from 'redux-saga/effects'
import { createHabit } from '../../api/Habit/CreateHabit'

function* createHabitFlow(action) {
  try {
    const response = yield createHabit(action.data)
    if (response !== undefined) {
      yield put({
        type: CREATE_HABIT_SUCCESS,
        message: response.message,
        data: response,
      })
    } else {
      yield put({
        type: CREATE_HABIT_FAIL,
        message: response.message,
        data: null,
      })
    }
  } catch (error) {
    yield put({
      type: CREATE_HABIT_FAIL,
      message: 'Không thể kết nối tới hệ thống',
      data: 'Create habit fail',
    })
  }
}

export function* watchCreateHabit() {
  yield takeEvery(CREATE_HABIT, createHabitFlow)
}
