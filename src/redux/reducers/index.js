import { combineReducers } from 'redux'
import { loginReducer } from './Authentication/LoginReducer'
import { getCategoriesReducer } from './Category/GetCategoriesReducer'
import { createCategoryReducer } from './Category/CreateCategoryReducer'
import { getHabitsReducer } from './Habit/GetHabitsReducer'
import { createHabitReducer } from './Habit/CreateHabitReducer'
import { updateHabitReducer } from './Habit/UpdateHabitReducer'
import { deleteHabitReducer } from './Habit/DeleteHabitReducer'

export default combineReducers({
  loginReducer,
  getCategoriesReducer,
  createCategoryReducer,
  getHabitsReducer,
  createHabitReducer,
  updateHabitReducer,
  deleteHabitReducer,
})
