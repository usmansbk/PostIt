import React from 'react';
import Icon from '../common/Icon.jsx';

let url = '../../../../images/default.jpg';

export default function PostInfo(props) {
  const { post } = props;
  return (
    <div className='row valign-wrapper'>
			<div className='col s2'>
			  <img src={url} alt='' className='circle responsive-img' />
      </div>
      <div className='col s10 valign-wrapper'>
        <span> {post.author.name} </span>
        <Icon>chevron_right</Icon>
	      <span className='blue-text'><a href='#'>{post.group.name}</a></span>
	      <Icon className='tiny align'>access_time</Icon>
        <span className='grey-text right'>1h</span>
      </div>
    </div>
  );
}
