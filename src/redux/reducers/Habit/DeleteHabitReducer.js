import { DELETE_HABIT, DELETE_HABIT_SUCCESS, DELETE_HABIT_FAIL } from '../../actions/types'

const initState = {
  fetching: null,
  message: null,
  data: null,
}

export const deleteHabitReducer = (state = initState, action) => {
  switch (action.type) {
    case DELETE_HABIT:
      return Object.assign({}, state, { fetching: true, message: null, data: null })
    case DELETE_HABIT_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    case DELETE_HABIT_FAIL:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    default:
      return state
  }
}
