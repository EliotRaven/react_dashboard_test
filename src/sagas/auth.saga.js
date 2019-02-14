import { put, takeEvery } from 'redux-saga/effects'
import { authActionTypes } from '../action-types'
import { authService } from "../services";

function* login (action) {
    try {
        const data = yield authService.signin(action.formdata)
        yield put({type: authActionTypes.GET_LOGIN_SUCCESS, data, loading: false, error: {}})
    } catch (error) {
        yield put({type: authActionTypes.GET_LOGIN_FAILURE, error, loading: false})
    }
}

function* authSaga() {
    yield takeEvery(authActionTypes.GET_LOGIN_REQUEST, login)
}

export default authSaga

