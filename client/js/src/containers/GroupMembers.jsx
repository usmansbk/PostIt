import React from 'react';
import { connect } from 'react-redux';
import { requestRemoveUser } from '../redux/asyncActions';
import GroupMembers from '../components/board/GroupMembers';

const getMembers = (groups, users, groupId) => {
  const group = groups.byId[groupId];
  return group.Members.map(id => {
    const member = users.byId[id];
    return Object.assign({}, member, { guid: groupId });
  });
};

const mapDispatchToProps = dispatch => {
  return {
    handleRemove: event => {
      event.preventDefault();
      const { currentTarget } = event
          , uid = currentTarget.getAttribute('uid')
          , guid = currentTarget.getAttribute('guid');
      dispatch(requestRemoveUser(uid, guid));
    }
  }
}

const mapStateToProps = state => {
  return {
    members: getMembers(state.groups, state.users, state.group),
    isFetching: state.users.isFetching
  }
}

const GroupMembersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupMembers)

export default GroupMembersContainer; 