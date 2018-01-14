import * as actions from '../../source/redux/Actions';

describe('actions', () => {
  it('should create an action to add a post', () => {
    const posts = 'Hello post';
    const expectedAction = {
      type: actions.ADD_POST,
      payload: {
        posts
      },
      error: null
    }
    expect(actions.addPost(posts, null)).toEqual(expectedAction)
  });

  it('should create an action to add a group', () => {
    const groups  = 'New group';
    const expectedAction = {
      type: actions.ADD_GROUP,
      payload: {
        groups 
      },
      error: null
    }
    expect(actions.addGroup(groups, null)).toEqual(expectedAction)
  });

  it('should create an action to add a member', () => {
    const members  = 'New member';
    const expectedAction = {
      type: actions.ADD_MEMBER,
      payload: {
        members 
      },
      error: null
    }
    expect(actions.addMember(members, null)).toEqual(expectedAction)
  });

  it('should create an action to remove member', () => {
    const members  = 'New member';
    const expectedAction = {
      type: actions.REMOVE_MEMBER,
      payload: {
        members 
      },
      error: null
    }
    expect(actions.removeMember(members, null)).toEqual(expectedAction)
  });

  it('should create an action to delete post', () => {
    const posts  = 'posts';
    const expectedAction = {
      type: actions.DELETE_POST,
      payload: {
       posts 
      },
      error: null
    }
    expect(actions.deletePost(posts, null)).toEqual(expectedAction)
  });

  it('should create an action to delete group', () => {
    const groups  = 'groups';
    const expectedAction = {
      type: actions.DELETE_GROUP,
      payload: {
        groups 
      },
      error: null
    }
    expect(actions.deleteGroup(groups, null)).toEqual(expectedAction)
  });

  it('should create an action to add notification', () => {
    const notifications  = 'notifications';
    const expectedAction = {
      type: actions.ADD_NOTIFICATION,
      payload: {
       notifications 
      },
      error: null
    }
    expect(actions.addNotification(notifications, null)).toEqual(expectedAction)
  });

  it('should create an action to clear notification', () => {
    const notifications  = 'notifications';
    const expectedAction = {
      type: actions.CLEAR_NOTIFICATION,
      payload: {
       notifications 
      },
      error: null
    }
    expect(actions.clearNotification(notifications, null)).toEqual(expectedAction)
  });

  it('should create an action to search postit', () => {
    const search  = 'username';
    const expectedAction = {
      type: actions.SEARCH_POSTIT,
      payload: {
       result: search
      },
      error: null
    }
    expect(actions.searchPostit(search, null)).toEqual(expectedAction)
  });

  it('should create an action to change session status', () => {
    const sessionStatus  = actions.SessionStatus.LOGGED_IN;
    const expectedAction = {
      type: actions.SET_SESSION_STATUS,
      payload: {
        sessionStatus
      },
      error: null
    }
    expect(actions.setSessionStatus(sessionStatus,  null)).toEqual(expectedAction)
  });

});
