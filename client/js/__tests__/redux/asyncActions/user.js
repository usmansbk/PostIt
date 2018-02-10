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

const mockResponse = {
  data: {
    user: {
      createdAt: 'date',
      username: "username",
      email: "email@email.com",
      id: 1,
      Groups: []
    }
  }
}

const url = 'http://localhost:8888';
let store;
describe('user async action creators', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  })

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should sign in', () => {
    fetchMock
      .postOnce(`/api/user/signin`, 200)
      .getOnce(`/api/user`, mockResponse)
    const expectedActions = [
      { type: actions.SET_SESSION, session: actions.Status.SIGNING_IN },
      { type: actions.SET_SESSION, session: actions.Status.SIGNED_IN },
      { type: actions.USER_LOGIN },
      { type: actions.REQUEST_POSTS, filter: actions.Filter.ALL },
      { type: actions.REQUEST_GROUPS, filter: actions.Filter.ALL },
      { type: actions.SET_ACCOUNT_DETAILS,
        account: {
          createdAt: 'date',
          email: 'email@email.com',
          id: 1,
          username: 'username'
        }
      },
      {
        type: actions.RECEIVE_USERS,
        users: {
          byId: {},
          ids: [],
        }
      },
      {
        type: actions.RECEIVE_GROUPS,
        groups: {
          byId: {},
          ids: []
        }
      },
      {
        type: actions.RECEIVE_POSTS,
        posts: {
          byId: {},
          ids: []
        }
      }
    ]

    return store.dispatch(async.signIn()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should create new account', () => {
    fetchMock
      .postOnce('/api/user/signup', 201)
      .postOnce('/api/user/signin', 200)
      .getOnce('/api/user', mockResponse)
    const expectedActions = [
      { type: actions.SET_SESSION, session: actions.Status.SIGNING_UP },
      { type: actions.SET_SESSION, session: actions.Status.SIGNED_UP },
      { type: actions.SET_SESSION, session: actions.Status.SIGNING_IN },
      { type: actions.SET_SESSION, session: actions.Status.SIGNED_IN },
      { type: actions.USER_LOGIN },
      { type: actions.REQUEST_POSTS, filter: actions.Filter.ALL },
      { type: actions.REQUEST_GROUPS, filter: actions.Filter.ALL },
      { type: actions.SET_ACCOUNT_DETAILS,
        account: {
          createdAt: 'date',
          email: 'email@email.com',
          id: 1,
          username: 'username'
        }
      },
      {
        type: actions.RECEIVE_USERS,
        users: {
          byId: {},
          ids: [],
        }
      },
      {
        type: actions.RECEIVE_GROUPS,
        groups: {
          byId: {},
          ids: []
        }
      },
      {
        type: actions.RECEIVE_POSTS,
        posts: {
          byId: {},
          ids: []
        }
      },
    ]

    return store.dispatch(async.signUp()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })
})