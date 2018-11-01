import signupReducer from '../signupReducer';
import mockData from './mockdata';
import { SIGNUP_SUCCESS, SIGNUP_FAILED } from '../types';

describe('Signup reducer', () => {
  it('stores user when a user signs up', () => {
    const { signupResponse } = mockData;
    const initialState = {
      currentUser: {},
      message: '',
      error: ''
    }

    const action = {
      type: SIGNUP_SUCCESS,
      payload: signupResponse
    };

    const newState = signupReducer(initialState, action);
    expect(newState.message).toEqual('Welcome Jane');
    expect(newState.currentUser).toEqual(action.payload.user);
  });

  it('stores error when a user sign up fails', () => {
    const { signupFailedResponse } = mockData;
    const initialState = {
      currentUser: {},
      message: '',
      error: ''
    }

    const action = {
      type: SIGNUP_FAILED,
      payload: signupFailedResponse
    };

    const newState = signupReducer(initialState, action);
    expect(newState.error).toEqual('Email already exists');
  });

  it('return initial state when there\'s no valid action', () => {
    const initialState = {
      currentUser: {}
    }

    const action = {
      type: 'NOTHING'
    };

    const newState = signupReducer(initialState, action);
    expect(newState.currentUser).toEqual({});
  });

  it('return current state when there\'s no initial state', () => {
    const { signupResponse } = mockData;

    const action = {
      type: SIGNUP_SUCCESS,
      payload: signupResponse
    };

    const newState = signupReducer(undefined, action);
    expect(newState.message).toEqual('Welcome Jane');
  });
});
