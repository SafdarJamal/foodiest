import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import userReducer from './userReducer';

export default combineReducers({
  loading: loadingReducer,
  user: userReducer
});
