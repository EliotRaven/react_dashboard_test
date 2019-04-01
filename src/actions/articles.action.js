import {articlesActionTypes} from "../action-types";
import baseAction from './base.action'

export const articlesAction = {
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
    type: articlesActionTypes.GET_ARTICLES_REQUEST,
    query
  }
}

function list (query) {
  return {
    ...baseAction,
    type: articlesActionTypes.GET_ARTICLES_LIST_REQUEST,
    query
  }
}

function show (id) {
  return {
    ...baseAction,
    type: articlesActionTypes.GET_ARTICLE_REQUEST,
    id
  }
}

function create (data) {
  return {
    ...baseAction,
    type: articlesActionTypes.CREATE_ARTICLE_REQUEST,
    data
  }
}

function update (data, id) {
  return {
    ...baseAction,
    type: articlesActionTypes.UPDATE_ARTICLE_REQUEST,
    data,
    id
  }
}

function remove (id) {
  return {
    ...baseAction,
    type: articlesActionTypes.DELETE_ARTICLE_REQUEST,
    id
  }
}

