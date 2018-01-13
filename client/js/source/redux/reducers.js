import {
  ADD_POST,
  ADD_GROUP,
  ADD_MEMBER,
  ADD_NOTIFICATION,
  DELETE_POST,
  DELETE_GROUP,
  REMOVE_MEMBER,
  CLEAR_NOTIFICATION
} from './actions';

const initialState = {
  groups: {},
  members: {},
  posts: {},
  notifications: []
};

export default function postItApp(state = initialState, action) {
  switch (action.type) {
  case DELETE_POST:
  case ADD_POST:
    return Object.assign({}, state, {
      posts: action.posts
    })
  case DELETE_GROUP:
  case ADD_GROUP:
    return Object.assign({}, state, {
      groups: action.groups
    })
  case REMOVE_MEMBER:
  case ADD_MEMBER:
    return Object.assign({}, state, {
      members: action.members
    })
  case CLEAR_NOTIFICATION:
  case ADD_NOTIFICATION:
    return Object.assign({}, state, {
      notifications: action.notifications
    })
  default: 
    return state;
  }
}
