#!/bin/bash

uppercase=`echo $1 | tr 'a-z' 'A-Z'`

echo "import { $1ActionTypes } from '../action-types';

const initState = {
  loading: false,
  error: {},
  data: [],
  $1: {}
}

const $1 = (state = initState, action) => {

  switch(action.type){
    //----------------GET_${uppercase}_LIST-------------------
    case $1ActionTypes.GET_${uppercase}_LIST_REQUEST:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
    case $1ActionTypes.GET_${uppercase}_LIST_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: action.loading,
        error: {message: action.error}
      }
    case $1ActionTypes.GET_${uppercase}_LIST_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: {message: action.error},
      }

    //-----------------GET_${uppercase}----------------------
    case $1ActionTypes.GET_${uppercase}_REQUEST:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
    case $1ActionTypes.GET_${uppercase}_SUCCESS:
      return {
        ...state,
        $1: action.data,
        loading: action.loading,
        error: {message: action.error}
      }
    case $1ActionTypes.GET_${uppercase}_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: {message: action.error},
      }

    //---------------CREATE_${uppercase}----------------------
    case $1ActionTypes.CREATE_${uppercase}_REQUEST:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
    case $1ActionTypes.CREATE_${uppercase}_SUCCESS:
      return {
        ...state,
        $1: action.data,
        loading: action.loading,
        error: {message: action.error}
      }
    case $1ActionTypes.CREATE_${uppercase}_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: {message: action.error},
      }

    //--------------UPDATE_${uppercase}------------------------
    case $1ActionTypes.UPDATE_${uppercase}_REQUEST:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
    case $1ActionTypes.UPDATE_${uppercase}_SUCCESS:
      return {
        ...state,
        $1: action.data,
        loading: action.loading,
        error: {message: action.error}
      }
    case $1ActionTypes.UPDATE_${uppercase}_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: {message: action.error},
      }
    //--------------------DELETE_${uppercase}--------------------
    case $1ActionTypes.DELETE_${uppercase}_REQUEST:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
    case $1ActionTypes.DELETE_${uppercase}_SUCCESS:
      return {
        ...state,
        $1: action.data,
        loading: action.loading,
        error: {message: action.error}
      }
    case $1ActionTypes.DELETE_${uppercase}_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: {message: action.error},
      }

    default:
      return state
  }
}

export default $1
" >> ./src/reducers/$1.reducer.js