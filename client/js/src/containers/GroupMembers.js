import React from 'react';
import { connect } from 'react-redux';
import GroupMembers from '../components/board/GroupMembers';
import { defaultAvatar } from '../Constants';

const getMembers = (members) => {
	if (Object.keys(members).length === 0) return null;
	return members.uids.map(id => {
		const member = members.byId[id];
		member.userAvatar = member.userAvatar || defaultAvatar;
		return member;
	});
};

const mapStateToProps = state => {
  return {
    members: getMembers(state.users),
    isFetching: state.users.isFetching
  }
}

const GroupMembersContainer = connect(
  mapStateToProps
)(GroupMembers)

export default GroupMembersContainer; 