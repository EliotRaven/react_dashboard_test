const request = (state, action) => ({
  ...state,
  loading: action.loading,
  error: action.error,
  item: {},
})

const success = (state, action) => ({
  ...state,
  data: action.data,
  loading: action.loading,
  error: {message: action.error},
});

const successWithPagination = (state, action) => ({
  ...state,
  data: action.data.docs,
  pagination: {...action.data, docs: null},
  loading: action.loading,
  error: {message: action.error},
});

const successSingle = (state, action) => ({
  ...state,
  item: action.data,
  loading: action.loading,
  error: {message: action.error},
});

const failure = (state, action) => ({
  ...state,
  loading: action.loading,
  error: {message: action.error},
});

const Actions = {
  request,
  success,
  successWithPagination,
  successSingle,
  failure,
};

export default Actions;
