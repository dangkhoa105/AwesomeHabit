import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAIL,
} from '../../../actions/types'
import { call, takeEvery, put } from 'redux-saga/effects'
import { createCategory } from '../../api/Category/CreateCategory'

function* createCategoryFlow(action) {
  try {
    const response = yield createCategory(action.data)
    if (response !== undefined) {
      yield put({
        type: CREATE_CATEGORY_SUCCESS,
        message: response.message,
        data: response,
      })
    } else {
      yield put({
        type: CREATE_CATEGORY_FAIL,
        message: response.message,
        data: null,
      })
    }
  } catch (error) {
    yield put({
      type: CREATE_CATEGORY_FAIL,
      message: 'Không thể kết nối tới hệ thống',
      data: 'Create category fail',
    })
  }
}

export function* watchCreateCategory() {
  yield takeEvery(CREATE_CATEGORY, createCategoryFlow)
}
