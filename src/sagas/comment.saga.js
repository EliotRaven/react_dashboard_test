import { put, takeEvery } from 'redux-saga/effects'
import { commentActionTypes } from '../action-types'
import CommentService from '../services/comment.service';
import {history} from '../helpers'

const entity = 'comment'

function* index (action) {
  try {
    const data = yield CommentService.index(entity, action.query)
    yield put({type: commentActionTypes.GET_COMMENTS_SUCCESS, data, loading: false, error: null})
  } catch (error) {
    yield put({type: commentActionTypes.GET_COMMENTS_FAILURE, error, loading: false})
  }
}

function* list (action) {
  try {
    const data = yield CommentService.index(entity, action.query)
    yield put({type: commentActionTypes.GET_COMMENT_LIST_SUCCESS, data, loading: false, error: null})
  } catch (error) {
    yield put({type: commentActionTypes.GET_COMMENT_LIST_FAILURE, error, loading: false})
  }
}

function* show (action) {
  try {
    const data = yield CommentService.show(entity, action.id)
    yield put({type: commentActionTypes.GET_COMMENT_SUCCESS, data, loading: false, error: null})
  } catch (error) {
    yield put({type: commentActionTypes.GET_COMMENT_FAILURE, error, loading: false})
  }
}

function* create (action) {
  try {
    const data = yield CommentService.create(entity, action.data)
    yield put({type: commentActionTypes.CREATE_COMMENT_SUCCESS, data, loading: false, error: null})
    history.push('/comments')
  } catch (error) {
    yield put({type: commentActionTypes.CREATE_COMMENT_FAILURE, error, loading: false})
  }
}

function* update (action) {
  try {
    const data = yield CommentService.update(entity, action.id, action.data)
    yield put({type: commentActionTypes.UPDATE_COMMENT_SUCCESS, data, loading: false, error: null})
    history.push('/comments')
  } catch (error) {
    yield put({type: commentActionTypes.UPDATE_COMMENT_FAILURE, error, loading: false})
  }
}

function* remove (action) {
  try {
    const data = yield CommentService.remove(entity, action.id)
    yield put({type: commentActionTypes.DELETE_COMMENT_SUCCESS, data, loading: false, error: null})
    history.push('/comments')
  } catch (error) {
    yield put({type: commentActionTypes.DELETE_COMMENT_FAILURE, error, loading: false})
  }
}

function* commentSaga() {
  yield takeEvery(commentActionTypes.GET_COMMENTS_REQUEST, index)
  yield takeEvery(commentActionTypes.GET_COMMENT_LIST_REQUEST, list)
  yield takeEvery(commentActionTypes.GET_COMMENT_REQUEST, show)
  yield takeEvery(commentActionTypes.CREATE_COMMENT_REQUEST, create)
  yield takeEvery(commentActionTypes.UPDATE_COMMENT_REQUEST, update)
  yield takeEvery(commentActionTypes.DELETE_COMMENT_REQUEST, remove)
}

export default commentSaga


