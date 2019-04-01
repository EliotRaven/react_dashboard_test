import { statisticActionTypes } from '../action-types';

const initialState = {
  loading: false,
  error: {},
  data: {},
}

const statistic = (state, action) => {
  state = state ? state : initialState

  switch(action.type){
    //-----------------GET_STATISTIC----------------------
    case statisticActionTypes.GET_STATISTIC_REQUEST:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
    case statisticActionTypes.GET_STATISTIC_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: action.loading,
        error: {message: action.error}
      }
    case statisticActionTypes.GET_STATISTIC_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: {message: action.error},
      }

    default:
      return state
  }
}

export default statistic

