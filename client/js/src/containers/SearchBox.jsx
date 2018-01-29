import React from 'react';
import { connect } from 'react-redux';
import { Status } from '../redux/actionTypes';
import SearchBox from '../components/dashboard/SearchBox';

function hasFailed(error) {
	return error === Status.SEARCH_FAILED;
}

function isFound(status) {
	return status === Status.SEARCH_FOUND;
}

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

const mapStateToProps = state => {
  return {
    users: getUsers(state.search, state.group, state.groups, state.account.id),
    page: state.page,
    isFetching: state.search.isFetching,
    failed: hasFailed(state.error),
    found: isFound(state.status)
  }
}

const SearchBoxContainer = connect(
  mapStateToProps
)(SearchBox)

export default SearchBoxContainer;