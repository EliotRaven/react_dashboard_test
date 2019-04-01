import { combineReducers } from 'redux';
import auth from './auth.reducer';
import articles from './articles.reducer';
import users from './user.reducer';
import roles from './role.reducer';
import comments from './comment.reducer';
import statistics from './statistic.reducer';

const rootReducer = combineReducers({
  auth,
  articles,
  users,
  roles,
  comments,
  statistics
});

export default rootReducer;

