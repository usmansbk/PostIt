import formurlencoded from 'form-urlencoded';
import io from 'socket.io-client';
import 'isomorphic-fetch';
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

const SOCKET_URL = process.env.SOCKET_URL;
const PORT = process.env.PORT || 8888;
const END_POINT = SOCKET_URL || `http://localhost:${PORT}`;
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
    const form = formurlencoded(json)
        , token = localStorage.getItem('PostIt-token');
    return fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'authorization': `bearer ${token}`
        }),
        body: form,
        credentials: 'include',
    })
}

function patchForm(url, json) {
    const form = formurlencoded(json)
        , token = localStorage.getItem('PostIt-token');
    return fetch(url, {
        method: 'PATCH',
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'authorization': `bearer ${token}`
        }),
        body: form,
        credentials: 'include',
    })
}

function deleteUrl(url) {
    const token = localStorage.getItem('PostIt-token');
    return fetch(url, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'authorization': `bearer ${token}`
        }),
        credentials: 'include',
    })
}

function leaveUrl(url) {
    const token = localStorage.getItem('PostIt-token');
    return fetch(url, {
        method: 'PATCH',
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'authorization': `bearer ${token}`
        }),
        credentials: 'include',
    })
}

function get(url) {
    const token = localStorage.getItem('PostIt-token');
    return fetch (url, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'authorization': `bearer ${token}`
        }),
        credentials: 'include',
    })
}


export function addUserTo(gid, invites) {
    return (dispatch) => {
        const groupUrl = `/api/group/${gid}/user`
            , form = {
                invites 
            };
        dispatch(setStatus(Status.ADD_USER));
        return postForm(groupUrl, form)
        .then(response => {
            if (response.ok) dispatch(setStatus(Status.USER_ADDED));
            else return Promise.reject();
        })
        .then(() => socket.emit(Status.USER_ADDED, { id: gid, invites }))
        .catch(error => dispatch(setErrorMessage(Status.FAILED_TO_ADD_USER)))
    }
}

export function requestUpdateGroup(form) {
    return (dispatch) => {
        const url = `/api/group/`
        dispatch(setStatus(Status.UPDATING_GROUP));
        return patchForm(url, form)
        .then(response => {
            if (response.ok) dispatch(setStatus(Status.GROUP_UPDATED))
            else return Promise.reject();
        })
        .then(() => socket.emit(Status.GROUP_UPDATED, { id: store.getState().group }))
        .catch(error => dispatch(setErrorMessage(Status.FAILED_TO_UPDATE_GROUP)))
    }
}

export function requestRemoveUser(uid, gid) {
    return (dispatch) => {
        const url = `/api/group/${gid}/remove?uid=${uid}`;
        return leaveUrl(url)
        .then(response => {
            if (response.ok) dispatch(setStatus(Status.REMOVING_USER))
            else return Promise.reject();
        })
        .then(() => socket.emit(Status.USER_REMOVED, { uid, gid }))
        .catch(error => dispatch(setErrorMessage(Status.FAILED_TO_REMOVE_USER)))
    }
}

export function fetchUsers(filter) {
    return (dispatch) => {
        let simplifiedUsers;
        dispatch(requestSearch(filter));
        dispatch(requestUsers(filter));
        return get(`/api/user/find?username=${filter}`)
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
    return (dispatch) => {
        let simplifiedGroups;
        dispatch(requestGroups(filter));
        return get(`/api/user/groups`)
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
    return (dispatch) => {
        let simplifiedAccount
          , simplifiedUsers
          , simplifiedGroups
          , simplifiedPosts;

        dispatch(requestPosts(filter));
        dispatch(requestGroups(filter));
        return get(`/api/user`)
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
        .catch(error => dispatch(setErrorMessage(Status.FAILED_TO_FETCH_ALL)))
    }
}

export function fetchPosts(filter) {
    const postUrl = `/api/group/${filter}/messages`;
    return (dispatch) => {
        dispatch(requestPosts(filter));
        return get(postUrl)
        .then(response => {
            if (response.ok) return response.json();
            else return Promise.reject();
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
    return (dispatch) => {
        dispatch(setStatus(Status.POSTING_MESSAGE));
        return postForm(`/api/group/${id}/message`, data)
        .then(response => {
            if (response.ok) dispatch(setStatus(Status.MESSAGE_POSTED));
            else return Promise.reject();
        })
        .then(() => socket.emit(Status.MESSAGE_POSTED, { id }))
        .catch(error => dispatch(setErrorMessage(Status.FAILED_TO_POST_MESSAGE)))
    }
}

export function createGroup(data) {
    return (dispatch) => {
        dispatch(setStatus(Status.CREATING_GROUP));
        return postForm(`/api/group`, data)
        .then(response => {
            if (response.ok) dispatch(setStatus(Status.GROUP_CREATED))
            else return Promise.reject();
        })
        .then(() => dispatch(fetchGroups(Filter.ALL)))
        .catch(error => dispatch(setErrorMessage(Status.CREATE_GROUP_FAILED)));
    }
}

export function deleteGroup(id) {
    return (dispatch) => {
        dispatch(setStatus(Status.DELETING_GROUP));
        return deleteUrl(`/api/group/${id}`)
        .then(response => {
            if (response.ok) dispatch(setStatus(Status.GROUP_DELETED))
            else return Promise.reject();
        })
        .then(() => socket.emit(Status.GROUP_DELETED, { id }))
        .catch(error => dispatch(setErrorMessage(Status.FAILED_TO_DELETE_GROUP)));
    }
}

export function leaveGroup(id) {
    return (dispatch) => {
        dispatch(setStatus(Status.DELETING_GROUP));
        return leaveUrl(`/api/group/${id}`)
        .then(response => {
            if (response.ok) dispatch(setStatus(Status.GROUP_DELETED))
            else return Promise.reject();
        })
        .then(() => dispatch(deleteGroupPosts(id)))
        .then(() => dispatch(removeGroup(id)))
        .then(() => socket.emit(Status.USER_REMOVED, { gid: id, uid: store.getState().account.id }))
        .catch(error => dispatch(setErrorMessage(Status.FAILED_TO_DELETE_GROUP)));
    }
}

export function signUp(data) {
    return (dispatch) => {
        dispatch(setSession(Status.SIGNING_UP));
        return postForm(`/api/user/signup`, data)
        .then(response => {
            if (response.ok) dispatch(setSession(Status.SIGNED_UP))
            else return Promise.reject();
        })
        .then(() => dispatch(signIn(data)))
        .catch(error => dispatch(setSession(Status.SIGNUP_FAILED)));
    }
}

export function signIn(data) {
    return (dispatch) => {
        dispatch(setSession(Status.SIGNING_IN));
        return postForm(`/api/user/signin`, data)
        .then(response => {
            if (response.ok) return response.json()
            else return Promise.reject();
        })
        .then((json) => {
            const { token } = json;
            localStorage.setItem('PostIt-token', token);
        })
        .then(() => dispatch(setSession(Status.SIGNED_IN)))
        .then(() => dispatch(login()))
        .then(() => dispatch(fetchAll(Filter.ALL)))
        .catch(error => dispatch(setSession(Status.SIGNIN_FAILED, Status)));
    }
}
 