import React from 'react';
import { connect } from 'react-redux';
import { defaultAvatar, defaultGroupImage } from '../helpers/constants';
import { setPage, setGroup } from '../redux/actionTypes';
import GroupsBoard from '../components/board/GroupsBoard';

const getGroups = (groups, account) => {
  return groups.ids.map(id => {
    const groupid = id;
    const group = groups.byId[id];
    const groupName = group.name;
    const isOwner = (group.CreatorId === account.id);
    return {
      groupName,
      isOwner,
      groupid
    };
  });
};

const mapStateToProps = state => {
  return {
    groups: getGroups(state.groups, state.account),
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
    }
  }
}

const GroupsBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupsBoard)

export default GroupsBoardContainer;