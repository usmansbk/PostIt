/*
 * User interaction action types
 */
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';
export const SELECT_LOCATION = 'SELECT_LOCATION';
export const SET_ACCOUNT_DETAILS = 'SET_ACCOUNT_DETAILS';

/*
 * Network interaction action types
 */
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_GROUPS = 'REQUEST_GROUPS';
export const RECEIVE_GROUPS = 'REQUEST_GROUPS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REQUEST_USERS = 'REQUEST_USERS';

export function requestGroups(location) {
  return {
    type: REQUEST_GROUPS,
    location
  }
}

export function receiveGroups(groups, gids) {
  return {
    type: RECEIVE_GROUPS,
    groups,
    gids
  }
}

export function requestUsers(location) {
  return {
    type: REQUEST_USERS,
    location
  }
}

export function receiveUsers(users, uids) {
  return {
    type: RECEIVE_USERS,
    users,
    uids
  }
}

export function requestPosts(location) {
  return {
    type: REQUEST_POSTS,
    location
  }
}

export function receivePosts(posts, pids) {
  return {
    type: RECEIVE_POSTS,
    posts: posts,
    pids
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

export function setLocation(location) {
  return {
    type: SELECT_LOCATION,
    location
  }
}

export function setAccountDetails(account) {
  return {
    type: SET_ACCOUNT_DETAILS,
    account
  }
}