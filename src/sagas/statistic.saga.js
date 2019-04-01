import { put, takeEvery } from 'redux-saga/effects'
import { statisticActionTypes } from '../action-types'
import StatisticService from '../services/statistic.service';

const entity = 'statistic'

function* index () {
  try {
    const data = yield StatisticService.index(entity)
    yield put({type: statisticActionTypes.GET_STATISTIC_SUCCESS, data, loading: false, error: null})
  } catch (error) {
    yield put({type: statisticActionTypes.GET_STATISTIC_FAILURE, error, loading: false})
  }
}

function* statisticSaga() {
  yield takeEvery(statisticActionTypes.GET_STATISTIC_REQUEST, index)
}

export default statisticSaga


