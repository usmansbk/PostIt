import React from 'react';
import Icon from '../common/Icon';

export default ({userAvatar, username, email}) => {
  return (
    <div id='userinfo' className='row valign-wrapper'>
      <div className='col s2'>
        <img src={userAvatar} alt='' className='circle responsive-img' />
      </div>
      <div id='info' className='col s10 grey-text'>
        <p>{ username  }</p>
        <p>{ email }</p>
      </div>
    </div>
  );
}
