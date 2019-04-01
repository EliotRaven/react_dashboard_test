import { commentActionTypes } from '../action-types';
import Action from './actions'
import initialState from './initial.state'

const comment = (state, action) => {
  state = state ? state : initialState

  switch(action.type){
    //----------------GET_COMMENTS-------------------
    case commentActionTypes.GET_COMMENTS_REQUEST:
      return Action.request(state, action)
    case commentActionTypes.GET_COMMENTS_SUCCESS:
      return Action.successWithPagination(state, action)
    case commentActionTypes.GET_COMMENTS_FAILURE:
      return Action.failure(state, action)

    //----------------GET_COMMENT_LIST-------------------
    case commentActionTypes.GET_COMMENT_LIST_REQUEST:
      return Action.request(state, action)
    case commentActionTypes.GET_COMMENT_LIST_SUCCESS:
      return Action.success(state, action)
    case commentActionTypes.GET_COMMENT_LIST_FAILURE:
      return Action.failure(state, action)

    //-----------------GET_COMMENT----------------------
    case commentActionTypes.GET_COMMENT_REQUEST:
      return Action.request(state, action)
    case commentActionTypes.GET_COMMENT_SUCCESS:
      return Action.successSingle(state, action)
    case commentActionTypes.GET_COMMENT_FAILURE:
      return Action.failure(state, action)

    //---------------CREATE_COMMENT----------------------
    case commentActionTypes.CREATE_COMMENT_REQUEST:
      return Action.request(state, action)
    case commentActionTypes.CREATE_COMMENT_SUCCESS:
      return Action.successSingle(state, action)
    case commentActionTypes.CREATE_COMMENT_FAILURE:
      return Action.failure(state, action)

    //--------------UPDATE_COMMENT------------------------
    case commentActionTypes.UPDATE_COMMENT_REQUEST:
      return Action.request(state, action)
    case commentActionTypes.UPDATE_COMMENT_SUCCESS:
      return Action.successSingle(state, action)
    case commentActionTypes.UPDATE_COMMENT_FAILURE:
      return Action.failure(state, action)
    //--------------------DELETE_COMMENT--------------------
    case commentActionTypes.DELETE_COMMENT_REQUEST:
      return Action.request(state, action)
    case commentActionTypes.DELETE_COMMENT_SUCCESS:
      return Action.successSingle(state, action)
    case commentActionTypes.DELETE_COMMENT_FAILURE:
      return Action.failure(state, action)

    default:
      return state
  }
}

export default comment

