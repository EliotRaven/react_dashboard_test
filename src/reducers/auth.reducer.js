import { authActionTypes } from "../action-types";
import { authService } from "../services";

const initialState = {
    loading: false,
    error: {},
    isAuth: false,
    authUser: {}
}

const auth = (state, action) => {
  state = state ? state : initialState

  switch(action.type){
    case authActionTypes.CHECK_AUTH_REQUEST:
      return {
        ...state,
        isAuth: authService.checkAuth(),
        authUser: authService.getAuthUser() || null
      }
    case authActionTypes.GET_LOGIN_REQUEST:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
    case authActionTypes.GET_LOGIN_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        isAuth: action.data,
        authUser: authService.getAuthUser()
      }
    case authActionTypes.GET_LOGIN_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        isAuth: action.isAuth,
      }

    case authActionTypes.GET_LOGOUT_REQUEST:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      }
    case authActionTypes.GET_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: action.isAuth,
        authUser: action.authUser,
        loading: action.loading,
        error: {message: action.error}
      }
    case authActionTypes.GET_LOGOUT_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: {message: action.error},
      }

    default:
      return state
  }
}
export default auth