import { START_LOADING, STOP_LOADING } from '../constants/actionTypes';

const startLoading = () => {
  return {
    type: START_LOADING
  };
};

const stopLoading = () => {
  return {
    type: STOP_LOADING
  };
};

export { startLoading, stopLoading };
