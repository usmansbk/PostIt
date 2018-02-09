import formurlencoded from 'form-urlencoded';
import fetch from 'isomorphic-fetch';
import io from 'socket.io-client';
import store from '../PostIt';
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
    removeUser,
    setAccountDetails,
    setErrorMessage,
    setStatus,
    setSession,
    Status,
    login
} from './actionTypes';

const PORT = process.env.PORT || 8888;
const END_POINT = `http://localhost:${PORT}`;
const socket = io(END_POINT);

const inGroup = (id) => {
    const state = store.getState();
    const myGroups = state.groups;
    const inGroup = myGroups.byId[id];
    return inGroup;
}

socket.on(Status.MESSAGE_POSTED, (data) => {
    const { id } = data;
    if (inGroup(id))
        store.dispatch(fetchPosts(id))
});
socket.on(Status.GROUP_UPDATED, (data) => {
    if (inGroup(data.id))
        store.dispatch(fetchGroups(Filter.ALL))
});
socket.on(Status.GROUP_DELETED, (data) => {
    const { id } = data;
    if (inGroup(id)) {
        store.dispatch(deleteGroupPosts(id));
        store.dispatch(removeGroup(id));
    }
});
socket.on(Status.USER_REMOVED, (data) => {
    const { gid, uid } = data;
    if (inGroup(gid)) {
        store.dispatch(removeUser(uid, gid))
    }
});
socket.on(Status.USER_ADDED, (data) => {
    const { id, invites } = data;
    if ((invites === store.getState().account.username) || inGroup(id)) {
        store.dispatch(fetchGroups(Filter.ALL));
        store.dispatch(fetchPosts(id));
    }
})

function postForm(url, json) {
    const form = formurlencoded(json);
    return fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        }),
        body: form,
        credentials: 'include',
    })
}

function patchForm(url, json) {
    const form = formurlencoded(json);
    return fetch(url, {
        method: 'PATCH',
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        }),
        body: form,
        credentials: 'include',
    })
}

function deleteUrl(url) {
    return fetch(url, {
        method: 'DELETE',
        credentials: 'include',
    })
}

function leaveUrl(url) {
    return fetch(url, {
        method: 'PATCH',
        credentials: 'include',
    })
}

function get(url) {
    return fetch (url, {
        method: 'GET',
        credentials: 'include',
    })
}


export function addUserTo(gid, invites) {
    return function (dispatch) {
        const groupUrl = `/api/group/${gid}/user`
            , form = {
                invites 
            };
        dispatch(setStatus(Status.ADD_USER));
        postForm(groupUrl, form)
        .then(response => {
            if (response.ok) dispatch(setStatus(Status.USER_ADDED));
            else return Promise.reject();
        })
        .then(() => socket.emit(Status.USER_ADDED, { id: gid, invites }))
        .catch(error => dispatch(setErrorMessage(Status.FAILED_TO_ADD_USER)))
    }
}

export function requestUpdateGroup(form) {
    return function (dispatch) {
        const url = `/api/group/`
        dispatch(setStatus(Status.UPDATING_GROUP));
        patchForm(url, form)
        .then(response => {
            if (response.ok) dispatch(setStatus(Status.GROUP_UPDATED))
            else return Promise.reject();
        })
        .then(() => socket.emit(Status.GROUP_UPDATED, { id: store.getState().group }))
        .catch(error => dispatch(setErrorMessage(Status.FAILED_TO_UPDATE_GROUP)))
    }
}

export function requestRemoveUser(uid, gid) {
    return function (dispatch) {
        const url = `/api/group/${gid}/remove?uid=${uid}`;
        leaveUrl(url)
        .then(response => {
            if (response.ok) dispatch(setStatus(Status.REMOVING_USER))
            else return Promise.reject();
        })
        .then(() => socket.emit(Status.USER_REMOVED, { uid, gid }))
        .catch(error => dispatch(setErrorMessage(Status.FAILED_TO_REMOVE_USER)))
    }
}

export function fetchUsers(filter) {
    return function (dispatch) {
        let simplifiedUsers;
        dispatch(requestSearch(filter));
        dispatch(requestUsers(filter));
        get(`/api/user/find?username=${filter}`)
        .then(response => {
            if (response.ok) return response.json();
            else return Promise.reject();
        })
        .then(json => {
            const { users } = json.data
                , normalizedUsers = normalizeUsers(users);
            simplifiedUsers = simplify.users(normalizedUsers.entities.users);
            dispatch(receiveSearch(simplifiedUsers));
        })
        .then(() => {
            if (simplifiedUsers.ids.length > 0) dispatch(setStatus(Status.SEARCH_FOUND));
            else dispatch(setStatus(Status.SEARCH_NOT_FOUND));
        })
        .catch(error => dispatch(setErrorMessage(Status.SEARCH_FAILED)))
    }
}

