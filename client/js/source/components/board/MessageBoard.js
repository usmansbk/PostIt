import React from 'react';
import PostCard from './PostCard';

export default function MessageBoard ({posts}) {
  const notice = <h3 className='grey-text text-lighten-1 center-align'>This board is empty</h3>;
  let postsComponent;
  if (posts) {
    postsComponent = posts.map((post, index) => return <PostCard key={index} { ...post} />);
  }
  return (
    <div className='row'>
      { postsComponent || notice }
    </div>
  );
}
