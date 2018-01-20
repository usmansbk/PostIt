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
    </div>
  );
}
