import { put, takeEvery } from 'redux-saga/effects'
import { articlesActionTypes } from '../action-types'
import ArticlesService from "../services/articles.service";
import {history} from '../helpers'

const entity = 'article'

function* index (action) {
  try {
    const data = yield ArticlesService.index(action.query)
    yield put({type: articlesActionTypes.GET_ARTICLES_SUCCESS, data, loading: false, error: null})
  } catch (error) {
    yield put({type: articlesActionTypes.GET_ARTICLES_FAILURE, error, loading: false})
  }
}

function* list (action) {
  try {
    const data = yield ArticlesService.list(action.query)
    yield put({type: articlesActionTypes.GET_ARTICLES_LIST_SUCCESS, data, loading: false, error: null})
  } catch (error) {
    yield put({type: articlesActionTypes.GET_ARTICLES_LIST_FAILURE, error, loading: false})
  }
}

function* show (action) {
  try {
    const data = yield ArticlesService.show(entity, action.id)
    yield put({type: articlesActionTypes.GET_ARTICLE_SUCCESS, data, loading: false, error: null})
  } catch (error) {
    yield put({type: articlesActionTypes.GET_ARTICLE_FAILURE, error, loading: false})
  }
}

function* create (action) {
  try {
    const data = yield ArticlesService.create(entity, action.data)
    yield put({type: articlesActionTypes.CREATE_ARTICLE_SUCCESS, data, loading: false, error: null})
    history.push('/articles')
  } catch (error) {
    yield put({type: articlesActionTypes.CREATE_ARTICLE_FAILURE, error, loading: false})
  }
}

function* update (action) {
  try {
    const data = yield ArticlesService.update(entity, action.id, action.data)
    yield put({type: articlesActionTypes.UPDATE_ARTICLE_SUCCESS, data, loading: false, error: null})
    history.push('/articles')
  } catch (error) {
    yield put({type: articlesActionTypes.UPDATE_ARTICLE_FAILURE, error, loading: false})
  }
}

function* remove (action) {
  try {
    const data = yield ArticlesService.remove(entity, action.id)
    yield put({type: articlesActionTypes.DELETE_ARTICLE_SUCCESS, data, loading: false, error: null})
    history.push('/articles')
  } catch (error) {
    yield put({type: articlesActionTypes.DELETE_ARTICLE_FAILURE, error, loading: false})
  }
}

function* articlesSaga() {
  yield takeEvery(articlesActionTypes.GET_ARTICLES_REQUEST, index)
  yield takeEvery(articlesActionTypes.GET_ARTICLES_LIST_REQUEST, list)
  yield takeEvery(articlesActionTypes.GET_ARTICLE_REQUEST, show)
  yield takeEvery(articlesActionTypes.CREATE_ARTICLE_REQUEST, create)
  yield takeEvery(articlesActionTypes.UPDATE_ARTICLE_REQUEST, update)
  yield takeEvery(articlesActionTypes.DELETE_ARTICLE_REQUEST, remove)
}

export default articlesSaga

