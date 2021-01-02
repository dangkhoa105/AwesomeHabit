import { GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL } from '../../../actions/types'
import { call, takeEvery, put } from 'redux-saga/effects'
import { getCategories } from '../../api/Category/GetCategories'

function* getCategoriesFlow() {
  try {
    const response = yield getCategories()
    if (response !== undefined) {
      yield put({
        type: GET_CATEGORIES_SUCCESS,
        message: 'Lấy dữ liệu thành công',
        data: response,
      })
    } else {
      yield put({
        type: GET_CATEGORIES_FAIL,
        message: 'Không thể kết nối tới hệ thống',
        data: null,
      })
    }
  } catch (error) {
    yield put({
      type: GET_CATEGORIES_FAIL,
      message: 'Không thể kết nối tới hệ thống',
      data: 'Get categories fail',
    })
  }
}

export function* watchGetCategories() {
  yield takeEvery(GET_CATEGORIES, getCategoriesFlow)
}
