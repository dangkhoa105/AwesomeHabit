import { GET_HABITS, GET_HABITS_SUCCESS, GET_HABITS_FAIL } from '../../actions/types'

const initState = {
  fetching: null,
  message: null,
  data: null,
}

export const getHabitsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_HABITS:
      return Object.assign({}, state, { fetching: true, message: null, data: null })
    case GET_HABITS_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    case GET_HABITS_FAIL:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    default:
      return state
  }
}
