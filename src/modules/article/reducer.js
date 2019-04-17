import { articlesActionTypes } from './types';
import Actions from '../../reducers/actions';
import initialState from '../../reducers/initial.state';

export const articles = (state = initialState, action) => {
  switch(action.type){
    // ----------------GET_ARTICLES-------------------
    case articlesActionTypes.GET_ARTICLES_REQUEST:
      return Actions.request(state, action);
    case articlesActionTypes.GET_ARTICLES_SUCCESS:
      return Actions.successWithPagination(state, action);
    case articlesActionTypes.GET_ARTICLES_FAILURE:
      return Actions.failure(state, action);

    // ----------------GET_ARTICLES_LIST-------------------
    case articlesActionTypes.GET_ARTICLES_LIST_REQUEST:
      return Actions.request(state, action);
    case articlesActionTypes.GET_ARTICLES_LIST_SUCCESS:
      return Actions.success(state, action);
    case articlesActionTypes.GET_ARTICLES_LIST_FAILURE:
      return Actions.failure(state, action);

    // -----------------GET_ARTICLE----------------------
    case articlesActionTypes.GET_ARTICLE_REQUEST:
      return Actions.request(state, action);
    case articlesActionTypes.GET_ARTICLE_SUCCESS:
      return Actions.successSingle(state, action);
    case articlesActionTypes.GET_ARTICLE_FAILURE:
      return Actions.failure(state, action);

    // ---------------CREATE_ARTICLE----------------------
    case articlesActionTypes.CREATE_ARTICLE_REQUEST:
      return Actions.request(state, action);
    case articlesActionTypes.CREATE_ARTICLE_SUCCESS:
      return Actions.successSingle(state, action);
    case articlesActionTypes.CREATE_ARTICLE_FAILURE:
      return Actions.failure(state, action);

    // --------------UPDATE_ARTICLE------------------------
    case articlesActionTypes.UPDATE_ARTICLE_REQUEST:
      return Actions.request(state, action);
    case articlesActionTypes.UPDATE_ARTICLE_SUCCESS:
      return Actions.successSingle(state, action);
    case articlesActionTypes.UPDATE_ARTICLE_FAILURE:
      return Actions.failure(state, action);

    // --------------------DELETE_ARTICLE--------------------
    case articlesActionTypes.DELETE_ARTICLE_REQUEST:
      return Actions.request(state, action);
    case articlesActionTypes.DELETE_ARTICLE_SUCCESS:
      return Actions.successSingle(state, action);
    case articlesActionTypes.DELETE_ARTICLE_FAILURE:
      return Actions.failure(state, action);

    default:
      return state;
  }
};
