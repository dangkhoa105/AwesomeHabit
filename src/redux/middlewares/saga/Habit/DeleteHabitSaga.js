import { DELETE_HABIT, DELETE_HABIT_SUCCESS, DELETE_HABIT_FAIL } from '../../../actions/types'
import { call, takeEvery, put } from 'redux-saga/effects'
import { deleteHabit } from '../../api/Habit/DeleteHabit'

function* deleteHabitFlow(action) {
  try {
    const response = yield deleteHabit(action.id, action.data)
    if (response !== undefined) {
      yield put({
        type: DELETE_HABIT_SUCCESS,
        message: 'Habit is delete successfully',
        data: response,
      })
    } else {
      yield put({
        type: DELETE_HABIT_FAIL,
        message: response.message,
        data: null,
      })
    }
  } catch (error) {
    yield put({
      type: DELETE_HABIT_FAIL,
      message: 'Không thể kết nối tới hệ thống',
      data: 'Delete habit fail',
    })
  }
}

export function* watchDeleteHabit() {
  yield takeEvery(DELETE_HABIT, deleteHabitFlow)
}
