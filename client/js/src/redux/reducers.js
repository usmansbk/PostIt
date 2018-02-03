import { combineReducers } from 'redux';
import { loadState } from '../helpers/persistState';
import {
  SET_ERROR_MESSAGE,
  SET_ACCOUNT_DETAILS,
  SET_STATUS,
  SET_SESSION,
  SELECT_GROUP,
  SELECT_PAGE,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_GROUPS,
  RECEIVE_GROUPS,
  REQUEST_USERS,
  RECEIVE_USERS,
  REQUEST_SEARCH,
  RECEIVE_SEARCH,
  USER_LOGOUT,
  USER_LOGIN,
  UPDATE_GROUP,
  REMOVE_GROUP,
  DELETE_POSTS,
  REMOVE_USER,
  Status
} from './actionTypes';

function error(state = null, action) {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return action.error
    default:
      return state
  }
}

function page(state = 'Home', action) {
  switch (action.type) {
    case  SELECT_PAGE: {
      return action.page;
    }
    default:
      return state;
  }
}

function group(state = null, action) {
  switch (action.type) {
    case SELECT_GROUP: {
      return action.group;
    }
    default:
      return state;
  }
}

function _add(prevState, newState) {
  return Object.assign({}, prevState, newState);
}

function _updateList(prevList, newList) {
  const copy = [...prevList];
  newList.forEach(item => {
    if (prevList.indexOf(+item) === -1) {
      copy.push(+item);
    }
  });
  return copy;
}

function _remove(prevState, id) {
  const copy = Object.assign({}, prevState);
  delete copy[id];
  return copy; 
}

function _removeId(list, id) {
  const index = list.indexOf(+id);
  const newList = list.slice(0, index).concat(list.slice(index+1));
  return newList;
}

function _removeByGroupId(prevState, id) {
  const byId = {};
  const ids = [];
  for (let key in prevState) {
    let post = prevState[key];
    if (post.groupId !== +id) {
      byId[key] = post;
      ids.push(post.id);
    }
  }
  return { byId, ids };
}

function _removeFromGroup(groups, action) {
  const { uid, gid } = action;
  const group = groups[gid];
  const members = group.Members;
  const index = members.indexOf(+uid);
  const newList = members.slice(0, index).concat(members.slice(index + 1));
  const updatedGroup = Object.assign({}, group, {
    Members: newList
  });
  const updatedGroups = Object.assign({}, groups, {
    [gid]: updatedGroup
  })
  return updatedGroups;
}

function groups(
  state = {
    isFetching: false,
    byId: {},
    ids: []
  }, action) {
  switch (action.type) {
    case RECEIVE_GROUPS:
    case UPDATE_GROUP:
      return Object.assign({}, state, {
        isFetching: false,
        byId: _add(state.byId, action.groups.byId),
        ids: _updateList(state.ids, action.groups.ids)
      });
    case REQUEST_GROUPS:
      return Object.assign({}, state, {
        isFetching: action.filter
      });
    case REMOVE_GROUP: {
      return Object.assign({}, state, {
        byId: _remove(state.byId, action.id),
        ids: _removeId(state.ids, action.id)
      });
    }
    case REMOVE_USER: {
      return Object.assign({}, state, {
        byId: _removeFromGroup(state.byId, action),
      })
    }
    default:
      return state;
  }
}

function users (
  state = {
    isFetching: false,
    byId: {},
    ids: []
  }, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        byId: _add(state.byId, action.users.byId),
        ids: _updateList(state.ids, action.users.ids)
      });
    case REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: action.filter
      });
    default:
      return state;
  }
}

function posts(
  state = {
    isFetching: false,
    byId: {},
    ids: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        byId: _add(state.byId, action.posts.byId),
        ids: _updateList(state.ids, action.posts.ids)
      })
    case DELETE_POSTS: {
      const result = _removeByGroupId(state.byId, action.id);
      return Object.assign({}, state, {
        byId: result.byId,
        ids:  result.ids
      })
    }
    default:
      return state;
  }
}

function search(
  state = {
    isFetching: false,
    byId: {},
    ids: []
  },
  action
) {
  switch (action.type) {
    case RECEIVE_SEARCH:
      return Object.assign({}, state, {
        isFetching: false,
        byId: action.search.byId,
        ids: action.search.ids
      });
    case REQUEST_SEARCH:
      return Object.assign({}, state, {
        isFetching: true
      })
    default:
      return state;
  }
}

function account(state = {}, action) {
  switch (action.type) {
    case SET_ACCOUNT_DETAILS:
      return action.account;
    default:
      return state;
  }
}

function status(state = Status.CLEAR, action) {
  switch (action.type) {
    case SET_STATUS:
      return action.status;
    default:
      return state;
  }
}

function session(state = Status.SIGNED_OUT, action) {
  switch(action.type) {
    case SET_SESSION:
      return action.session;
    default:
      return state;
  }
}
const reducers = {
  posts,
  users,
  groups,
  account,
  search,
  error,
  group,
  page,
  status,
  session
};


const postIt = combineReducers({ ...reducers });
let state;
const rootReducers = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state  = undefined
  }
  
  return postIt(state, action)
}
export default rootReducers;