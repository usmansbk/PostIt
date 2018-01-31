import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setPage, setGroup } from '../redux/actionTypes';
import { deleteGroup } from '../redux/asyncActions';
import GroupsBoard from '../components/board/GroupsBoard';

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
          , name = target.getAttribute('name')
          , answer = confirm(`Are you sure you want to close ${name}?`);
      if (answer) dispatch(deleteGroup(id))
    }
  }
}

const mapStateToProps = state => {
  return {
    groups: getGroups(state.groups, state.users, state.account.id),
    isFetching: state.groups.isFetching
  }
}

const GroupsBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupsBoard)

export default (GroupsBoardContainer); 