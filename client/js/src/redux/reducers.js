import { combineReducers } from 'redux';
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
        byId: _add(state.byId, action.groups.byId),
        ids: _updateList(state.ids, action.groups.ids)
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

export default reducers;