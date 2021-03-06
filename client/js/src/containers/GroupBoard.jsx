import React from 'react';
import { connect } from 'react-redux';
import GroupBoard from '../components/board/GroupBoard';

const getGroupInfo = (id, groups, users, accountId) => {
  const group = groups.byId[id];
  if (!group) return group;
  const { name, image, purpose, CreatorId, members} = group;
  const isOwner = (CreatorId === accountId)
  let membersCount = group.Members.length;
  membersCount += membersCount > 1 ? ' Members': ' Member';
  const creator = users.byId[CreatorId];

  return {
    groupName: name,
    isOwner,
    membersCount,
    discription: purpose,
    creator
  }
};

const mapStateToProps = state => {
  return {
    groupInfo: getGroupInfo(state.group, state.groups, state.users, state.account.id)
  }
}

const GroupBoardContainer = connect(
  mapStateToProps
)(GroupBoard)

export default GroupBoardContainer;