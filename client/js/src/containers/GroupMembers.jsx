import React from 'react';
import { connect } from 'react-redux';
import { predicate } from '../helpers/utils';
import { requestRemoveUser } from '../redux/asyncActions';
import { Status } from '../redux/actionTypes';
import GroupMembers from '../components/board/GroupMembers';

const isRemoved = state => predicate('status', state.status, Status.USER_REMOVED, state);
const hasFailed = state => predicate('error', state.error, Status.FAILED_TO_REMOVE_USER, state);
const isRemoving= state => predicate('status', state.status, Status.REMOVING_USER, state);

const getMembers = (groups, users, groupId, adminId) => {
  const group = groups.byId[groupId];
  return group.Members.map(id => {
    const member = users.byId[id];
    const isAdmin = adminId === member.id;
    return Object.assign({}, member, { guid: groupId, isAdmin });
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
    members: getMembers(state.groups, state.users, state.group, state.account.id),
    removedUser: isRemoved(state),
    failedToRemove: hasFailed(state),
    removeUser: isRemoving(state),
    isFetching: state.users.isFetching
  }
}

const GroupMembersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupMembers)

export default GroupMembersContainer; 