import { all } from 'redux-saga/effects'
import { watchLogin } from './Authentication/LoginSaga'

import { watchGetCategories } from './Category/GetCategoriesSaga'
import { watchCreateCategory } from './Category/CreateCategorySaga'
import { watchDeleteCategory } from './Category/DeleteCategorySaga'

import { watchGetHabits } from './Habit/GetHabitsSaga'
import { watchCreateHabit } from './Habit/CreateHabitSaga'
import { watchUpdateHabit } from './Habit/UpdateHabitSaga'
import { watchDeleteHabit } from './Habit/DeleteHabitSaga'

export default function* rootSaga() {
  yield all([
    watchLogin(),

    watchGetCategories(),
    watchCreateCategory(),
    watchDeleteCategory(),

    watchGetHabits(),
    watchCreateHabit(),
    watchUpdateHabit(),
    watchDeleteHabit(),
  ])
}
