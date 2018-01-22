import React from 'react';
import { connect } from 'react-redux';
import { defaultAvatar, defaultGroupImage } from '../Constants';
import GroupsBoard from '../components/board/GroupsBoard';

const getGroups = (groups, account) => {
  return groups.id.map(id => {
    const group = groups.byId[id];
    const groupName = group.groupName;
    let membersCount = group.members.length;
    membersCount += membersCount > 1 ? ' Members' : ' Member';
    const isOwner = (group.CreatorId === account.id);
    const groupImage = group.image || defaultGroupImage;
    return {
      groupName,
      membersCount,
      isOwner,
      groupImage
    };
  });
};

const mapStateToProps = state => {
  return {
    groups: getGroups(state.groups, state.account)
  }
}

const GroupsBoardContainer = connect(
  mapStateToProps
)(GroupsBoard)

export default GroupsBoardContainer;