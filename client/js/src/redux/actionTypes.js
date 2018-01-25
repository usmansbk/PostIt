/*
 * User interaction action types
 */
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';
export const SELECT_GROUP = 'SELECT_GROUP';
export const SELECT_PAGE = 'SELECT_PAGE';
export const SET_ACCOUNT_DETAILS = 'SET_ACCOUNT_DETAILS';
export const CREATING_ACCOUNT = 'CREATING_ACCOUNT';
export const SET_STATUS = 'SET_STATUS';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

/*
 * Network interaction action types
 */
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_GROUPS = 'REQUEST_GROUPS';
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REQUEST_USERS = 'REQUEST_USERS';

export const Status = {
  SIGNING_UP: 'SIGNING_UP',
  SIGNING_IN: 'SIGNING_IN',
  SIGNED_UP: 'SIGNED_UP',
  SIGNED_IN: 'SIGNED_IN',
  SIGNED_OUT: 'SIGNED_OUT',
  SIGNIN_FAILED: 'SIGNIN_FAILED',
  SIGNUP_FAILED: 'SIGNUP_FAILED',
  CREATE_GROUP: 'CREATE_GROUP',
  CREATING_GROUP: 'CREATING_GROUP',
  GROUP_CREATED: 'GROUP_CREATED',
  CREATE_GROUP_FAILED: 'CREATE_GROUP_FAILED',
  FAILED_TO_FETCH_GROUPS: 'FAILED_TO_FETCH_GROUPS'
};

export const GroupsFilter = {
  ALL: 'ALL',
  OWNER: 'OWNER'
}

export function setErrorMessage(message) {
  return {
    type: SET_ERROR_MESSAGE,
    error: message
  }
}

export function requestGroups(filter) {
  return {
    type: REQUEST_GROUPS,
    filter
  }
}

export function receiveGroups(groups) {
  return {
    type: RECEIVE_GROUPS,
    groups
  }
}

export function requestUsers(filter) {
  return {
    type: REQUEST_USERS,
    filter
  }
}

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function requestPosts(gid) {
  return {
    type: REQUEST_POSTS,
    gid
  }
}

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts: posts
  }
}

// User Interaction
export function addNotification(notifications) {
  return {
    type: ADD_NOTIFICATION,
    notifications
  };
}

export function clearNotification(notifications) {
  return {
    type: CLEAR_NOTIFICATION,
    notifications
  };
}

export function setGroup(group) {
  return {
    type: SELECT_GROUP,
    group
  }
}

export function setPage(page) {
  return {
    type: SELECT_PAGE,
    page
  }
}

export function setAccountDetails(account) {
  return {
    type: SET_ACCOUNT_DETAILS,
    account
  }
}

export function setStatus(status) {
  return {
    type: SET_STATUS,
    status
  }
}