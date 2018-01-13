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
      posts
    },
    error
  };
}

export function deleteGroup(groups, error) {
  return {
    type: DELETE_GROUP,
    payload: {
      posts
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
