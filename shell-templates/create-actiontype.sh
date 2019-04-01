#!/bin/bash

uppercase=`echo $1 | tr 'a-z' 'A-Z'`

echo "export const $1ActionTypes = {
  GET_${uppercase}_LIST_REQUEST: 'GET_${uppercase}_LIST_REQUEST',
  GET_${uppercase}_LIST_SUCCESS: 'GET_${uppercase}_LIST_SUCCESS',
  GET_${uppercase}_LIST_FAILURE: 'GET_${uppercase}_LIST_FAILURE',

  CREATE_${uppercase}_REQUEST: 'CREATE_${uppercase}_REQUEST',
  CREATE_${uppercase}_SUCCESS: 'CREATE_${uppercase}_SUCCESS',
  CREATE_${uppercase}_FAILURE: 'CREATE_${uppercase}_FAILURE',

  UPDATE_${uppercase}_REQUEST: 'UPDATE_${uppercase}_REQUEST',
  UPDATE_${uppercase}_SUCCESS: 'UPDATE_${uppercase}_SUCCESS',
  UPDATE_${uppercase}_FAILURE: 'UPDATE_${uppercase}_FAILURE',

  GET_${uppercase}_REQUEST: 'GET_${uppercase}_REQUEST',
  GET_${uppercase}_SUCCESS: 'GET_${uppercase}_SUCCESS',
  GET_${uppercase}_FAILURE: 'GET_${uppercase}_FAILURE',

  DELETE_${uppercase}_REQUEST: 'DELETE_${uppercase}_REQUEST',
  DELETE_${uppercase}_SUCCESS: 'DELETE_${uppercase}_SUCCESS',
  DELETE_${uppercase}_FAILURE: 'DELETE_${uppercase}_FAILURE'
}
" >> ./src/action-types/$1.action-types.js