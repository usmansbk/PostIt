import React from 'react';
import Icon from '../common/Icon.jsx';

export default function PostInfo(props) {
  const { post } = props;
  return (
    <div className='row valign-wrapper'>
			<div className='col s2'>
			  <img src={post.author.img} alt='' className='circle responsive-img' />
      </div>
      <div className='col s10 valign-wrapper'>
        <span> {post.author.name} </span>
        <Icon>chevron_right</Icon>
	      <span className='blue-text truncate'><a href='#'>{post.group.name}</a></span>
	      <Icon className='tiny'>access_time</Icon>
        <span className='grey-text right'>{post.duration}</span>
      </div>
    </div>
  );
}
