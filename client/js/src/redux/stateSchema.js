const initialState = {
  error: '',
  posts: {
    isFetching: false,
    byId: {
      0: {
        message: 'Hello',
        id: 0,
        groupId: 0,
        authorId: 0,
        createdAt: '2018-01-21T22:29:29.901Z',
      }
    },
    pids: [0]
  },

  users: {
    isFetching: false,
    byId: {
      0: {
        username: 'usmansbk',
        id: 0,
        email: 'usmansbk@gmail.com',
        avatar: null
      },
    },
    uids: [0]

  },

  groups: {
    isFetching: false,
    byId: {
      0: {
        name: 'demo',
        CreatorId: 0,
        image: null,
        members: [0],
        purpose: 'A test state',
        createdAt: '2018-01-12T22:29:29.901Z'
      }
    },
    gids: [0]
  },

  search: {
    isFetching: false,
    byId: {
      0: {
          username: 'kayode',
          email: 'kayode@partylawa.com',
          avatar: null,
          id: 0,
        }
    },
    uids: [0]
  },

  notifications: [    {
      message: '3 new messages',
      createdAt: '2018-01-12T22:30:30.901Z',
      groupId: 0,
    }
  ],

  group: 0,

  account: {
    username: 'usmansbk',
    email: 'usmansbk@gmail.com',
    avatar: null,
    id: 0
  },

};
export default initialState;