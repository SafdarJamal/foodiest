import { combineReducers } from 'redux';

import isLoading from './isLoading';
import user from './user';

const reducers = combineReducers({
  isLoading,
  user
});

export default reducers;
