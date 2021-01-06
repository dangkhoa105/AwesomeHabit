import { CREATE_HABIT, CREATE_HABIT_SUCCESS, CREATE_HABIT_FAIL } from '../../actions/types'

const initState = {
  fetching: null,
  message: null,
  data: null,
}

export const createHabitReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_HABIT:
      return Object.assign({}, state, { fetching: true, message: null, data: null })
    case CREATE_HABIT_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    case CREATE_HABIT_FAIL:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    default:
      return state
  }
}
