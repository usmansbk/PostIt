import React from 'react';
import PostCard from './PostCard';
import NewPostModal from '../../containers/NewPostModal';
import Loader from '../common/Loader';
import M from '../../../materialize';

export default ({posts, isFetching, onClick}) => {
  const notice = <h3 className='grey-text text-lighten-1 center-align'>This board is empty</h3>;
  let postsComponent = posts.map((post, index) => <PostCard key={index} onClick={onClick} { ...post} />);
  return (
    <div className='row'>
      <div className='center-align'>
        { isFetching && <Loader /> }
      </div>
        { posts.length > 0 ? postsComponent : notice }
      <NewPostModal />
    </div>
  );
}
