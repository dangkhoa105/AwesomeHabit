import { all } from 'redux-saga/effects'
import { watchLogin } from './Authentication/LoginSaga'
import { watchGetCategories } from './Category/GetCategoriesSaga'
import { watchCreateCategory } from './Category/CreateCategorySaga'
import { watchGetHabits } from './Habit/GetHabitsSaga'
import { watchCreateHabit } from './Habit/CreateHabitSaga'

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchGetCategories(),
    watchCreateCategory(),
    watchGetHabits(),
    watchCreateHabit(),
  ])
}
