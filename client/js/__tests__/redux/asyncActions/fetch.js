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

let store;
describe('fetch async action creators', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  })

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should fetch all', () => {
    fetchMock
      .getOnce(`/api/user`, mockResponse)
    const expectedActions = [
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
    return store.dispatch(async.fetchAll(actions.Filter.ALL)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should fetch users', () => {
    const mockResponse = {
      data: {
        users: [
          {
            username: 'user2',
            id: 2,
            email: 'user2@email.com'
          }
        ]
      }
    }
    const username = 'username';
    fetchMock
      .getOnce(`/api/user/find?username=${username}`, mockResponse)

    const expectedActions = [
      { type: actions.REQUEST_SEARCH, filter: username },
      { type: actions.REQUEST_USERS, filter: username },
      { type: actions.RECEIVE_SEARCH,
        search: {
          byId: {
            2: {
              username: 'user2',
              id: 2,
              email: 'user2@email.com'
            }
          },
          ids: ['2']
        }
      },
      { type: actions.SET_STATUS, status: actions.Status.SEARCH_FOUND }
    ]
    return store.dispatch(async.fetchUsers(username)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })

  it('should fetch groups', () => {
    fetchMock
      .getOnce('/api/user/groups', {
        data: {
          groups: []
        }
      })

    const expectedActions = [
      { type: actions.REQUEST_GROUPS, filter: actions.Filter.ALL },
      { type: actions.RECEIVE_USERS,
        users: {
          byId: {},
          ids: []
        }
      },
      {
        type: actions.RECEIVE_GROUPS,
        groups: {
          byId: {},
          ids: []
        }
      }
    ]
    return store.dispatch(async.fetchGroups(actions.Filter.ALL)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })

  it('should fetch posts', () => {
    const filter = 1
    fetchMock
      .getOnce(`/api/group/${filter}/messages`, {
        data: {
          posts: []
        }
      })
    const expectedActions = [
      { type: actions.REQUEST_POSTS, filter },
      { type: actions.RECEIVE_POSTS, posts: {
        byId: {},
        ids: []
      }}
    ]

    return store.dispatch(async.fetchPosts(filter)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })
})