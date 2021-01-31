import {
  GET_RECOMMENDATIONS,
  GET_RECOMMENDATIONS_SUCCESS,
  GET_RECOMMENDATIONS_FAIL,
} from '../../actions/types'

const initState = {
  fetching: null,
  message: null,
  data: null,
}

export const getRecommendationsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_RECOMMENDATIONS:
      return Object.assign({}, state, { fetching: true, message: null, data: null })
    case GET_RECOMMENDATIONS_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    case GET_RECOMMENDATIONS_FAIL:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      })
    default:
      return state
  }
}
