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
      <input type='file' id='upload-photo' style={inputStyle} />
      <a href='#'><Icon title='Change profile picture' className='grey-text text-darken-1' onClick={uploadPhoto}>add_a_photo</Icon></a>
      <a href='#'><Icon title='Remove profile picture' className='grey-text text-darken-1'>remove_circle</Icon></a>
    </div>
  );
}
