import React from 'react';
import PostCard from './PostCard';
import NewPostModal from '../../containers/NewPostModal';
import Loader from '../common/Loader';
import M from '../../../materialize';

export default class MessageBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {posts, isFetching, error} = this.props;
    const notice = <h3 className='grey-text text-lighten-1 center-align'>This board is empty</h3>;
    const message = <h3 className='red-text text-lighten-1 center-align'>Failed to fetch posts</h3>;
    let postsComponent = posts.map((post, index) => <PostCard key={index} { ...post} />);
    const showLoader = isFetching && Loader;
    const showErrorMessage = (!isFetching && error) && message;
    return (
      <div className='row'>
        <div className='center-align'>
          { showLoader }
          { showErrorMessage }
        </div>
          { posts.length > 0 ? postsComponent : notice }
        <NewPostModal />
      </div>
    );
  }
}
