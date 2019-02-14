import { put, takeEvery } from 'redux-saga/effects'
import { serviceActionTypes } from '../action-types'
import { servicesService } from "../services";

function* fetchServices (action) {
    try {
        const data = yield servicesService.index()
        yield put({type: serviceActionTypes.GET_SERVICE_SUCCESS, data, loading: false, error: {}})
    } catch (error) {
        yield put({type: serviceActionTypes.GET_SERVICE_FAILURE, error, loading: false})
    }
}

function* serviceSaga() {
    yield takeEvery(serviceActionTypes.GET_SERVICE_REQUEST, fetchServices)
}

export default serviceSaga

