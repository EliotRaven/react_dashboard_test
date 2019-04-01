import { userActionTypes } from '../action-types';
import Action from './actions'
import initialState from './initial.state'

const users = (state, action) => {
  state = state ? state : initialState

  switch(action.type){
    //----------------GET_USERS-------------------
    case userActionTypes.GET_USERS_REQUEST:
      return Action.request(state, action)
    case userActionTypes.GET_USERS_SUCCESS:
      return Action.successWithPagination(state, action)
    case userActionTypes.GET_USERS_FAILURE:
      return Action.failure(state, action)

    //----------------GET_USER_LIST-------------------
    case userActionTypes.GET_USER_LIST_REQUEST:
      return Action.request(state, action)
    case userActionTypes.GET_USER_LIST_SUCCESS:
      return Action.success(state, action)
    case userActionTypes.GET_USER_LIST_FAILURE:
      return Action.failure(state, action)

    //-----------------GET_USER----------------------
    case userActionTypes.GET_USER_REQUEST:
      return Action.request(state, action)
    case userActionTypes.GET_USER_SUCCESS:
      return Action.successSingle(state, action)
    case userActionTypes.GET_USER_FAILURE:
      return Action.failure(state, action)

    //---------------CREATE_USER----------------------
    case userActionTypes.CREATE_USER_REQUEST:
      return Action.request(state, action)
    case userActionTypes.CREATE_USER_SUCCESS:
      return Action.successSingle(state, action)
    case userActionTypes.CREATE_USER_FAILURE:
      return Action.failure(state, action)

    //--------------UPDATE_USER------------------------
    case userActionTypes.UPDATE_USER_REQUEST:
      return Action.request(state, action)
    case userActionTypes.UPDATE_USER_SUCCESS:
      return Action.successSingle(state, action)
    case userActionTypes.UPDATE_USER_FAILURE:
      return Action.failure(state, action)
    //--------------------DELETE_USER--------------------
    case userActionTypes.DELETE_USER_REQUEST:
      return Action.request(state, action)
    case userActionTypes.DELETE_USER_SUCCESS:
      return Action.successSingle(state, action)
    case userActionTypes.DELETE_USER_FAILURE:
      return Action.failure(state, action)

    default:
      return state
  }
}

export default users

