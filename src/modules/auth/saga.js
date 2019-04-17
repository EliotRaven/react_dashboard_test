import { put, takeEvery } from 'redux-saga/effects';
import { authActionTypes } from './types';
import { authService } from './service';

function* login (action) {
  try {
    const data = yield authService.signin(action.formdata);
    yield put({
      type: authActionTypes.GET_LOGIN_SUCCESS,
      data,
      loading: false,
      error: {},
    });
  } catch (error) {
    yield put({
      type: authActionTypes.GET_LOGIN_FAILURE,
      error: error || {data: {message: 'Something went wrong!'}},
      loading: false,
    });
  }
}

function* logout () {
  try {
    const isAuth = yield authService.logout();
    const authUser = yield authService.getAuthUser();
    yield put({
      type: authActionTypes.GET_LOGOUT_SUCCESS,
      isAuth,
      authUser,
      loading: false,
      error: {},
    });
  } catch (error) {
    yield put({
      type: authActionTypes.GET_LOGOUT_FAILURE,
      error,
      loading: false,
    });
  }
}

export const authSaga = function* () {
  yield takeEvery(authActionTypes.GET_LOGIN_REQUEST, login);
  yield takeEvery(authActionTypes.GET_LOGOUT_REQUEST, logout);
};
