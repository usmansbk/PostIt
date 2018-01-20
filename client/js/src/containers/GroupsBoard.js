import React from 'react';
import GroupsBoard from '../components/board/GroupsBoard';

export default class GroupsBoardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const groups = [
  		{
  			groupImage: '../../../../images/group.png',
  			groupName: 'Demo',
  			membersCount: '3'
  		}
  	];
    return <GroupsBoard groups={groups} />
  }
}
