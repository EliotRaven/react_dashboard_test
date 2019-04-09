import { statisticActionTypes } from './types';

const initialState = {
  loading: false,
  error: {},
  data: {},
};

export const statistic = (state = initialState, action) => {
  switch(action.type){
    //-----------------GET_STATISTIC----------------------
    case statisticActionTypes.GET_STATISTIC_REQUEST:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case statisticActionTypes.GET_STATISTIC_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: action.loading,
        error: {message: action.error},
      };
    case statisticActionTypes.GET_STATISTIC_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: {message: action.error},
      };

    default:
      return state;
  }
};
