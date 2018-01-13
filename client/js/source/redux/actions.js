/*
 * action types
 */
export const ADD_POST = 'ADD_POST';
export const ADD_GROUP = 'ADD_GROUP';
export const ADD_MEMBER = 'ADD_MEMBER';
export const REMOVE_POST = 'REMOVE_POST';
export const REMOVE_USER = 'REMOVE_USER';
export const REMOVE_GROUP = 'REMOVE_GROUP';

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

export function addGroup(groups, error) {
  return {
    type: ADD_GROUP,
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

function _remove(type, index, error) {
  return {
    type,
    payload: { index },
    error
  };
}

export function removePost(index, error) {
  return _remove(REMOVE_POST, index, error);
}

export function removeUser(index, error) {
  return _remove(REMOVE_USER, index, error);
}

export function removeGroup(index, error) {
  return _remove(REMOVE_GROUP, index, error);
}
