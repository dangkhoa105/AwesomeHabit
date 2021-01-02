import { combineReducers } from 'redux'
import { loginReducer } from './Authentication/LoginReducer'
import { getCategoriesReducer } from './Category/GetCategoriesReducer'
import { getHabitsReducer } from './Habit/GetHabitsReducer'

export default combineReducers({ loginReducer, getCategoriesReducer, getHabitsReducer })
