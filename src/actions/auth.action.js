import {authActionTypes} from "../action-types";

export const authAction = {
  checkAuth,
  login,
  logout
}

function checkAuth () {
  return {type: authActionTypes.CHECK_AUTH_REQUEST}
}

function login (formdata) {
  return {
    type: authActionTypes.GET_LOGIN_REQUEST,
    loading: true,
    error: {},
    formdata
  }
}

function logout() {
  return {
    type: authActionTypes.GET_LOGOUT_REQUEST,
    loading: false,
    error: {}
  }
}
