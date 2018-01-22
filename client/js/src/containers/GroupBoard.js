import React from 'react';
import { connect } from 'react-redux';
import { defaultAvatar, defaultGroupImage } from '../Constants';
import GroupBoard from '../components/board/GroupBoard';

const getGroupInfo = (id, groups, users, accountId) => {
  const group = groups.byId[id];
  console.log(group);
  const { groupName, image, purpose, CreatorId, members} = group;
  const isOwner = (CreatorId === accountId)
  const groupImage = image || defaultGroupImage;
  let membersCount = members.length;
  membersCount += membersCount > 1 ? ' Members': ' Member';
  const creator = users.byId[CreatorId];
  creator.avatar = creator.avatar || defaultAvatar;
  console.log(isOwner, groupImage, membersCount, creator)

  return {
    groupName,
    isOwner,
    membersCount,
    groupImage,
    discription: purpose,
    creator
  }
};

const mapStateToProps = state => {
  return {
    groupInfo: getGroupInfo(state.location.id, state.groups, state.members, state.account.id)
  }
}

const GroupBoardContainer = connect(
  mapStateToProps
)(GroupBoard)

export default GroupBoardContainer;