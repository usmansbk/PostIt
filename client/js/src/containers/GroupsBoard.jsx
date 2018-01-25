import React from 'react';
import { connect } from 'react-redux';
import { defaultAvatar, defaultGroupImage } from '../helpers/constants';
import { setPage, setGroup } from '../redux/actionTypes';
import GroupsBoard from '../components/board/GroupsBoard';

const getGroups = (groups, account) => {
  return groups.gids.map(id => {
    const groupid = id;
    const group = groups.byId[id];
    const groupName = group.name;
    let membersCount = group.members.length;
    membersCount += membersCount > 1 ? ' Members' : ' Member';
    const isOwner = (group.CreatorId === account.id);
    const groupImage = group.image || defaultGroupImage;
    return {
      groupName,
      membersCount,
      isOwner,
      groupImage,
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