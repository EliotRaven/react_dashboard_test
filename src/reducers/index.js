import { combineReducers } from 'redux';
import { auth } from '../modules/auth';
import { articles } from '../modules/article';
import { users } from '../modules/user';
import { roles } from '../modules/role';
import { comments } from '../modules/comment';
import { statistic } from '../modules/statistic';

const rootReducer = combineReducers({
  auth,
  articles,
  users,
  roles,
  comments,
  statistic
});

export default rootReducer;

