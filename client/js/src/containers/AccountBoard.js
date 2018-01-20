import React from 'react';
import AccountBoard from '../components/board/AccountBoard';

export default class AccountBoardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const accountInfo = {
  		username: 'usmansbk',
  		email: 'usmansbk@gmail.com',
  		userAvatar: '../../../../images/avatar.jpg'
  	};
    return <AccountBoard {...accountInfo} />
  }
}
