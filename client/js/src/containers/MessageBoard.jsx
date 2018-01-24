import React from 'react';
import { connect } from 'react-redux';
import MessageBoard from '../components/board/MessageBoard';
import { getElapsedTime } from '../utils/utils';
import {defaultAvatar} from '../utils/constants';

const getPosts = (posts, members, groups) => {
  if (Object.keys(posts).length === 0) return null;
  return posts.pids.map(id => {
    const post = posts.byId[id];
    const authorId = post.authorId;
    const groupId = post.groupId;
    const message = post.message;
    const createdAt = post.createdAt;
    const duration = getElapsedTime(createdAt);

    const postInfo = {};
    postInfo.authorUsername = members.byId[authorId].username;
    postInfo.groupName = groups.byId[groupId].name;
    postInfo.duration = duration;
    postInfo.userAvatar = members.byId[authorId].image || defaultAvatar;
    postInfo.groupId = post.groupId;

    return {
      message,
      postInfo
    }
  });
}

const mapStateToProps = state => {
  return {
    posts: getPosts(state.posts, state.users, state.groups),
    isFetching: state.posts.isFetching
  }
}

const MessageBoardContainer = connect(
  mapStateToProps
)(MessageBoard)

export default MessageBoardContainer;