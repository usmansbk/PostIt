import * as actions from '../../src/redux/actionTypes';

describe('Error', () => {
  it('should create set error message action', () => {
    const expectedAction = {
      type: actions.SET_ERROR_MESSAGE,
      error: 'ERROR MESSAGE'
    };
    expect(actions.setErrorMessage('ERROR MESSAGE')).toEqual(expectedAction);
  })
});

describe('Groups', () => {
  it('should create a receive groups action', () => {
    const expectedAction = {
      type: actions.RECEIVE_GROUPS,
      groups: {}
    }
    expect(actions.receiveGroups({})).toEqual(expectedAction);
  })

  it('should create a request groups action', () => {
    const expectedAction = {
      type: actions.REQUEST_GROUPS,
      filter: 'ALL'
    }
    expect(actions.requestGroups(actions.Filter.ALL)).toEqual(expectedAction);
  })

  it('should create a remove group action', () => {
    const expectedAction = {
      type: actions.REMOVE_GROUP,
      id: 1
    }
    expect(actions.removeGroup(1)).toEqual(expectedAction);
  })

  it('should create a delete group posts action', () => {
    const expectedAction = {
      type: actions.DELETE_POSTS,
      id: 1
    }
    expect(actions.deleteGroupPosts(1)).toEqual(expectedAction);
  })

  it('should create an update group action', () => {
    const expectedAction = {
      type: actions.UPDATE_GROUP,
      id: 1
    }
    expect(actions.updateGroup(1)).toEqual(expectedAction);
  })
})

describe('Users', () => {
  it('should create a receive users action', () => {
    const expectedAction = {
      type: actions.RECEIVE_USERS,
      users: {}
    }
    expect(actions.receiveUsers({})).toEqual(expectedAction);
  })

  it('should create a request users action', () => {
    const expectedAction = {
      type: actions.REQUEST_USERS,
      filter: 'ALL'
    }
    expect(actions.requestUsers(actions.Filter.ALL)).toEqual(expectedAction);
  })

  it('should create a remove user action', () => {
    const expectedAction = {
      type: actions.REMOVE_USER,
      uid: 1,
      gid: 2
    }
    expect(actions.removeUser(1, 2)).toEqual(expectedAction);
  })
})

describe('Posts', () => {
  it('should create a receive posts action', () => {
    const expectedAction = {
      type: actions.RECEIVE_POSTS,
      posts: {}
    }
    expect(actions.receivePosts({})).toEqual(expectedAction);
  })

  it('should create a request posts action', () => {
    const expectedAction = {
      type: actions.REQUEST_POSTS,
      filter: 'ALL'
    }
    expect(actions.requestPosts(actions.Filter.ALL)).toEqual(expectedAction);
  })
})

describe('Search', () => {
  it('should create a receive search action', () => {
    const expectedAction = {
      type: actions.RECEIVE_SEARCH,
      search: {}
    }
    expect(actions.receiveSearch({})).toEqual(expectedAction);
  })

  it('should create a request search action', () => {
    const expectedAction = {
      type: actions.REQUEST_SEARCH,
      filter: 'USERNAME'
    }
    expect(actions.requestSearch('USERNAME')).toEqual(expectedAction);
  })
})

describe('User interactions', () => {
  it('should create a set group action', () => {
    const expectedAction = {
      type: actions.SELECT_GROUP,
      group: 1
    }
    expect(actions.setGroup(1)).toEqual(expectedAction);
  })

  it('should create a set page action', () => {
    const expectedAction = {
      type: actions.SELECT_PAGE,
      page: 'Home'
    }
    expect(actions.setPage('Home')).toEqual(expectedAction);
  })

  it('should create set account details action', () => {
    const expectedAction = {
      type: actions.SET_ACCOUNT_DETAILS,
      account: {}
    }
    expect(actions.setAccountDetails({})).toEqual(expectedAction);
  })

  it('should create a set session action', () => {
    const expectedAction = {
      type: actions.SET_SESSION,
      session: 'OFFLINE'
    }
    expect(actions.setSession('OFFLINE')).toEqual(expectedAction);
  })

  it('should create a set status action', () => {
    const expectedAction = {
      type: actions.SET_STATUS,
      status: ''
    }
    expect(actions.setStatus('')).toEqual(expectedAction);
  })

  it('should create a logout action', () => {
    const expectedAction = {
      type: actions.USER_LOGOUT,
    }
    expect(actions.logout()).toEqual(expectedAction);
  })

  it('should create a login action', () => {
    const expectedAction = {
      type: actions.USER_LOGIN,
    }
    expect(actions.login()).toEqual(expectedAction);
  })
})