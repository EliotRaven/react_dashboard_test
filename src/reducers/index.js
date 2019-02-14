import { combineReducers } from 'redux';
import auth from './auth.reducer';
import service from './service.reducer';

const rootReducer = combineReducers({
    auth,
    service
});

export default rootReducer;

