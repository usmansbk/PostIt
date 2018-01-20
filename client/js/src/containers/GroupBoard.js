import React from 'react';
import GroupBoard from '../components/board/GroupBoard';

export default class GroupBoardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const groupInfo = {
  			groupImage: '../../../../images/group.png',
  			groupName: 'Test',
  			discription: 'Hello World',
  			creator: {
  				username: 'usmansbk',
  				userAvatar: '../../../../images/avatar.jpg',
  				email: 'usmansbk@gmail.com'
  			},
  			membersCount: 5
  		};
    return <GroupBoard groupInfo={groupInfo} />
  }
}
