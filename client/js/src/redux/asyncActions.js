import formurlencoded from 'form-urlencoded';
import fetch from 'isomorphic-fetch';
import { normalizeGroups, normalizeUser, normalizeUsers, simplify } from './stateSchema';

import {
	Filter,
	requestGroups,
	receiveGroups,
	requestPosts,
	receivePosts,
	requestUsers,
	receiveUsers,
	requestSearch,
	receiveSearch,
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

function get(url) {
	return fetch (url, {
		method: 'GET',
		credentials: 'include'
	})
}

function postUrl(url) {
	return fetch (url, {
		method: 'POST',
		credentials: 'include'
	})
}

export function addUserTo(url) {
	return function (dispatch) {
		dispatch(setStatus(Status.ADD_USER));
		postUrl(url)
		.then(response => {
			if (response.ok) {
				dispatch(setStatus(Status.USER_ADDED));
			} else {
				return Promise.reject();
			}
		})
		.catch(error => {
			console.log(error);
			dispatch(setErrorMessage(Status.FAILED_TO_ADD_USER));
		})
	}
}

export function fetchUsers(filter) {
	return function (dispatch) {
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
			    , normalizedUsers = normalizeUsers(users)
			    , simplifiedUsers = simplify.users(normalizedUsers.entities.users);
			dispatch(receiveSearch(simplifiedUsers));
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
			    , normalizedGroups = normalizeGroups(groups)
			    , simplifiedGroups = simplify.groups(normalizedGroups)
			    , simplifiedUsers  = simplify.users(normalizedGroups.entities.users);
			dispatch(receiveUsers(simplifiedUsers));
			dispatch(receiveGroups(simplifiedGroups));
		})
		.catch(error => dispatch(setErrorMessage(Status.FAILED_TO_FETCH_GROUPS)))
	}
}

export function fetchAll(filter) {
	return function(dispatch) {
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
			    , normalized = normalizeUser(user)
			    , simplifiedAccount = simplify.account(normalized)
			    , simplifiedGroups  = simplify.groupsEntity(normalized.entities.groups)
			    , simplifiedUsers   = simplify.users(normalized.entities.users)
			    , simplifiedPosts   = simplify.posts(normalized.entities.posts);
			dispatch(setAccountDetails(simplifiedAccount));
			dispatch(receiveUsers(simplifiedUsers));
			dispatch(receiveGroups(simplifiedGroups));
			dispatch(receivePosts(simplifiedPosts));
		})
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
				return response.json();
			} else {
				return Promise.reject();
			}
		})
		.then(json => {
			dispatch(setStatus(Status.MESSAGE_POSTED));
			dispatch(fetchPosts(id));
		})
		.catch(error =>	dispatch(setErrorMessage(Status.FAILED_TO_POST_MESSAGE)))
	}
}

export function createGroup(data) {
	return function (dispatch) {
		dispatch(setStatus(Status.CREATING_GROUP));
		postForm(`${url}/group`, data)
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				return Promise.reject();
			}
		})
		.then(json => {
			const { result } = json.data;
			dispatch(setStatus(Status.GROUP_CREATED));
			dispatch(fetchGroups(Filter.ALL));
		})
		.catch(error => dispatch(setErrorMessage(Status.CREATE_GROUP_FAILED)));
	}
}

export function signUp(data) {
	return function (dispatch) {
		dispatch(setStatus(Status.SIGNING_UP));
		postForm(`${url}/user/signup`, data)
		.then(response => {
			if (response.ok){
				dispatch(setSession(Status.LOGGED_IN))
				dispatch(setStatus(Status.SIGNED_UP))
				dispatch(fetchAll(Filter.ALL))
			} else {
				return Promise.reject();
			}
		})
		.catch(error => dispatch(setStatus(Status.SIGNUP_FAILED)));
	}
}

export function signIn(data) {
	return function (dispatch) {
		dispatch(setStatus(Status.SIGNING_IN));
		postForm(`${url}/user/signin`, data)
		.then(response => {
			if (response.ok) {
				dispatch(setSession(Status.LOGGED_IN));
				dispatch(setStatus(Status.SIGNED_IN));
				dispatch(fetchAll(Filter.ALL));
			} else {
				return Promise.reject();
			}
		})
		.catch(error => dispatch(setStatus(Status.SIGNIN_FAILED, Status)));
	}
}
