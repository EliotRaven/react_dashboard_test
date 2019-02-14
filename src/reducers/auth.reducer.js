import { authActionTypes } from "../action-types";
import { authService } from "../services";

const initState = {
    loading: false,
    error: {},
    isAuth: false,
    authUser: {}
}

const auth = (state = initState, action) => {
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
              isAuth: authService.logout(),
        }

        default:
            return state
    }
}
export default auth