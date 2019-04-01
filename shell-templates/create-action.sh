#!/bin/bash

uppercase=`echo $1 | tr 'a-z' 'A-Z'`

echo "import {$1ActionTypes} from '../action-types';

export const $1Action = {
  index,
  show,
  create,
  update,
  remove
}

function index () {
  return {
    type: $1ActionTypes.GET_${uppercase}_LIST_REQUEST,
    loading: true,
    error: {},
  }
}

function show (id) {
  return {
    type: $1ActionTypes.GET_${uppercase}_REQUEST,
    loading: true,
    error: {},
    id
  }
}

function create (data) {
  return {
    type: $1ActionTypes.CREATE_${uppercase}_REQUEST,
    loading: true,
    error: {},
    data
  }
}

function update (data, id) {
  return {
    type: $1ActionTypes.UPDATE_${uppercase}_REQUEST,
    loading: true,
    error: {},
    data,
    id
  }
}

function remove (id) {
  return {
    type: $1ActionTypes.DELETE_${uppercase}_REQUEST,
    loading: true,
    error: {},
    id
  }
}
" >> ./src/actions/$1.action.js