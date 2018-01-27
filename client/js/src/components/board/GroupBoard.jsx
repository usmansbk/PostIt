import React from 'react';
import MessageBoard from '../../containers/MessageBoard';
import GroupInfo from './GroupInfo';
import Icon from '../common/Icon';

export default ({groupInfo}) => {
  return (
    <div className='row' >
      <div className='col s12'>
	      <GroupInfo {...groupInfo} />
      </div>
      <div className='col s12' >
        <MessageBoard />
      </div>
    </div>
  );
}
