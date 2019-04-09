import { articlesActionTypes } from "./types";
import baseAction from '../../actions/base.action'

const index = query => ({
  ...baseAction,
  type: articlesActionTypes.GET_ARTICLES_REQUEST,
  query
});

const list = query => ({
  ...baseAction,
  type: articlesActionTypes.GET_ARTICLES_LIST_REQUEST,
  query
});

const show = id => ({
  ...baseAction,
  type: articlesActionTypes.GET_ARTICLE_REQUEST,
  id
});

const create = data => ({
  ...baseAction,
  type: articlesActionTypes.CREATE_ARTICLE_REQUEST,
  data
});

const update = (data, id) => ({
  ...baseAction,
  type: articlesActionTypes.UPDATE_ARTICLE_REQUEST,
  data,
  id
});

const remove = id => ({
  ...baseAction,
  type: articlesActionTypes.DELETE_ARTICLE_REQUEST,
  id
});

export const articlesAction = {
  index,
  show,
  create,
  update,
  remove,
  list
};
