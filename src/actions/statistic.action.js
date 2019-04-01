import {statisticActionTypes} from '../action-types';

export const statisticAction = {
  index
}

function index () {
  return {
    type: statisticActionTypes.GET_STATISTIC_REQUEST,
    loading: true,
    error: {},
  }
}


