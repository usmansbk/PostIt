import * as reducers from '../../../src/redux/reducers';
import * as actions from '../../../src/redux/actionTypes';

describe('groups reducer', () => {
  it('should return initial state', () => {
    expect(reducers.groups(undefined, {})).toEqual({
      isFetching: false,
      byId: {},
      ids: []
    })
  })
  it('should handle REQUEST_GROUPS', () => {
    expect(reducers.groups(undefined, actions.requestGroups(1))).
    toEqual({
      isFetching: 1,
      byId: {},
      ids: []
    })
  })
  it('should handle RECEIVE_GROUPS', () => {
    const byId = {
      0: {},
      1: {}
    }
    const ids = [0, 1];
    const groups = { byId, ids }
    expect(reducers.groups(undefined, actions.receiveGroups(groups)))
    .toEqual({
      isFetching: false,
      byId,
      ids
    })
  })
  it('should handle REMOVE_GROUP', () => {
    const initialState = {
      isFetching: false,
      byId: {
        0: {}
      },
      ids: [0]
    }
    expect(reducers.groups(initialState, actions.removeGroup(0)))
    .toEqual({
      isFetching: false,
      byId: {},
      ids: []
    })
  })
  it('should handle REMOVE_USER', () => {
    const initialState = {
      isFetching: false,
      byId: {
        0: {
          Members: [1]
        }
      },
      ids: [0]
    }
    expect(reducers.groups(initialState, actions.removeUser(1, 0)))
    .toEqual({
      isFetching: false,
      byId: {
        0: {
          Members: []
        }
      },
      ids: [0]
    })
  })
})