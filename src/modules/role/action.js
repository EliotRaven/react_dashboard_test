import { roleActionTypes } from './types';
import baseAction from '../../actions/base.action';

const index = query => ({
  ...baseAction,
  type: roleActionTypes.GET_ROLES_REQUEST,
  query,
});

const list = query => ({
  ...baseAction,
  type: roleActionTypes.GET_ROLE_LIST_REQUEST,
  query,
});

const show = id => ({
  ...baseAction,
  type: roleActionTypes.GET_ROLE_REQUEST,
  id,
});

const create = data => ({
  ...baseAction,
  type: roleActionTypes.CREATE_ROLE_REQUEST,
  data,
});

const update = (data, id) => ({
  ...baseAction,
  type: roleActionTypes.UPDATE_ROLE_REQUEST,
  data,
  id,
});

const remove = id => ({
  ...baseAction,
  type: roleActionTypes.DELETE_ROLE_REQUEST,
  id,
});

export const roleAction = {
  index,
  show,
  create,
  update,
  remove,
  list
};
