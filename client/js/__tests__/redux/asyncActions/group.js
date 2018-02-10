import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as reducers from '../../../src/redux/reducers';
import * as actions from '../../../src/redux/actionTypes';
import * as async from '../../../src/redux/asyncActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)

let store;
describe('group async action creators', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  })

  beforeEach(() => {
    store = mockStore({})
  })

  it('should create new group', () => {
    const newGroup = {
      id: 1,
      name: 'New Group',
      discription: 'Hello'
    }
    fetchMock
      .postOnce('/api/group', 201)
      .getOnce('/api/user/groups', {
        data: {
          groups: [ newGroup ]
        }
      })

    const expectedActions = [
      { type: actions.SET_STATUS, status: actions.Status.CREATING_GROUP },
      { type: actions.SET_STATUS, status: actions.Status.GROUP_CREATED },
      { type: actions.REQUEST_GROUPS, filter: actions.Filter.ALL },
      { type: actions.RECEIVE_USERS,
        users: {
          byId: {},
          ids: []
        }
      },
      { type: actions.RECEIVE_GROUPS,
        groups: {
          byId: {
            1: newGroup
          },
          ids: [1]
        }
      }
    ]

    return store.dispatch(async.createGroup()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })

  it('should add member', () => {
    const gid = 1
        , invite = 'user2';
    fetchMock
      .postOnce(`/api/group/${gid}/user`, 200)

    const expectedActions = [
      { type: actions.SET_STATUS, status: actions.Status.ADD_USER },
      { type: actions.SET_STATUS, status: actions.Status.USER_ADDED }
    ];

    return store.dispatch(async.addUserTo(gid, invite)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should remove member', () => {
    const uid = 1
        , gid = 2;
    fetchMock
      .patchOnce(`/api/group/${gid}/remove?uid=${uid}`, 200)

    const expectedActions = [
      { type: actions.SET_STATUS, status: actions.Status.REMOVING_USER },
   //   { type: actions.REMOVE_USER, uid, gid }
    ]
    return store.dispatch(async.requestRemoveUser(uid, gid)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })

  it('should update group info', () => {
    fetchMock
      .patchOnce(`/api/group/`, 200)

    const expectedActions = [
      { type: actions.SET_STATUS, status: actions.Status.UPDATING_GROUP },
      { type: actions.SET_STATUS, status: actions.Status.GROUP_UPDATED }
    ]
    return store.dispatch(async.requestUpdateGroup({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should delete group', () => {
    const id = 1;
    fetchMock
      .deleteOnce(`/api/group/${id}`, 200)

    const expectedActions = [
      { type: actions.SET_STATUS, status: actions.Status.DELETING_GROUP },
      { type: actions.SET_STATUS, status: actions.Status.GROUP_DELETED },
    ]

    return store.dispatch(async.deleteGroup(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should leave group', () => {
    const id = 1;
    fetchMock
      .patchOnce(`/api/group/${id}`, 200)

    const expectedActions = [
      { type: actions.SET_STATUS, status: actions.Status.DELETING_GROUP },
      { type: actions.SET_STATUS, status: actions.Status.GROUP_DELETED },
      { type: actions.REMOVE_GROUP, id }
    ]

    return store.dispatch(async.leaveGroup(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
});