import * as reducers from '../../../src/redux/reducers';
import * as actions from '../../../src/redux/actionTypes';

describe('users reducer', () => {
  it('should return initial state', () => {
    expect(reducers.users(undefined, {}))
    .toEqual({
      isFetching: false,
      byId: {},
      ids: []
    })
  })
  it('should handle RECEIVE_USERS', () => {
    const byId = {
      0: {}
    }
    const ids = [0];
    const users = { byId, ids,}
    expect(reducers.users(undefined, actions.receiveUsers(users)))
    .toEqual({
      isFetching: false,
      byId,
      ids
    })
  })
  it('should handle REQUEST_USERS', () => {
    expect(reducers.users(undefined, actions.requestUsers(actions.Filter.ALL)))
    .toEqual({
      isFetching: actions.Filter.ALL,
      byId: {},
      ids: []
    })
  })
})