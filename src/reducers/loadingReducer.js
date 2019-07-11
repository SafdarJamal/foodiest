import { LOADING } from '../constants/actionTypes';

const INITIAL_STATE = {
  isLoading: true
};

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default loadingReducer;
