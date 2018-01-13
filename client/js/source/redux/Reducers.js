import {
  ADD_POST,
  ADD_GROUP,
  ADD_MEMBER,
  ADD_NOTIFICATION,
  DELETE_POST,
  DELETE_GROUP,
  REMOVE_MEMBER,
  CLEAR_NOTIFICATION,
  SEARCH_POSTIT
} from './Action';

const initialState = {
  groups: [],
  members: [],
  posts: [],
  notifications: [],
  result: [],
  error: undefined
};

export default function postItApp(state = initialState, action) {
  switch (action.type) {
  case DELETE_POST:
  case ADD_POST:
    return Object.assign({}, state, {
      posts: action.payload.posts,
      error: action.error
    })
  case DELETE_GROUP:
  case ADD_GROUP:
    return Object.assign({}, state, {
      groups: action.payload.groups,
      error: action.error
    })
  case REMOVE_MEMBER:
  case ADD_MEMBER:
    return Object.assign({}, state, {
      members: action.payload.members,
      error: action.error
    })
  case CLEAR_NOTIFICATION:
  case ADD_NOTIFICATION:
    return Object.assign({}, state, {
      notifications: action.payload.notifications,
      error: action.error
    })
  case SEARCH_POSTIT:
    return Object.assign({}, state, {
      result: action.payload.result,
      error: action.error
    })
  default: 
    return state;
  }
}
