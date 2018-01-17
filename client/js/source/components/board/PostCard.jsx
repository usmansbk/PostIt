import React from 'react';
import PostInfo from './PostInfo.jsx';
import '../../../../stylesheets/sass/components/PostCard.scss';
export default function PostCard(props) {
	const { post } = props;
  return (
		<div className='col s12 l6'>
	    <div className='card-panel'>
				<PostInfo post={post} />
	      <p id='message'> {post.message}</p>
	    </div>
		</div>
  );
}
