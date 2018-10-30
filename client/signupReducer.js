import { SIGNUP_SUCCESS, SIGNUP_FAILED } from './types';

const initialState = {currentUser: {}, message: '', error: ''};

export default (state = initialState, action) => {
  switch(action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.User,
        message: action.payload.message
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        error: action.payload.message
      };
    default: return state;
  }
};
