import { put, takeEvery } from 'redux-saga/effects';
import { roleActionTypes } from './types';
import { history } from '../../helpers/index';
import RoleService from './service';

const entity = 'role';

function* index (action) {
  try {
    const data = yield RoleService.index(entity, action.query);
    yield put({
      type: roleActionTypes.GET_ROLES_SUCCESS,
      data,
      loading: false,
      error: null,
    });
  } catch (error) {
    yield put({
      type: roleActionTypes.GET_ROLES_FAILURE,
      error,
      loading: false,
    });
  }
}

function* list (action) {
  try {
    const data = yield RoleService.index(entity, action.query);
    yield put({
      type: roleActionTypes.GET_ROLE_LIST_SUCCESS,
      data,
      loading: false,
      error: null,
    });
  } catch (error) {
    yield put({
      type: roleActionTypes.GET_ROLE_LIST_FAILURE,
      error,
      loading: false,
    });
  }
}

function* show (action) {
  try {
    const data = yield RoleService.show(entity, action.id);
    yield put({
      type: roleActionTypes.GET_ROLE_SUCCESS,
      data,
      loading: false,
      error: null,
    });
  } catch (error) {
    yield put({
      type: roleActionTypes.GET_ROLE_FAILURE,
      error,
      loading: false,
    });
  }
}

function* create (action) {
  try {
    const data = yield RoleService.create(entity, action.data);
    yield put({
      type: roleActionTypes.CREATE_ROLE_SUCCESS,
      data,
      loading: false,
      error: null,
    });
    history.push('/roles');
  } catch (error) {
    yield put({
      type: roleActionTypes.CREATE_ROLE_FAILURE,
      error,
      loading: false,
    });
  }
}

function* update (action) {
  try {
    const data = yield RoleService.update(entity, action.id, action.data);
    yield put({
      type: roleActionTypes.UPDATE_ROLE_SUCCESS,
      data,
      loading: false,
      error: null,
    });
    history.push('/roles');
  } catch (error) {
    yield put({
      type: roleActionTypes.UPDATE_ROLE_FAILURE,
      error,
      loading: false,
    });
  }
}

function* remove (action) {
  try {
    const data = yield RoleService.remove(entity, action.id);
    yield put({
      type: roleActionTypes.DELETE_ROLE_SUCCESS,
      data,
      loading: false,
      error: null,
    });
    history.push('/roles');
  } catch (error) {
    yield put({
      type: roleActionTypes.DELETE_ROLE_FAILURE,
      error,
      loading: false,
    });
  }
}

export const roleSaga = function*() {
  yield takeEvery(roleActionTypes.GET_ROLES_REQUEST, index);
  yield takeEvery(roleActionTypes.GET_ROLE_LIST_REQUEST, list);
  yield takeEvery(roleActionTypes.GET_ROLE_REQUEST, show);
  yield takeEvery(roleActionTypes.CREATE_ROLE_REQUEST, create);
  yield takeEvery(roleActionTypes.UPDATE_ROLE_REQUEST, update);
  yield takeEvery(roleActionTypes.DELETE_ROLE_REQUEST, remove);
};
