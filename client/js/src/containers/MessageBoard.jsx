import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Status } from '../redux/actionTypes';
import MessageBoard from '../components/board/MessageBoard';
import { getElapsedTime } from '../helpers/utils';

function isErrored(error) {
  return error === Status.FAILED_TO_FETCH_POSTS;
}

const getPosts = (posts, members, groups, page, group) => {
  return posts.ids.filter(id => {
    const groupId = posts.byId[id].groupId;
    const result = (page === 'Home') || (page === 'Group' && (+group === groupId));
    return result;
  }).reverse().map(id => {
    const post = posts.byId[id]
        , groupId = post.groupId
        , authorId = post.authorId
        , message = post.message
        , createdAt = post.createdAt
        , duration = getElapsedTime(createdAt);

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

const mapStateToProps = state => {
  return {
    posts: getPosts(state.posts, state.users, state.groups, state.page, state.group),
    isFetching: state.posts.isFetching,
    error: isErrored(state.error)
  }
}

const MessageBoardContainer = connect(
  mapStateToProps,
)(MessageBoard)

export default withRouter(MessageBoardContainer);