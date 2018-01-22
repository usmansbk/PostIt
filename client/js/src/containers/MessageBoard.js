import React from 'react';
import { connect } from 'react-redux';
import MessageBoard from '../components/board/MessageBoard';
import { getElapsedTime } from '../Util';
import {defaultAvatar} from '../Constants';

const getPosts = (posts, members, groups) => {
  return posts.id.map(id => {
    const post = posts.byId[id];
    const authorId = post.authorId;
    const groupId = post.groupId;
    const message = post.message;
    const createdAt = post.createdAt;
    const duration = getElapsedTime(createdAt);

    const postInfo = {};
    postInfo.authorUsername = members.byId[authorId].username;
    postInfo.groupName = groups.byId[groupId].groupName;
    postInfo.duration = duration;
    postInfo.userAvatar = members.byId[authorId].image || defaultAvatar;

    return {
      message,
      postInfo
    }
  });
}

const mapStateToProps = state => {
  return {
    posts: getPosts(state.posts, state.members, state.groups)
  }
}

const MessageBoardContainer = connect(
  mapStateToProps
)(MessageBoard)

export default MessageBoardContainer;