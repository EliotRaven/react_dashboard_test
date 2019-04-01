import { roleActionTypes } from '../action-types';
import Action from './actions'
import initialState from './initial.state'

const role = (state, action) => {
  state = state ? state : initialState

  switch(action.type){
    //----------------GET_ROLES-------------------
    case roleActionTypes.GET_ROLES_REQUEST:
      return Action.request(state, action)
    case roleActionTypes.GET_ROLES_SUCCESS:
      return Action.successWithPagination(state, action)
    case roleActionTypes.GET_ROLES_FAILURE:
      return Action.failure(state, action)

    //----------------GET_ROLE_LIST-------------------
    case roleActionTypes.GET_ROLE_LIST_REQUEST:
      return Action.request(state, action)
    case roleActionTypes.GET_ROLE_LIST_SUCCESS:
      return Action.success(state, action)
    case roleActionTypes.GET_ROLE_LIST_FAILURE:
      return Action.failure(state, action)

    //-----------------GET_ROLE----------------------
    case roleActionTypes.GET_ROLE_REQUEST:
      return Action.request(state, action)
    case roleActionTypes.GET_ROLE_SUCCESS:
      return Action.successSingle(state, action)
    case roleActionTypes.GET_ROLE_FAILURE:
      return Action.failure(state, action)

    //---------------CREATE_ROLE----------------------
    case roleActionTypes.CREATE_ROLE_REQUEST:
      return Action.request(state, action)
    case roleActionTypes.CREATE_ROLE_SUCCESS:
      return Action.successSingle(state, action)
    case roleActionTypes.CREATE_ROLE_FAILURE:
      return Action.failure(state, action)

    //--------------UPDATE_ROLE------------------------
    case roleActionTypes.UPDATE_ROLE_REQUEST:
      return Action.request(state, action)
    case roleActionTypes.UPDATE_ROLE_SUCCESS:
      return Action.successSingle(state, action)
    case roleActionTypes.UPDATE_ROLE_FAILURE:
      return Action.failure(state, action)
    //--------------------DELETE_ROLE--------------------
    case roleActionTypes.DELETE_ROLE_REQUEST:
      return Action.request(state, action)
    case roleActionTypes.DELETE_ROLE_SUCCESS:
      return Action.successSingle(state, action)
    case roleActionTypes.DELETE_ROLE_FAILURE:
      return Action.failure(state, action)

    default:
      return state
  }
}

export default role

