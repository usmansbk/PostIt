import React from 'react';
import Icon from '../common/Icon';
import UserInfo from './UserInfo';

function uploadPhoto(event) {
  const inputfile = document.querySelector('#upload-photo');
  inputfile.click();
}

export default ({accountInfo}) => {
  const style = {
    marginTop: '10px'
  };
  
  const inputStyle = {
    display: 'none'
  };
  
  return (
    <div style={style}>
      <UserInfo {...accountInfo} />
    </div>
  );
}
