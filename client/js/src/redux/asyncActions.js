import formurlencoded from 'form-urlencoded';
import fetch from 'isomorphic-fetch';
import { normalizeGroup, simplify } from './stateSchema';

import {
	Filter,
	requestGroups,
	receiveGroups,
	requestPosts,
	receivePosts,
	receiveUsers,
	setAccountDetails,
	setErrorMessage,
	setStatus,
	Status
} from './actionTypes';

const port = 8888;
const url = `http://localhost:${port}/api`;

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

export function fetchGroups(filter) {
	return function (dispatch) {
		dispatch(requestGroups(filter));
		get(`${url}/user/groups`)
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error('Failed to retrieve groups');
			}
		})
		.then(json => {
			const { groups } = json.data;
			const normalizedGroups = normalizeGroup(groups);
			const simpleGroups = simplify.groups(normalizedGroups);
			const users = simplify.users(normalizedGroups.entities.users);
			console.log(users);
			dispatch(receiveUsers(users));
			dispatch(receiveGroups(simpleGroups));
		})
		.catch(error => {
			console.error('Error', error);
			dispatch(setStatus(Status.FAILED_TO_FETCH_GROUPS));
		})
	}
}

export function fetchPosts(filter) {
	return function (dispatch) {
		dispatch(requestPosts(filter));
		get(`${url}/group/${filter}/messages`)
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error('Failed to retrieve posts');
			}
		})
		.then(json => {
			const { posts } = json.data;
			const simplified = simplify.posts(posts);
			dispatch(receivePosts(simplified));
		})
		.catch(error => {
			console.error('Error', error);
			dispatch(setStatus(Status.FETCHED_POSTS));
		})
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
				throw new Error('Failed to post message');
			}
		})
		.then(json => {
			dispatch(setStatus(Status.MESSAGE_POSTED));
			dispatch(fetchPosts(id));
		})
		.catch(error => {
			console.log('Error', error);
			dispatch(setStatus(Status.FAILED_TO_POST_MESSAGE));
		})
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
				throw new Error('Failed to create group');
			}
		})
		.then(json => {
			const { result } = json.data;
			dispatch(setStatus(Status.GROUP_CREATED));
			dispatch(fetchGroups(Filter.ALL));
		})
		.catch(error => {
			dispatch(setStatus(Status.CREATE_GROUP_FAILED));
		});
	}
}

export function signUp(data) {
	return function (dispatch) {
		dispatch(setStatus(Status.SIGNING_UP));
		postForm(`${url}/user/signup`, data)
		.then(response => {
			if (response.ok){
				dispatch(setStatus(Status.SIGNED_UP))
			} else {
				throw new Error('Sign up failed');
			}
			return response.json();
		})
		.then(json =>	{
			const { user } = json.data;
			dispatch(setAccountDetails(user));
		})
		.catch(error => {
			dispatch(setStatus(Status.SIGNUP_FAILED))
		});
	}
}

export function signIn(data) {
	return function (dispatch) {
		dispatch(setStatus(Status.SIGNING_IN));
		postForm(`${url}/user/signin`, data)
		.then(response => {
			if (response.ok) {
				dispatch(setStatus(Status.SIGNED_IN));
			} else {
				throw new Error('Sign in failed');
			}
			return response.json();
		}, error => console.error('Error:', error))
		.then(json => {
			const {user} = json.data;
			dispatch(setAccountDetails(user));
		}).catch(error => {
			dispatch(setStatus(Status.SIGNIN_FAILED))
		});
	}
}
