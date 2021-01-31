import { all } from 'redux-saga/effects'
import { watchLogin } from './Authentication/LoginSaga'

import { watchGetCategories } from './Category/GetCategoriesSaga'
import { watchCreateCategory } from './Category/CreateCategorySaga'
import { watchDeleteCategory } from './Category/DeleteCategorySaga'

import { watchGetHabits } from './Habit/GetHabitsSaga'
import { watchCreateHabit } from './Habit/CreateHabitSaga'
import { watchDeleteHabit } from './Habit/DeleteHabitSaga'
import { watchUpdateHabit } from './Habit/UpdateHabitSaga'
import { watchUpdateCheckinsHabit } from './Habit/UpdateCheckinsHabitSaga'
import { watchGetRecommendations } from './Habit/GetRecommendationsSaga'

export default function* rootSaga() {
  yield all([
    watchLogin(),

    watchGetCategories(),
    watchCreateCategory(),
    watchDeleteCategory(),

    watchGetHabits(),
    watchCreateHabit(),
    watchDeleteHabit(),
    watchUpdateHabit(),
    watchUpdateCheckinsHabit(),
    watchGetRecommendations(),
  ])
}
