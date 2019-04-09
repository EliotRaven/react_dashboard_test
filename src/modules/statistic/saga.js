import { put, takeEvery } from 'redux-saga/effects'
import { statisticActionTypes } from './types'
import StatisticService from './service';

const entity = 'statistic';

function* index () {
  try {
    const data = yield StatisticService.index(entity);
    yield put({
      type: statisticActionTypes.GET_STATISTIC_SUCCESS,
      data,
      loading: false,
      error: null,
    });
  } catch (error) {
    yield put({
      type: statisticActionTypes.GET_STATISTIC_FAILURE,
      error,
      loading: false,
    });
  }
}

export const statisticSaga = function* () {
  yield takeEvery(statisticActionTypes.GET_STATISTIC_REQUEST, index);
}
