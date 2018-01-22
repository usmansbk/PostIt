import {
  ADD_POST,
  ADD_GROUP,
  ADD_MEMBER,
  ADD_NOTIFICATION,
  DELETE_POST,
  DELETE_GROUP,
  REMOVE_MEMBER,
  CLEAR_NOTIFICATION,
  SEARCH_POSTIT,
  SET_SESSION_STATUS,
  SessionStatus,
} from './Actions';

const initialState = {
  posts: {
    byId: {
      0: {
        message: 'Hello',
        id: 0,
        groupId: 0,
        authorId: 0,
        createdAt: '2018-07-12T22:29:29.901Z',
      }
    },
    id: [0]
  },

  members: {
    byId: {
      0: {
        username: 'usmansbk',
        id: 0,
        email: 'usmansbk@gmail.com',
        avatar: null
      },
    },
    id: [0]

  },

  groups: {
    byId: {
      0: {
        name: 'demo',
        CreatorId: 0,
        image: null,
        members: [0],
        purpose: 'A test state',
        createdAt: '2018-07-12T22:29:29.901Z'
      }
    },
    id: [0]
  },

  notifications: [
    {
      message: '3 new messages',
      createdAt: '2018-07-12T22:30:30.901Z',
      groupId: 0,
    }
  ],

  location: {
    name: 'Group',
    id: 0
  },

  account: {
    username: 'usmansbk',
    email: 'usmansbk@gmail.com',
    avatar: null,
    id: 0
  },

  search: [
    {
      username: 'kayode',
      email: 'kayode@partylawa.com',
      avatar: null,
      id: 1,
    }
  ]
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
  case SET_SESSION_STATUS:
    return Object.assign({}, state, {
      sessionStatus: action.payload.sessionStatus,
      error: action.error
    })
  default: 
    return state;
  }
}
