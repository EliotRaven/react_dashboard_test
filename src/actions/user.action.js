import {userActionTypes} from '../action-types';
import baseAction from './base.action'

export const userAction = {
  index,
  show,
  create,
  update,
  remove,
  list
}

function index (query) {
  return {
    ...baseAction,
    type: userActionTypes.GET_USERS_REQUEST,
    query
  }
}

function list (query) {
  return {
    ...baseAction,
    type: userActionTypes.GET_USER_LIST_REQUEST,
    query
  }
}

function show (id) {
  return {
    ...baseAction,
    type: userActionTypes.GET_USER_REQUEST,
    id
  }
}

function create (data) {
  return {
    ...baseAction,
    type: userActionTypes.CREATE_USER_REQUEST,
    data
  }
}

function update (data, id) {
  return {
    ...baseAction,
    type: userActionTypes.UPDATE_USER_REQUEST,
    data,
    id
  }
}

function remove (id) {
  return {
    ...baseAction,
    type: userActionTypes.DELETE_USER_REQUEST,
    id
  }
}

