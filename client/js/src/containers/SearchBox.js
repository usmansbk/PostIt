import React from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/dashboard/SearchBox';
import { defaultAvatar } from '../Constants';

const getUsers = (search, locationId, groups) => {
	return search.map(user => {
		const currentGroup = groups.byId[locationId];
		const isMember = currentGroup.members.indexOf(user.id) !== -1;
		user.avatar = user.avatar || defaultAvatar;
		user.isMember = isMember;
		return user;
	});
};

const mapStateToProps = state => {
  return {
    users: getUsers(state.search, state.location.id, state.groups),
    location: state.location.name
  }
}

const SearchBoxContainer = connect(
  mapStateToProps
)(SearchBox)

export default SearchBoxContainer;