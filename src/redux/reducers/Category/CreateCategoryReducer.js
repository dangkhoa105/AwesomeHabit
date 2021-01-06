import { CREATE_CATEGORY, CREATE_CATEGORY_SUCCESS, CREATE_CATEGORY_FAIL } from '../../actions/types'

const initState = {
  fetching: null,
  message: null,
  data: null,
}

export const createCategoryReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return Object.assign({}, state, { fetching: true, message: null, data: null })
    case CREATE_CATEGORY_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    case CREATE_CATEGORY_FAIL:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    default:
      return state
  }
}
