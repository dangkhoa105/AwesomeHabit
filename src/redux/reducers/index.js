import { combineReducers } from 'redux'
import { loginReducer } from './Authentication/LoginReducer'

import { getCategoriesReducer } from './Category/GetCategoriesReducer'
import { createCategoryReducer } from './Category/CreateCategoryReducer'
import { deleteCategoryReducer } from './Category/DeleteCategoryReducer'

import { getHabitsReducer } from './Habit/GetHabitsReducer'
import { createHabitReducer } from './Habit/CreateHabitReducer'
import { deleteHabitReducer } from './Habit/DeleteHabitReducer'
import { updateCheckinsHabitReducer } from './Habit/UpdateCheckinsHabitReducer'

export default combineReducers({
  loginReducer,

  getCategoriesReducer,
  createCategoryReducer,
  deleteCategoryReducer,

  getHabitsReducer,
  createHabitReducer,
  deleteHabitReducer,
  updateCheckinsHabitReducer,
})
