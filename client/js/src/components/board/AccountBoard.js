import React from 'react';
import Icon from '../common/Icon';
import UserInfo from './UserInfo';

export default (props) => {
  const style = {
    marginTop: '10px'
  };
  
  return (
    <div style={style}>
      <UserInfo {...props} />
      <a href='#'><Icon title='Change profile picture' className='grey-text text-darken-1'>add_a_photo</Icon></a>
      <a href='#'><Icon title='Remove profile picture' className='grey-text text-darken-1'>remove_circle</Icon></a>
    </div>
  );
}
