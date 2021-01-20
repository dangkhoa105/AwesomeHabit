import {
  UPDATE_CHECKINS_HABIT,
  UPDATE_CHECKINS_HABIT_SUCCESS,
  UPDATE_CHECKINS_HABIT_FAIL,
} from '../../actions/types'

const initState = {
  fetching: null,
  message: null,
  data: null,
}

export const updateCheckinsHabitReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_CHECKINS_HABIT:
      return Object.assign({}, state, { fetching: true, message: null, data: null })
    case UPDATE_CHECKINS_HABIT_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    case UPDATE_CHECKINS_HABIT_FAIL:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    default:
      return state
  }
}
