import { put, takeEvery } from 'redux-saga/effects'
import { history } from '../../helpers/index'
import { userActionTypes } from './types'
import UserService from './service';

const entity = 'user';

function* index (action) {
  try {
    const data = yield UserService.index(action.query);
    yield put({
      type: userActionTypes.GET_USERS_SUCCESS,
      data,
      loading: false,
      error: null,
    });
  } catch (error) {
    yield put({
      type: userActionTypes.GET_USERS_FAILURE,
      error,
      loading: false,
    });
  }
}

function* list (action) {
  try {
    const data = yield UserService.index(action.query);
    yield put({
      type: userActionTypes.GET_USER_LIST_SUCCESS,
      data,
      loading: false,
      error: null,
    });
  } catch (error) {
    yield put({
      type: userActionTypes.GET_USER_LIST_FAILURE,
      error,
      loading: false,
    });
  }
}

function* show (action) {
  try {
    const data = yield UserService.show(entity, action.id);
    yield put({
      type: userActionTypes.GET_USER_SUCCESS,
      data,
      loading: false,
      error: null,
    });
  } catch (error) {
    yield put({
      type: userActionTypes.GET_USER_FAILURE,
      error,
      loading: false,
    });
  }
}

function* create (action) {
  try {
    const data = yield UserService.create(entity, action.data);
    yield put({
      type: userActionTypes.CREATE_USER_SUCCESS,
      data,
      loading: false,
      error: null,
    });
    history.push('/users');
  } catch (error) {
    yield put({
      type: userActionTypes.CREATE_USER_FAILURE,
      error,
      loading: false,
    });
  }
}

function* update (action) {
  try {
    const data = yield UserService.update(entity, action.id, action.data);
    yield put({
      type: userActionTypes.UPDATE_USER_SUCCESS,
      data,
      loading: false,
      error: null,
    });
    history.push('/users');
  } catch (error) {
    yield put({
      type: userActionTypes.UPDATE_USER_FAILURE,
      error,
      loading: false,
    });
  }
}

function* remove (action) {
  try {
    const data = yield UserService.remove(entity, action.id);
    yield put({
      type: userActionTypes.DELETE_USER_SUCCESS,
      data,
      loading: false,
      error: null,
    });
    history.push('/users')
  } catch (error) {
    yield put({
      type: userActionTypes.DELETE_USER_FAILURE,
      error,
      loading: false,
    });
  }
}

export const userSaga = function*() {
  yield takeEvery(userActionTypes.GET_USERS_REQUEST, index);
  yield takeEvery(userActionTypes.GET_USER_LIST_REQUEST, list);
  yield takeEvery(userActionTypes.GET_USER_REQUEST, show);
  yield takeEvery(userActionTypes.CREATE_USER_REQUEST, create);
  yield takeEvery(userActionTypes.UPDATE_USER_REQUEST, update);
  yield takeEvery(userActionTypes.DELETE_USER_REQUEST, remove);
};
