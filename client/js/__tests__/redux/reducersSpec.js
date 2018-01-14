import reducer from '../../source/redux/Reducers';
import * as types from '../../source/redux/Actions';

describe('postit reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      posts: [],
      groups: [],
      members: [],
      notifications: [],
      sessionStatus: types.SessionStatus.LOGGED_OUT,
      result: []
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

  it('should handle CLEAR_NOTIFICATION', () => {
    expect(reducer({}, {
      type: types.CLEAR_NOTIFICATION,
      payload: {
      }
    })).toEqual({
    });
  });

  it('should handle SEARCH_POSTIT', () => {
    expect(reducer({}, {
      type: types.SEARCH_POSTIT,
      payload: {
        result: 'results'
      }
   })).toEqual({
     result: 'results'
   });
  });

  it('should handle SET_SESSION_STATUS', () => {
    expect(reducer({}, {
      type: types.SET_SESSION_STATUS,
      payload: {
        sessionStatus: types.SessionStatus.LOGGED_IN 
      }
   })).toEqual({
     sessionStatus: types.SessionStatus.LOGGED_IN 
   });
  });

  it('should set error property on failed actions', () => {
    expect(reducer({}, {
      type: types.ADD_POST,
      payload: { posts: '' },
      error: { message: 'Post failed' }
    })).toEqual({
      posts: '',
      error: { message: 'Post failed' }
    });
  });
});
