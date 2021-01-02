import { GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL } from '../../actions/types'

const initState = {
  fetching: null,
  message: null,
  data: null,
}

export const getCategoriesReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return Object.assign({}, state, { fetching: true, message: null, data: null })
    case GET_CATEGORIES_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    case GET_CATEGORIES_FAIL:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    default:
      return state
  }
}
