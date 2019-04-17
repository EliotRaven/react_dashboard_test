import { userActionTypes } from './types';
import baseAction from '../../actions/base.action';

const index = query => ({
  ...baseAction,
  type: userActionTypes.GET_USERS_REQUEST,
  query
});

const list = query => ({
  ...baseAction,
  type: userActionTypes.GET_USER_LIST_REQUEST,
  query
});

const show = id => ({
  ...baseAction,
  type: userActionTypes.GET_USER_REQUEST,
  id
});

const create = data => ({
  ...baseAction,
  type: userActionTypes.CREATE_USER_REQUEST,
  data
});

const update = (data, id) => ({
  ...baseAction,
  type: userActionTypes.UPDATE_USER_REQUEST,
  data,
  id
});

const remove = id => ({
  ...baseAction,
  type: userActionTypes.DELETE_USER_REQUEST,
  id
});

export const userAction = {
  index,
  show,
  create,
  update,
  remove,
  list,
};
