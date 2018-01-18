import React from 'react';
import Icon from '../common/Icon.jsx';
import SelectGroups from '../common/SelectGroups.jsx';
import PostCard from './PostCard.jsx';
import M from '../../../materialize';

export default class MessageBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      let elem = document.querySelectorAll('.modal');
      let instance = M.Modal.init(elem);
  }

  render() {
    let notice = <h3 className='grey-text text-lighten-1 center-align'>This board is empty</h3>;
    let { posts, groups } = this.props;
    if (posts) {
    posts = posts.map((post, index) => {
      return <PostCard key={index} post={post} />;
    });
    }
    return (
      <div className='row'>
        { posts || notice }
        <div className='fixed-action-btn modal-trigger'>
          <a className='btn-floating btn-large red modal-trigger' href='#newpost'>
            <Icon className='white-text'>mode_edit</Icon>
          </a>
        </div>
        <div id='newpost' className='modal modal-fixed-footer'>
          <div className='modal-content'>
            <SelectGroups groups={groups} />
            <div className='input-field' id='message'>
              <textarea className='materialize-textarea'></textarea>
              <label htmlFor='message'>Whats new with you</label>
            </div>
          </div>
          <div className='modal-footer'>
            <a className='modal-action modal-close waves-effect btn-flat'>Cancel</a>
            <a className='modal-action modal-close waves-effect btn-flat'>Post</a>
          </div>
        </div>
      </div>
    );
  }
}
