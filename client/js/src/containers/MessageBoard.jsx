import React from 'react';
import { connect } from 'react-redux';
import MessageBoard from '../components/board/MessageBoard';
import { getElapsedTime } from '../helpers/utils';
import {defaultAvatar} from '../helpers/constants';
import { setGroup, setPage } from '../redux/actionTypes';

const getPosts = (posts, members, groups) => {
  return posts.ids.map(id => {
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
    postInfo.groupId = post.groupId;

    return {
      message,
      postInfo
    }
  });
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: event => {
      const target = event.target;
      const id = target.getAttribute('gid');
      dispatch(setPage('Group'));
      dispatch(setGroup(id));
    }
  }
}

const mapStateToProps = state => {
  return {
    posts: getPosts(state.posts, state.users, state.groups),
    isFetching: state.posts.isFetching
  }
}

const MessageBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBoard)

export default MessageBoardContainer;