import axios from 'axios';
import { SIGNUP_SUCCESS, SIGNUP_FAILED } from './types';

export const signup = user =>
 (
   dispatch => axios.post('/api/v1/signup', user)
  .then((response) => {
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: response.data
    });
  }).catch((error) => {
    dispatch({
      type: SIGNUP_FAILED,
      payload: error.response.data
    });
  })
);
