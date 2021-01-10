import { UPDATE_HABIT, UPDATE_HABIT_SUCCESS, UPDATE_HABIT_FAIL } from '../../actions/types'

const initState = {
  fetching: null,
  message: null,
  data: null,
}

export const updateHabitReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_HABIT:
      return Object.assign({}, state, { fetching: true, message: null, data: null })
    case UPDATE_HABIT_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    case UPDATE_HABIT_FAIL:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    default:
      return state
  }
}
