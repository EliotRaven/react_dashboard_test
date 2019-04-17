import { authActionTypes } from './types';

const checkAuth = () => ({
  type: authActionTypes.CHECK_AUTH_REQUEST,
});

const login = formdata => ({
  type: authActionTypes.GET_LOGIN_REQUEST,
  loading: true,
  error: {},
  formdata,
});

const logout = () => ({
  type: authActionTypes.GET_LOGOUT_REQUEST,
  loading: false,
  error: {},
});

export const authAction = {
  checkAuth,
  login,
  logout,
};
