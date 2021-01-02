import { all } from 'redux-saga/effects'
import { watchLogin } from './Authentication/LoginSaga'
import { watchGetCategories } from './Category/GetCategoriesSaga'
import { watchGetHabits } from './Habit/GetHabitsSaga'

export default function* rootSaga() {
  yield all([watchLogin(), watchGetCategories(), watchGetHabits()])
}
