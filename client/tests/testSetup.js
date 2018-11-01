import moxios from 'moxios';
import expect from 'expect';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

process.env.NODE_ENV = 'test';

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const reader = new FileReader();

require.extensions['.css'] = () => null;

global.expect = expect;
global.moxios = moxios;
global.reader = reader;
global.mount = mount;
global.shallow = shallow;
global.mockStore = mockStore;
global.navigator = {
  userAgent: 'node.js'
};
global.document = document;

var documentRef = document;
