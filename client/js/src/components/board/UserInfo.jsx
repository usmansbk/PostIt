import React from 'react';
import Icon from '../common/Icon';

const style = {
  margin: '0',
  height: '100%',
  padding: '0'
}
export default ({username, email}) => {
  return (
    <div id='userinfo' className='row valign-wrapper' style={style}>
      <div id='info' className='col s12 grey-text valign-wrapper' style={style}>
        <Icon>account_box</Icon>
        <span className='grey-text text-darken-1'>{ username } </span>
      </div>
    </div>
  );
}
