import React from 'react';
import PostInfo from './PostInfo';
import '../../../../stylesheets/sass/components/PostCard.scss';
export default function PostCard({message, authorName, groupName, duration, userAvatar}) {
  return (
    <div className='col s12 l6'>
      <div className='card-panel'>
	<PostInfo props={authorName, groupName, duration, userAvatar} />
        <p id='message'> {message}</p>
      </div>
    </div>
  );
}
