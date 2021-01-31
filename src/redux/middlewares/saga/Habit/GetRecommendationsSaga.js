import {
  GET_RECOMMENDATIONS,
  GET_RECOMMENDATIONS_SUCCESS,
  GET_RECOMMENDATIONS_FAIL,
} from '../../../actions/types'
import { call, takeEvery, put } from 'redux-saga/effects'
import { getRecommendations } from '../../api/Habit/GetRecommendations'

function* getRecommendationsFlow(action) {
  try {
    const response = yield getRecommendations()
    if (response !== undefined) {
      yield put({
        type: GET_RECOMMENDATIONS_SUCCESS,
        message: 'Lấy dữ liệu thành công',
        data: response,
      })
    } else {
      yield put({
        type: GET_RECOMMENDATIONS_FAIL,
        message: 'Không thể kết nối tới hệ thống',
        data: null,
      })
    }
  } catch (error) {
    yield put({
      type: GET_RECOMMENDATIONS_FAIL,
      message: 'Không thể kết nối tới hệ thống',
      data: 'Get recommendations habit fail',
    })
  }
}

export function* watchGetRecommendations() {
  yield takeEvery(GET_RECOMMENDATIONS, getRecommendationsFlow)
}
