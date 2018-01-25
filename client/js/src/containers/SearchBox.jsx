import React from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/dashboard/SearchBox';
import { defaultAvatar } from '../helpers/constants';

const getUsers = (search, groupId, groups) => {
	return search.uids.map(id => {
		const user = search.byId[id];
		if (groupId) {
			const currentGroup = groups.byId[groupId];
			user.isMember = currentGroup.members.indexOf(user.id) !== -1;
		}
		user.avatar = user.avatar || defaultAvatar;
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