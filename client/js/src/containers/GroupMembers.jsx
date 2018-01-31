import React from 'react';
import { connect } from 'react-redux';
import GroupMembers from '../components/board/GroupMembers';

const getMembers = (groups, users, groupId) => {
  const group = groups.byId[groupId];
  return group.Members.map(id => {
    const member = users.byId[id];
    return member;
  });
};

const mapStateToProps = state => {
  return {
    members: getMembers(state.groups, state.users, state.group),
    isFetching: state.users.isFetching
  }
}

const GroupMembersContainer = connect(
  mapStateToProps
)(GroupMembers)

export default GroupMembersContainer; 