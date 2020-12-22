import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from '../../actions/types'

const initState = {
  fetching: null,
  message: null,
  data: null,
}

export const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { fetching: true, message: null, data: null })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    case LOGIN_FAIL:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    default:
      return state
  }
}
