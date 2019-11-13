import { START_LOADING, STOP_LOADING } from '../constants/actionTypes';

const INITIAL_STATE = true;

const isLoading = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_LOADING:
      return true;
    case STOP_LOADING:
      return false;
    default:
      return state;
  }
};

export default isLoading;
