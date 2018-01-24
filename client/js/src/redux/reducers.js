import { combineReducers } from 'redux';
import initialState from './stateSchema';
import {
  ADD_NOTIFICATION,
  CLEAR_NOTIFICATION,
  SET_ACCOUNT_DETAILS,
  SELECT_LOCATION,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_GROUPS,
  RECEVIE_GROUPS,
  REQUEST_USERS,
  RECEIVE_USERS,
} from './actionTypes';

function selectedLocation(state = initialState.location, action) {
  switch (action.type) {
    case SELECT_LOCATION: {
      return action.location;
    }
    default:
      return state;
  }
}

function posts(
  state = {
    isFetching: false,
    byId: {},
    pids: []
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
        byId: action.posts,
        pids: action.pids
      })
    default:
      return state;
  }
}

function users (
  state = {
    isFetching: false,
    byId: {},
    uids: []
  },
  action
) {
  switch (action.type) {
    case RECEIVE_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        byId: action.users,
        uids: action.uids
      });
    case REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: true
      });
    default:
      return state;
  }
}

function groups (
  state = {
    isFetching: false,
    byId: {},
    gids: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_GROUPS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEVIE_GROUPS:
      return Object.assign({}, state, {
        isFetching: false,
        byId: action.groups,
        gids: action.gids
      });
    default:
      return state;
  }
}

function search(
  state = {
    isFetching: false,
    byId: {},
    uids: []
  },
  action
) {
  switch (action.type) {
    case RECEIVE_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        byId: action.users,
        uids: action.uids
      });
    case REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: true
      })
    default:
      return state;
  }
}

function searchResult(state = initialState.search, action) {
  switch (action.type) {
    case REQUEST_USERS:
    case RECEIVE_USERS:
      return Object.assign({}, state, search(state, action));
    default:
      return state;
  }
}

function userGroups(state = initialState.groups, action) {
  switch (action.type) {
    case RECEVIE_GROUPS:
    case REQUEST_GROUPS:
      return Object.assign({}, state, groups(groups, action));
    default:
      return state;
  }
}

function getUsers(state = initialState.users, action) {
  switch (action.type) {
    case REQUEST_USERS:
    case RECEIVE_USERS:
      return Object.assign({}, state, users(state, action));
    default:
      return state;
  }
}

function groupPosts(state = initialState.posts, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, posts(state, action));
    default:
      return state;
  }
}

function accountDetails(state = initialState.account, action) {
  switch (action.type) {
    case SET_ACCOUNT_DETAILS:
      return Object.assign({}, state, action.action);
    default:
      return state;
  }
}

function notifications(state = initialState.notifications, action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
    case CLEAR_NOTIFICATION:
      return Object.assign({}, state, action.notifications);
    default:
      return state; 
  }
}

const rootReducer = combineReducers({
  posts: groupPosts,
  users: getUsers,
  groups: userGroups,
  search: searchResult,
  account: accountDetails,
  notifications: notifications,
  location: selectedLocation
});

export default rootReducer