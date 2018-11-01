import { signup } from '../signupActions';
import mockData from './mockdata';
import { SIGNUP_SUCCESS, SIGNUP_FAILED } from '../types';

describe('Signup action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('signs up a new user', async (done) => {
    const { signupData, signupResponse } = mockData;
    moxios.stubRequest('/api/v1/signup', {
      status: 201,
      response: signupResponse
    });

    const expectedActions = [{
      type: SIGNUP_SUCCESS,
      payload: signupResponse
    }];

    const store = mockStore({});
    await store.dispatch(signup(signupData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });

  it('fails to sign up a new user', async (done) => {
    const { signupData, signupFailedResponse } = mockData;
    moxios.stubRequest('/api/v1/signup', {
      status: 409,
      response: signupFailedResponse
    });

    const expectedActions = [{
      type: SIGNUP_FAILED,
      payload: signupFailedResponse
    }];

    const store = mockStore({});
    await store.dispatch(signup(signupData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
});
