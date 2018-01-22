import React from 'react';
import Icon from '../common/Icon';

export default ({avatar, username, email}) => {
  return (
    <div id='userinfo' className='row valign-wrapper'>
      <div className='col s2 center-align'>
        <img src={avatar} alt={username} className='circle responsive-img' />
      </div>
      <div id='info' className='col s10 grey-text'>
        <p className='grey-text text-darken-1'>{ username  }</p>
        <p className='grey-text text-darken-1'>{ email }</p>
      </div>
    </div>
  );
}
