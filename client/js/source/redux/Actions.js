/*
 * action types
 */
export const ADD_POST = 'ADD_POST';
export const ADD_GROUP = 'ADD_GROUP';
export const ADD_MEMBER = 'ADD_MEMBER';
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';
export const DELETE_POST = 'DELETE_POST';
export const REMOVE_MEMBER = 'REMOVE_MEMBER';
export const DELETE_GROUP = 'DELETE_GROUP';
export const SEARCH_POSTIT = 'SEARCH_POSTIT';
export const SET_SESSION_STATUS = 'SET_SESSION_STATUS';

export const SessionStatus = {
  LOGGED_IN: 'LOGGED_IN',
  LOGGED_OUT: 'LOGGED_OUT'
}

/*
 * action creators
 * {
 *   type, error, payload
 * }
 * Flux Standard Actions
 */
export function addPost(posts, error) {
  return {
    type: ADD_POST,
    payload: {
      posts
    },
    error
  };  
}

export function deletePost(posts, error) {
  return {
    type: DELETE_POST,
    payload: {
      posts
    },
    error
  };  
}

export function addGroup(groups, error) {
  return {
    type: ADD_GROUP,
    payload: {
      groups 
    },
    error
  };
}

export function deleteGroup(groups, error) {
  return {
    type: DELETE_GROUP,
    payload: {
      groups
    },
    error
  };
}

export function addMember(members, error) {
  return {
    type: ADD_MEMBER,
    payload: {
      members
    },
    error
  };
}

export function removeMember(members, error) {
  return {
    type: REMOVE_MEMBER,
    payload: {
      members
    },
    error
  };
}

export function addNotification(notifications, error) {
  return {
    type: ADD_NOTIFICATION,
    payload: { notifications },
    error
  };
}

export function clearNotification(notifications, error) {
  return {
    type: CLEAR_NOTIFICATION,
    payload: { notifications },
    error
  };
}

export function searchPostit(result, error) {
  return {
    type: SEARCH_POSTIT,
    payload: { result },
    error
  };
}

export function setSessionStatus(sessionStatus, error) {
  return {
    type: SET_SESSION_STATUS,
    payload: { sessionStatus },
    error
  };
}