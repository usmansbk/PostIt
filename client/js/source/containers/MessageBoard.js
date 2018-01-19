import React from 'react';
import MessageBoard from '../components/board/MessageBoard';

export default class MessageBoardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MessageBoard />
  }
}
