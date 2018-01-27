const { normalize, schema } = require('normalizr');

function simplifyGroups(data) {

  const state = {};
  const { result } = data;
  const { group } = data.entities;

  state.byId = Object.assign({}, group);
  state.ids = [...result];
  return state;
}

function posts(data) {
  const state = {};
  const byId  = {};
  const ids   = [];
  data.forEach(post => {
    const id = post.id;
    byId[id] = post;
    ids.push(id);
  });
  state.byId = byId;
  state.ids  = ids;
  return state;
}

function users(data) {
  const state = {};
  state.byId = data;
  state.ids = [];
  for (let key in data) {
    state.ids.push(key);
  }
  return state;
}

export const simplify = {};

simplify.groups = simplifyGroups;
simplify.users = users;
simplify.posts = posts;

export function normalizeGroup(response) {
  const user = new schema.Entity('users');
  const members = [ user ]
  const group = new schema.Entity('group', {
    Creator: user,
    Members: members
  });
  const groups = [ group ];
  const result = normalize(response, groups);
  return result
}