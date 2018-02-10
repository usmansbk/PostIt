import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as reducers from '../../../src/redux/reducers';
import * as actions from '../../../src/redux/actionTypes';
import * as async from '../../../src/redux/asyncActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)

let store;
describe('post async action creators', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  })

  beforeEach(() => {
    store = mockStore({})
  })

  it('should create new post', () => {
    const id = 1;

    fetchMock
      .postOnce(`/api/group/${id}/message`, 201)

    const expectedActions = [
      { type: actions.SET_STATUS, status: actions.Status.POSTING_MESSAGE },
      { type: actions.SET_STATUS, status: actions.Status.MESSAGE_POSTED }
    ]

    return store.dispatch(async.postMessage({ gid: 1 })).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    }) 

  })
})
