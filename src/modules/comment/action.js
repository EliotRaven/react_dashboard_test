import { commentActionTypes } from './types';
import baseAction from '../../actions/base.action';

const index = query => ({
  ...baseAction,
  type: commentActionTypes.GET_COMMENTS_REQUEST,
  query,
});

const list = query => ({
  ...baseAction,
  type: commentActionTypes.GET_COMMENT_LIST_REQUEST,
  query,
});

const show = id => ({
  ...baseAction,
  type: commentActionTypes.GET_COMMENT_REQUEST,
  id,
});

const create = data => ({
  ...baseAction,
  type: commentActionTypes.CREATE_COMMENT_REQUEST,
  data,
});

const update = (data, id) => ({
  ...baseAction,
  type: commentActionTypes.UPDATE_COMMENT_REQUEST,
  data,
  id,
});

const remove = id => ({
  ...baseAction,
  type: commentActionTypes.DELETE_COMMENT_REQUEST,
  id,
});

export const commentAction = {
  index,
  list,
  show,
  create,
  update,
  remove,
};
