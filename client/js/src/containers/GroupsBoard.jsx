import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setPage, setGroup } from '../redux/actionTypes';
import { fetchPosts } from '../redux/asyncActions';
import GroupsBoard from '../components/board/GroupsBoard';

const getGroups = (groups, users) => {
  return groups.ids.map(id => {
    const groupid = id
        , group = groups.byId[id]
        , groupName = group.name
        , author = users.byId[group.CreatorId].username
        , membersCount = group.Members.length;
    return {
      groupName,
      author,
      groupid,
      membersCount
    };
  });
};

const mapStateToProps = state => {
  return {
    groups: getGroups(state.groups, state.users),
    isFetching: state.groups.isFetching
  }
}

const GroupsBoardContainer = connect(
  mapStateToProps,
)(GroupsBoard)

export default withRouter(GroupsBoardContainer);