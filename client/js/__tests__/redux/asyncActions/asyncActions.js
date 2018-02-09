import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as reducers from '../../../src/redux/reducers';
import * as actions from '../../../src/redux/actionTypes';
import * as async from '../../../src/redux/asyncActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)

const initialState = {
  account: {},
  posts: {
    isFetching: false,
    byId: {},
    ids: []
  },
  groups: {
    isFetching: false,
    byId: {},
    ids: []
  },
  users: {
    isFetching: false,
    byId: {},
    ids: []
  },
  search: {
    isFetching: false,
    byId: {},
    ids: []
  },
  group: null,
  session: null,
  status: null,
}

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  })

  it('creates SIGNED_IN when sign in done', () => {
    fetchMock
      .post('/api/user/signin', '200')

    const expectedActions = [
      { type: actions.SET_SESSION, session: actions.Status.SIGNED_IN},
      { type: actions.SET_SESSION, session: actions.Status.SIGNING_IN}
    ]

    const store = mockStore(initialState)
    return store.dispatch(async.signIn()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})