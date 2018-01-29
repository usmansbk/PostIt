import React from 'react';
import PostCard from './PostCard';
import NewPostModal from '../../containers/NewPostModal';
import Loader from '../common/Loader';
import M from '../../../materialize';

export default class MessageBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps({isFetching, error, ...rest}) {
    if (error) {
      M.toast({html: 'Unable to refresh board', classes: 'rounded red lighten-1'});
    }
  }

  render() {
    const {posts, isFetching, error} = this.props;
    const notice = <h3 className='grey-text text-lighten-1 center-align'>This board is empty</h3>;
    let postComponents = posts.map((post, index) => <PostCard key={index} { ...post} />);
    const showLoader = isFetching && <Loader />;
    return (
      <div className='row'>
        <div className='center-align'>
          { showLoader }
        </div>
          { posts.length > 0 ? postComponents : notice }
        <NewPostModal />
      </div>
    );
  }
}
