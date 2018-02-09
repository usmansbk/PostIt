import * as reducers from '../../../src/redux/reducers';
import * as actions from '../../../src/redux/actionTypes';

describe('posts reducer', () => {
  it('should return the initial state', () => {
    expect(reducers.posts(undefined, {}))
    .toEqual({
      isFetching: false,
      byId: {},
      ids: []
    })
  })
  it('should handle REQUEST_POSTS', () => {
    expect(reducers.posts(undefined, actions.requestPosts(actions.Filter.ALL)))
    .toEqual({
      isFetching: true,
      byId: {},
      ids: []
    })
  })
  it('should handle RECEIVE_POSTS', () => {
    const byId = {
      0: {}
    };
    const ids = [0]
    const posts = { byId, ids };
    expect(reducers.posts(undefined, actions.receivePosts(posts)))
    .toEqual({
      isFetching: false,
      byId,
      ids
    })
  })
  it('should handle DELETE_POST', () => {
    const initialState = {
      isFetching: false,
      byId: { 0: {
        groupId: 1
      } },
      ids: [0]
    }
    expect(reducers.posts(initialState, actions.deleteGroupPosts(1)))
    .toEqual({
      isFetching: false,
      byId: {},
      ids: []
    })
  })
})