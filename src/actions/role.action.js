import {roleActionTypes} from '../action-types';
import baseAction from './base.action'

export const roleAction = {
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
    type: roleActionTypes.GET_ROLES_REQUEST,
    query,
  }
}

function list (query) {
  return {
    ...baseAction,
    type: roleActionTypes.GET_ROLE_LIST_REQUEST,
    query,
  }
}

function show (id) {
  return {
    ...baseAction,
    type: roleActionTypes.GET_ROLE_REQUEST,
    id
  }
}

function create (data) {
  return {
    ...baseAction,
    type: roleActionTypes.CREATE_ROLE_REQUEST,
    data
  }
}

function update (data, id) {
  return {
    ...baseAction,
    type: roleActionTypes.UPDATE_ROLE_REQUEST,
    data,
    id
  }
}

function remove (id) {
  return {
    ...baseAction,
    type: roleActionTypes.DELETE_ROLE_REQUEST,
    id
  }
}

