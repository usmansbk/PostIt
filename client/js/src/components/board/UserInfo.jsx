import React from 'react';
import Icon from '../common/Icon';

export default ({username, email}) => {
  return (
    <div id='userinfo' className='row valign-wrapper'>
      <div id='info' className='col s12 grey-text valign-wrapper'>
        <Icon>account_box</Icon>
        <span className='grey-text text-darken-1'>{ username } </span>
      </div>
    </div>
  );
}
