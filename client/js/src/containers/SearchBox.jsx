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

const getUsers = (search, groupId, groups) => {
	return search.ids.map(id => {
		const user = search.byId[id];
		let cloneUser;
		if (groupId) {
			const currentGroup = groups.byId[groupId];
			const isMember = currentGroup.Members.indexOf(user.id) !== -1;
			cloneUser = Object.assign({}, user, {
				isMember,
			})
		}
		return cloneUser || user;
	});
};

const mapStateToProps = state => {
  return {
    users: getUsers(state.search, state.group, state.groups),
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