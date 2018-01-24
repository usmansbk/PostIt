import React from 'react';
import PostCard from './PostCard';
import NewPostModal from './NewPostModal';
import M from '../../../materialize';

export default ({posts, onClick}) => {
  const notice = <h3 className='grey-text text-lighten-1 center-align'>This board is empty</h3>;
  let postsComponent;
  if (posts) {
    postsComponent = posts.map((post, index) => <PostCard key={index} onClick={onClick} { ...post} />);
  }
  return (
    <div className='row'>
      { postsComponent || notice }
      <NewPostModal />
    </div>
  );
}
