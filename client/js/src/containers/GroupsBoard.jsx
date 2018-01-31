import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { predicate } from '../helpers/utils';
import { setPage, setGroup, Status } from '../redux/actionTypes';
import { deleteGroup } from '../redux/asyncActions';
import GroupsBoard from '../components/board/GroupsBoard';

const isDeleted = (state) => predicate('status', state.status, Status.GROUP_DELETED, state);

const hasFailed = (state) => predicate('error', state.error, Status.FAILED_TO_DELETE_GROUP, state);

const getGroups = (groups, users, adminId) => {
  return groups.ids.map(id => {
    const groupid = id
        , group = groups.byId[id]
        , groupName = group.name
        , author = users.byId[group.CreatorId].username
        , membersCount = group.Members.length
        , isOwner = group.CreatorId === adminId;
    return {
      groupName,
      author,
      groupid,
      membersCount,
      isOwner
    };
  });
};

const mapDispatchToProps = dispatch => {
  return {
    handleCloseGroup: event => {
      event.preventDefault();
      const { target } = event
          , id = target.getAttribute('id')
          , action = target.getAttribute('jsaction')
          , name = target.getAttribute('name')
          , answer = confirm(`Are you sure you want to ${action=='CLOSE'?'delete':'leave'} ${name}?`);
      if (answer) {
        switch (action) {
          case 'CLOSE':
            dispatch(deleteGroup(id))
            break;
          case 'LEAVE':
            console.log('Leave group', action, id);
            break;
        }
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    groups: getGroups(state.groups, state.users, state.account.id),
    isFetching: state.groups.isFetching,
    deleted: isDeleted(state),
    failed: hasFailed(state)
  }
}

const GroupsBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupsBoard)

export default (GroupsBoardContainer); 