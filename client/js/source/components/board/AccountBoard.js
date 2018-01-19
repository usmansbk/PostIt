import React from 'react';
import Icon from '../common/Icon';

export default ({username, email, userAvatar}) => {
  const style = {
    fontWeight: 500,
    fontSize: '20px',
    marginLeft: '4%',
  };
  const s2 = {
    width: '48px',
    height: '48px'
  };
  return (
    <div className='card-panel blue-grey lighten-5'>
      <div className='valign-wrapper'>
        <img src={userAvatar} alt='' className='circle' style={s2} />
        <span className='grey-text text-darken-3' style={style} >{username}</span>
      </div>
    </div>
  );
}
