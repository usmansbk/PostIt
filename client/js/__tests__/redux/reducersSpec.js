import reducer from '../../source/redux/Reducers';
import * as types from '../../source/redux/Action';

describe('postit reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      posts: [],
      groups: [],
      members: [],
      notifications: []
    });
  });

  it('should handle ADD_POST', () => {
    expect(reducer({}, {
      type: types.ADD_POST,
      payload: {
       posts: 'posts'
      }
    })).toEqual({
      posts: 'posts',
    });
  });

  it('should handle DELETE_POST', () => {
    expect(reducer({}, {
      type: types.DELETE_POST,
      payload: {
      }
    })).toEqual({
    });
  });

  it('should handle ADD_MEMBER', () => {
    expect(reducer({}, {
      type: types.ADD_MEMBER,
      payload: {
       members: 'members'
      }
    })).toEqual({
      members: 'members',
    });
  });

  it('should handle REMOVE_MEMBER', () => {
    expect(reducer({}, {
      type: types.REMOVE_MEMBER,
      payload: {
      }
    })).toEqual({
    });
  });

  it('should handle ADD_GROUP', () => {
    expect(reducer({}, {
      type: types.ADD_GROUP,
      payload: {
        groups: 'groups'
      }
    })).toEqual({
      groups: 'groups'
    });
  });

  it('should handle DELETE_GROUP', () => {
    expect(reducer({}, {
      type: types.ADD_GROUP,
      payload: {
      }
    })).toEqual({
    });
  });

  it('should handle ADD_NOTIFICATION', () => {
    expect(reducer({}, {
      type: types.ADD_NOTIFICATION,
      payload: {
        notifications: 'notifications'
      }
    })).toEqual({
      notifications: 'notifications'
    });
  });

  it('should handle REMOVE_NOTIFICATION', () => {
    expect(reducer({}, {
      type: types.REMOVE_NOTIFICATION,
      payload: {
      }
    })).toEqual({
    });
  });
});
