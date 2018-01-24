import React from 'react';
import { connect } from 'react-redux';
import { defaultAvatar, defaultGroupImage } from '../helpers/constants';
import { setLocation } from '../redux/actionTypes';
import GroupsBoard from '../components/board/GroupsBoard';

const getGroups = (groups, account) => {
  if (Object.keys(groups).length === 0) return null;
  return groups.gids.map(id => {
    const groupid = id;
    const group = groups.byId[id];
    const groupName = group.name;
    const isFetching = groups.isFetching
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
          , id = target.getAttribute('gid')
          , location = {
              name: 'Group',
              id
            };
      dispatch(setLocation(location));
    }
  }
}

const GroupsBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupsBoard)

export default GroupsBoardContainer;