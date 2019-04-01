#!/bin/bash

capitalize=`echo $1 | tr [A-Z] [a-z] | sed -e 's/^./\U&/g; s/ ./\U&/g'`
uppercase=`echo $1 | tr 'a-z' 'A-Z'`

echo "import { put, takeEvery } from 'redux-saga/effects'
import { $1ActionTypes } from '../action-types'
import ${capitalize}Service from '../services/$1.service';
import {history} from '../helpers'

const entity = '$1'

function* index () {
  try {
    const data = yield ${capitalize}Service.index()
    yield put({type: $1ActionTypes.GET_${uppercase}_LIST_SUCCESS, data, loading: false, error: null})
  } catch (error) {
    yield put({type: $1ActionTypes.GET_${uppercase}_LIST_FAILURE, error, loading: false})
  }
}

function* show (action) {
  try {
    const data = yield ${capitalize}Service.show(entity, action.id)
    yield put({type: $1ActionTypes.GET_${uppercase}_SUCCESS, data, loading: false, error: null})
  } catch (error) {
    yield put({type: $1ActionTypes.GET_${uppercase}_FAILURE, error, loading: false})
  }
}

function* create (action) {
  try {
    const data = yield ${capitalize}Service.create(entity, action.data)
    yield put({type: $1ActionTypes.CREATE_${uppercase}_SUCCESS, data, loading: false, error: null})
    history.push('/$1')
  } catch (error) {
    yield put({type: $1ActionTypes.CREATE_${uppercase}_FAILURE, error, loading: false})
  }
}

function* update (action) {
  try {
    const data = yield ${capitalize}Service.update(entity, action.id, action.data)
    yield put({type: $1ActionTypes.UPDATE_${uppercase}_SUCCESS, data, loading: false, error: null})
    history.push('/$1')
  } catch (error) {
    yield put({type: $1ActionTypes.UPDATE_${uppercase}_FAILURE, error, loading: false})
  }
}

function* remove (action) {
  try {
    const data = yield ${capitalize}Service.remove(entity, action.id)
    yield put({type: $1ActionTypes.DELETE_${uppercase}_SUCCESS, data, loading: false, error: null})
    history.push('/$1')
  } catch (error) {
    yield put({type: $1ActionTypes.DELETE_${uppercase}_FAILURE, error, loading: false})
  }
}

function* $1Saga() {
  yield takeEvery($1ActionTypes.GET_${uppercase}_LIST_REQUEST, index)
  yield takeEvery($1ActionTypes.GET_${uppercase}_REQUEST, show)
  yield takeEvery($1ActionTypes.CREATE_${uppercase}_REQUEST, create)
  yield takeEvery($1ActionTypes.UPDATE_${uppercase}_REQUEST, update)
  yield takeEvery($1ActionTypes.DELETE_${uppercase}_REQUEST, remove)
}

export default $1Saga

" >> ./src/sagas/$1.saga.js