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

function* logout () {
  try {
    const isAuth = yield authService.logout()
    const authUser = yield authService.getAuthUser()
    yield put({type: authActionTypes.GET_LOGOUT_SUCCESS, isAuth, authUser, loading: false, error: {}})
  } catch (error) {
    yield put({type: authActionTypes.GET_LOGOUT_FAILURE, error, loading: false})
  }
}

function* authSaga() {
    yield takeEvery(authActionTypes.GET_LOGIN_REQUEST, login)
    yield takeEvery(authActionTypes.GET_LOGOUT_REQUEST, logout)
}

export default authSaga

