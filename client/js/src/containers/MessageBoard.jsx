import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageBoard from '../components/board/MessageBoard';
import { getElapsedTime } from '../helpers/utils';
import {defaultAvatar} from '../helpers/constants';
import { setGroup, setPage } from '../redux/actionTypes';

const getPosts = (posts, members, groups, page, group) => {
  return posts.ids.filter(id => {
    const groupId = posts.byId[id].groupId;
    const result = (page === 'Home') || (+group === groupId);
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
    posts: getPosts(state.posts, state.users, state.groups, state.page, state.group),
    isFetching: state.posts.isFetching
  }
}

const MessageBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBoard)

export default withRouter(MessageBoardContainer);