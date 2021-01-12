import {
  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
} from '../../../actions/types'
import { call, takeEvery, put } from 'redux-saga/effects'
import { deleteCategory } from '../../api/Category/DeleteCategory'

function* deleteCategoryFlow(action) {
  try {
    const response = yield deleteCategory(action.id, action.data)
    if (response !== undefined) {
      yield put({
        type: DELETE_CATEGORY_SUCCESS,
        message: 'Category is delete successfully',
        data: response,
      })
    } else {
      yield put({
        type: DELETE_CATEGORY_FAIL,
        message: response.message,
        data: null,
      })
    }
  } catch (error) {
    yield put({
      type: DELETE_CATEGORY_FAIL,
      message: 'Không thể kết nối tới hệ thống',
      data: 'Delete category fail',
    })
  }
}

export function* watchDeleteCategory() {
  yield takeEvery(DELETE_CATEGORY, deleteCategoryFlow)
}
