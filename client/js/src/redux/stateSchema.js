const { normalize, schema } = require('normalizr');

function simplify_groups(data) {
  const state      = {};
  const { result } = data;
  const { groups }  = data.entities;

  state.byId = Object.assign({}, groups);
  state.ids  = [...result];
  return state;
}

/*
 * Server returns a flat array response when request for only posts of a given group.
 * This function goes ahead and simplifies it.
 */
function simplify_messages(data) {
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

function simplify_generic(data) {
  const state = {};
  state.byId  = data;
  state.ids   = [];
  for (let key in data) {
    state.ids.push(key);
  }
  return state;
}

function simplify_account(response) {
  const id = response.result;
  const data = response.entities.user[id];
  const state = {};
  state.username = data.username;
  state.email = data.email;
  state.createdAt = data.createdAt;
  state.id = data.id;
  return state;
}
 

export const simplify = {};

simplify.account = simplify_account;
simplify.groups = simplify_groups;
simplify.groupsEntity = simplify_generic;
simplify.users  = simplify_generic;
simplify.posts   = simplify_generic;
simplify.messages = simplify_messages;


const user_entity = new schema.Entity('users');
const post_entity = new schema.Entity('posts', {
  author: user_entity
});
const posts_entity   = [ post_entity ]
const members_entity = [ user_entity ];
const group_entity   = new schema.Entity('groups', {
  Creator: user_entity,
  Posts: posts_entity,
  Members: members_entity
});
const groups_schema = [ group_entity ];

export function normalizeUser(response) {
  const user = new schema.Entity('user', {
    Groups: groups_schema
  });
  const result = normalize(response, user);
  return result;
}

export function normalizeGroups(response) {
  const result = normalize(response, groups_schema);
  return result
}