import formurlencoded from 'form-urlencoded';
import fetch from 'isomorphic-fetch';
import { normalizeGroups, normalizeUser, normalizeUsers, simplify } from './stateSchema';

import {
	Filter,
	deleteGroupPosts,
	requestGroups,
	receiveGroups,
	requestPosts,
	receivePosts,
	requestUsers,
	receiveUsers,
	requestSearch,
	receiveSearch,
	removeGroup,
	setAccountDetails,
	setErrorMessage,
	setStatus,
	setSession,
	Status
} from './actionTypes';

const port = 8888;
const url  = `http://localhost:${port}/api`;

function postForm(url, json) {
	const form = formurlencoded(json);
	return fetch(url, {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/x-www-form-urlencoded',
		}),
		body: form,
		credentials: 'include'
	})
}

function deleteUrl(url) {
	return fetch(url, {
		method: 'DELETE',
		credentials: 'include'
	})
}

function get(url) {
	return fetch (url, {
		method: 'GET',
		credentials: 'include'
	})
}

export function addUserTo(gid, invites) {
	return function (dispatch) {
		const groupUrl = `${url}/group/${gid}/user`
		    , form = {
		    	invites 
		    };
		dispatch(setStatus(Status.ADD_USER));
		postForm(groupUrl, form)
		.then(response => {
			if (response.ok) {
				dispatch(setStatus(Status.USER_ADDED));
			} else {
				return Promise.reject();
			}
		})
		.then(() => dispatch(fetchGroups(gid)))
		.catch(error => dispatch(setErrorMessage(Status.FAILED_TO_ADD_USER)))
	}
}

export function fetchUsers(filter) {
	return function (dispatch) {
		let simplifiedUsers;
		dispatch(requestSearch(filter));
		dispatch(requestUsers(filter));
		get(`${url}/user/find?username=${filter}`)
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				return Promise.reject();
			}
		})
		.then(json => {
			const { users } = json.data
			    , normalizedUsers = normalizeUsers(users);
			simplifiedUsers = simplify.users(normalizedUsers.entities.users);
			dispatch(receiveSearch(simplifiedUsers));
		})
		.then(() => {
			if (simplifiedUsers.ids.length > 0)
				dispatch(setStatus(Status.SEARCH_FOUND));
			else
				dispatch(setStatus(Status.SEARCH_NOT_FOUND));
		})
		.catch(error =>	dispatch(setErrorMessage(Status.SEARCH_FAILED)))
	}
}

export function fetchGroups(filter) {
	return function (dispatch) {
		let simplifiedGroups;
		dispatch(requestGroups(filter));
		get(`${url}/user/groups`)
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				return Promise.reject()
			}
		})
		.then(json => {
			const { groups } = json.data
			    , normalizedGroups = normalizeGroups(groups);
			simplifiedGroups = simplify.groups(normalizedGroups);
			const simplifiedUsers  = simplify.users(normalizedGroups.entities.users);
			dispatch(receiveUsers(simplifiedUsers));
		})
		.then(() => dispatch(receiveGroups(simplifiedGroups)))
		.catch(error => dispatch(setErrorMessage(Status.FAILED_TO_FETCH_GROUPS)))
	}
}

export function fetchAll(filter) {
	return function(dispatch) {
		let simplifiedAccount
		  , simplifiedUsers
		  , simplifiedGroups
		  , simplifiedPosts;

		dispatch(requestPosts(filter));
		dispatch(requestGroups(filter));
		get(`${url}/user`)
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				return Promise.reject();
			}
		})
		.then(json => {
			const { user }   = json.data
			    , normalized = normalizeUser(user);
			simplifiedAccount = simplify.account(normalized)
			simplifiedGroups  = simplify.groupsEntity(normalized.entities.groups)
			simplifiedUsers   = simplify.users(normalized.entities.users)
			simplifiedPosts   = simplify.posts(normalized.entities.posts);
		})
		.then(() => dispatch(setAccountDetails(simplifiedAccount)))
		.then(() => dispatch(receiveUsers(simplifiedUsers)))
		.then(() => dispatch(receiveGroups(simplifiedGroups)))
		.then(() => dispatch(receivePosts(simplifiedPosts)))
		.catch(error => dispatch(setErrorMessage(Status.FAILED_TO_FETCH_ALL)))
	}
}

export function fetchPosts(filter) {
	const postUrl = `${url}/group/${filter}/messages`;
	return function (dispatch) {
		dispatch(requestPosts(filter));
		get(postUrl)
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				return Promise.reject();
			}
		})
		.then(json => {
			const { posts }  = json.data;
			const simplified = simplify.messages(posts);
			dispatch(receivePosts(simplified));
		})
		.catch(error => dispatch(setErrorMessage(Status.FAILED_TO_FETCH_POSTS)))
	}
}

export function postMessage(data) {
	const id = data.gid;
	return function (dispatch) {
		dispatch(setStatus(Status.POSTING_MESSAGE));
		postForm(`${url}/group/${data.gid}/message`, data)
		.then(response => {
			if (response.ok) {
				dispatch(setStatus(Status.MESSAGE_POSTED));
			} else {
				return Promise.reject();
			}
		})
		.then(() => dispatch(fetchPosts(id)))
		.catch(error =>	dispatch(setErrorMessage(Status.FAILED_TO_POST_MESSAGE)))
	}
}

export function createGroup(data) {
	return function (dispatch) {
		dispatch(setStatus(Status.CREATING_GROUP));
		postForm(`${url}/group`, data)
		.then(response => {
			if (response.ok) {
				dispatch(setStatus(Status.GROUP_CREATED))
			} else {
				return Promise.reject();
			}
		})
		.then(() => dispatch(fetchGroups(Filter.ALL)))
		.catch(error => dispatch(setErrorMessage(Status.CREATE_GROUP_FAILED)));
	}
}

export function deleteGroup(id) {
	return function (dispatch) {
		dispatch(setStatus(Status.DELETING_GROUP));
		deleteUrl(`${url}/group/${id}`)
		.then(response => {
			if (response.ok)
				dispatch(setStatus(Status.GROUP_DELETED));
			else return Promise.reject();
		})
		.then(() => dispatch(deleteGroupPosts(id)))
		.then(() => dispatch(removeGroup(id)))
		.catch(error => {
			console.log(error);
			dispatch(setErrorMessage(Status.FAILED_TO_DELETE_GROUP))});
	}
}

export function signUp(data) {
	return function (dispatch) {
		dispatch(setSession(Status.SIGNING_UP));
		postForm(`${url}/user/signup`, data)
		.then(response => {
			if (response.ok){
				dispatch(setSession(Status.SIGNED_UP))
			} else {
				return Promise.reject();
			}
		})
		.then(() => dispatch(signIn(data)))
		.catch(error => dispatch(setSession(Status.SIGNUP_FAILED)));
	}
}

export function signIn(data) {
	return function (dispatch) {
		dispatch(setSession(Status.SIGNING_IN));
		postForm(`${url}/user/signin`, data)
		.then(response => {
			if (response.ok) {
				dispatch(setSession(Status.SIGNED_IN));
			} else {
				return Promise.reject();
			}
		}).then(() => dispatch(fetchAll(Filter.ALL)))
		.catch(error => dispatch(setSession(Status.SIGNIN_FAILED, Status)));
	}
}
