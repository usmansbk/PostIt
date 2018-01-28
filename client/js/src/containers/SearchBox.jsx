import React from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/dashboard/SearchBox';

const getUsers = (search, groupId, groups) => {
	return search.ids.map(id => {
		const user = search.byId[id];
		if (groupId) {
			const currentGroup = groups.byId[groupId];
			user.isMember = currentGroup.Members.indexOf(user.id) !== -1;
		}
		return user;
	});
};

const mapStateToProps = state => {
  return {
    users: getUsers(state.search, state.group, state.groups),
    page: state.page,
    isFetching: state.search.isFetching
  }
}

const SearchBoxContainer = connect(
  mapStateToProps
)(SearchBox)

export default SearchBoxContainer;