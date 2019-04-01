const Actions = {
  request,
  success,
  successWithPagination,
  successSingle,
  failure
}


function  request (state, action) {
  return {
    ...state,
    loading: action.loading,
    error: action.error,
    item: {}
  }
}

function success (state, action) {
  return {
    ...state,
    data: action.data,
    loading: action.loading,
    error: {message: action.error}
  }
}

function successWithPagination (state, action) {
  return {
    ...state,
    data: action.data.docs,
    pagination: {...action.data, docs: null},
    loading: action.loading,
    error: {message: action.error}
  }
}

function successSingle (state, action) {
  return {
    ...state,
    item: action.data,
    loading: action.loading,
    error: {message: action.error}
  }
}

function failure (state, action) {
  return {
    ...state,
    loading: action.loading,
    error: {message: action.error},
  }
}

export default Actions
