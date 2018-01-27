import { combineReducers } from 'redux';
// import initialState from './stateSchema';
import {
  SET_ERROR_MESSAGE,
  SET_ACCOUNT_DETAILS,
  SET_STATUS,
  SELECT_GROUP,
  SELECT_PAGE,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_GROUPS,
  RECEIVE_GROUPS,
  REQUEST_USERS,
  RECEIVE_USERS,
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

function selectedPage(state = 'Home', action) {
  switch (action.type) {
    case  SELECT_PAGE: {
      return action.page;
    }
    default:
      return state;
  }
}

function selectedGroup(state = {}, action) {
  switch (action.type) {
    case SELECT_GROUP: {
      return action.group;
    }
    default:
      return state;
  }
}

function groups(
  state = {
    isFetching: false,
    byId: {},
    ids: []
  }, action) {
  switch (action.type) {
    case RECEIVE_GROUPS:
      return Object.assign({}, state, {
        isFetching: false,
        byId: action.groups.byId,
        ids: action.groups.ids
      });
    case REQUEST_GROUPS:
      return Object.assign({}, state, {
        isFetching: action.filter
      })
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
        byId: action.users.byId,
        ids: action.users.ids
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
        byId: action.posts.byId,
        ids: action.posts.ids
      })
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
    case RECEIVE_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        byId: action.users,
        ids: action.ids
      });
    case REQUEST_USERS:
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

function updateStatus(state = Status.SIGNED_OUT, action) {
  switch (action.type) {
    case SET_STATUS:
      return action.status;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts,
  users,
  groups,
  account,
  search,
  error,
  group: selectedGroup,
  page: selectedPage,
  status: updateStatus,
});

export default rootReducer