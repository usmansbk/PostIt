import React from 'react';
import { connect } from 'react-redux';
import { predicate } from '../helpers/utils';
import { Status } from '../redux/actionTypes';
import { addUserTo } from '../redux/asyncActions';
import SearchBox from '../components/dashboard/SearchBox';

const hasFailed = (state) => predicate(state.error, Status.SEARCH_FAILED, state);

const isAdded = (state) => predicate(state.status, Status.USER_ADDED, state);

const addFailed = (state) => predicate(state.error, Status.FAILED_TO_ADD_USER, state);

const isFound = (state) => predicate(state.status, Status.SEARCH_FOUND, state);

const getUsers = (search, groupId, groups, adminId) => {
	return search.ids.filter(id => +id !== adminId).map(id => {
		const user = search.byId[id];
		let cloneUser;
		if (groupId) {
			const currentGroup = groups.byId[groupId];
			const isMember = currentGroup.Members.indexOf(user.id) !== -1;
			const canAdmin = currentGroup.CreatorId === adminId;
			cloneUser = Object.assign({}, user, {
				isMember,
				canAdmin
			})
		}
		return cloneUser || user;
	});
};

const mapDispatchToProps = dispatch => {
	return {
		handleAddOrRemove: (event) => {
			const { target } = event
				, gid = target.getAttribute('gid')
			    , username = target.getAttribute('username');
			dispatch(addUserTo(gid, username));
		}
	}
}

const mapStateToProps = state => {
  return {
    users: getUsers(state.search, state.group, state.groups, state.account.id),
    page: state.page,
    isFetching: state.search.isFetching,
    failed: hasFailed(state),
    found: isFound(state),
    added: isAdded(state),
    addFailed: addFailed(state),
    gid: state.group
  }
}

const SearchBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox)

export default SearchBoxContainer;