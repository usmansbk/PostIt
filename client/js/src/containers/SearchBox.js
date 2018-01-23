import React from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/dashboard/SearchBox';
import { defaultAvatar } from '../utils/constants';

const getUsers = (search, locationId, groups) => {
	if (Object.keys(search).length === 0) return null;
	return search.uids.map(id => {
		const user = search.byId[id];
		if (locationId) {
			const currentGroup = groups.byId[locationId];
			const isMember = currentGroup.members.indexOf(user.id) !== -1;
			user.isMember = isMember;
		}
		user.avatar = user.avatar || defaultAvatar;
		return user;
	});
};

const mapStateToProps = state => {
  return {
    users: getUsers(state.search, state.location.id, state.groups),
    location: state.location.name,
    isFetching: state.search.isFetching
  }
}

const SearchBoxContainer = connect(
  mapStateToProps
)(SearchBox)

export default SearchBoxContainer;