export function fetchGroups(filter) {
    return function (dispatch) {
        let simplifiedGroups;
        dispatch(requestGroups(filter));
        get(`/api/user/groups`)
        .then(response => {
            if (response.ok) return response.json();
            else return Promise.reject()
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
        get(`/api/user`)
        .then(response => {
            if (response.ok) return response.json();
            else return Promise.reject();
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
        .catch(error => {
            console.log(error);
            dispatch(setErrorMessage(Status.FAILED_TO_FETCH_ALL))
        })
    }
}

export function fetchPosts(filter) {
    const postUrl = `/api/group/${filter}/messages`;
    return function (dispatch) {
        dispatch(requestPosts(filter));
        get(postUrl)
        .then(response => {
            if (response.ok) return response.json();
            else return Promise.reject();
        })
        .then(json => {
            const { posts }  = json.data;
            const simplified = simplify.messages(posts);
            dispatch(receivePosts(simplified));
        })
        .catch(error => {
            console.log(error);
            dispatch(setErrorMessage(Status.FAILED_TO_FETCH_POSTS))
        })
    }
}

export function postMessage(data) {
    const id = data.gid;
    return function (dispatch) {
        dispatch(setStatus(Status.POSTING_MESSAGE));
        postForm(`/api/group/${id}/message`, data)
        .then(response => {
            if (response.ok) dispatch(setStatus(Status.MESSAGE_POSTED));
            else return Promise.reject();
        })
        .then(() => socket.emit(Status.MESSAGE_POSTED, { id }))
        .catch(error => {
            console.log(error)
            dispatch(setErrorMessage(Status.FAILED_TO_POST_MESSAGE))
        })
    }
}

export function createGroup(data) {
    return function (dispatch) {
        dispatch(setStatus(Status.CREATING_GROUP));
        postForm(`/api/group`, data)
        .then(response => {
            if (response.ok) dispatch(setStatus(Status.GROUP_CREATED))
            else return Promise.reject();
        })
        .then(() => dispatch(fetchGroups(Filter.ALL)))
        .catch(error => dispatch(setErrorMessage(Status.CREATE_GROUP_FAILED)));
    }
}

export function deleteGroup(id) {
    return function (dispatch) {
        dispatch(setStatus(Status.DELETING_GROUP));
        deleteUrl(`/api/group/${id}`)
        .then(response => {
            if (response.ok) dispatch(setStatus(Status.GROUP_DELETED))
            else return Promise.reject();
        })
        .then(() => socket.emit(Status.GROUP_DELETED, { id }))
        .catch(error => dispatch(setErrorMessage(Status.FAILED_TO_DELETE_GROUP)));
    }
}

export function leaveGroup(id) {
    return function (dispatch) {
        dispatch(setStatus(Status.DELETING_GROUP));
        leaveUrl(`/api/group/${id}`)
        .then(response => {
            if (response.ok) dispatch(setStatus(Status.GROUP_DELETED))
            else return Promise.reject();
        })
        .then(() => dispatch(removeGroup(id)))
        .then(() => socket.emit(Status.USER_REMOVED, { gid: id, uid: store.getState().account.id }))
        .catch(error => dispatch(setErrorMessage(Status.FAILED_TO_DELETE_GROUP)));
    }
}

export function signUp(data) {
    return function (dispatch) {
        dispatch(setSession(Status.SIGNING_UP));
        postForm(`/api/user/signup`, data)
        .then(response => {
            if (response.ok) dispatch(setSession(Status.SIGNED_UP))
            else return Promise.reject();
        })
        .then(() => dispatch(signIn(data)))
        .catch(error => dispatch(setSession(Status.SIGNUP_FAILED)));
    }
}

export function signIn(data) {
    return function (dispatch) {
        dispatch(setSession(Status.SIGNING_IN));
        return postForm(`/api/user/signin`, data)
        .then(response => {
            if (response.ok) return dispatch(setSession(Status.SIGNED_IN));
            else return Promise.reject();
        })
        .then(() => dispatch(login()))
        .then(() => dispatch(fetchAll(Filter.ALL)))
        .catch(error => dispatch(setSession(Status.SIGNIN_FAILED, Status)));
    }
}
