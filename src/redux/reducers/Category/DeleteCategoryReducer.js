import { DELETE_CATEGORY, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAIL } from '../../actions/types'

const initState = {
  fetching: null,
  message: null,
  data: null,
}

export const deleteCategoryReducer = (state = initState, action) => {
  switch (action.type) {
    case DELETE_CATEGORY:
      return Object.assign({}, state, { fetching: true, message: null, data: null })
    case DELETE_CATEGORY_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    case DELETE_CATEGORY_FAIL:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    default:
      return state
  }
}
