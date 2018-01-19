import React from 'react';
import MessageBoard from '../components/board/MessageBoard';

export default class MessageBoardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const posts = [
  		{
  			message: 'Hello World!',
  			postInfo: {
  				authorUsername: 'Usmansbk',
  				groupName: 'JavaScript',
  				duration: '5',
  				userAvatar: '../../../../images/default.png'
  			},
  		}
  	];
    return <MessageBoard posts={posts}/>
  }
}
