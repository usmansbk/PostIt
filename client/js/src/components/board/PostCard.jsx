import React from 'react';
import PostInfo from './PostInfo';
import '../../../../stylesheets/sass/components/PostCard.scss';

export default ({message, postInfo, onClick}) => {
  return (
    <div className='col s12 l6'>
      <div className='card-panel'>
	    <PostInfo onClick={onClick} { ...postInfo } />
        <p id='message'> {message}</p>
      </div>
    </div>
  );
}
