import {commentActionTypes} from '../action-types';
import baseAction from './base.action'

export const commentAction = {
  index,
  list,
  show,
  create,
  update,
  remove
}

function index (query) {
  return {
    ...baseAction,
    type: commentActionTypes.GET_COMMENTS_REQUEST,
    query,
  }
}

function list (query) {
  return {
    ...baseAction,
    type: commentActionTypes.GET_COMMENT_LIST_REQUEST,
    query,
  }
}

function show (id) {
  return {
    ...baseAction,
    type: commentActionTypes.GET_COMMENT_REQUEST,
    id
  }
}

function create (data) {
  return {
    ...baseAction,
    type: commentActionTypes.CREATE_COMMENT_REQUEST,
    data
  }
}

function update (data, id) {
  return {
    ...baseAction,
    type: commentActionTypes.UPDATE_COMMENT_REQUEST,
    data,
    id
  }
}

function remove (id) {
  return {
    ...baseAction,
    type: commentActionTypes.DELETE_COMMENT_REQUEST,
    id
  }
}

