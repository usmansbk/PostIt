import * as reducers from '../../../src/redux/reducers';
import * as actions from '../../../src/redux/actionTypes';

describe('search reducer', () => {
  it('should return the initial state', () => {
    expect(reducers.search(undefined, {}))
    .toEqual({
      isFetching: false,
      byId: {},
      ids: []
    })
  })
  it('should handle REQUEST_SEARCH', () => {
    expect(reducers.search(undefined, actions.requestSearch('USERNAME')))
    .toEqual({
      isFetching: true,
      byId: {},
      ids: []
    })
  })
  it('should handle RECEIVE_SEARCH', () => {
    const byId = {
      0: {}
    }
    const ids = [0];
    const users = { byId, ids }
    expect(reducers.search(undefined, actions.receiveSearch(users)))
    .toEqual({
      isFetching: false,
      byId,
      ids
    })
  })
})