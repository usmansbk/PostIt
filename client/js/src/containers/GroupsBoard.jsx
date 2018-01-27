import React from 'react';
import { connect } from 'react-redux';
import { setPage, setGroup } from '../redux/actionTypes';
import { fetchPosts } from '../redux/asyncActions';
import GroupsBoard from '../components/board/GroupsBoard';

const getGroups = (groups, users) => {
  return groups.ids.map(id => {
    const groupid = id
        , group = groups.byId[id]
        , groupName = group.name
        , author = users.byId[group.Creator].username
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

const mapDispatchToProps = dispatch => {
  return {
    onClick: event => {
      const target= event.currentTarget
          , id = target.getAttribute('gid');
      dispatch(setPage('Group'));
      dispatch(setGroup(id));
      dispatch(fetchPosts(id));
    }
  }
}

const GroupsBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupsBoard)

export default GroupsBoardContainer;