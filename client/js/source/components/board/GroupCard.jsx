import React from 'react';
import '../../../../stylesheets/bootstrap.css';

export default function GroupCard(props) {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>Group Name</h5>
        <p className='card-text'>Purpose of this group</p>
        <small className='text-muted'>Created by</small>
        <div className='card-footer'>
          <small className='text-muted'>18 members</small>
        </div>
      </div>
    </div>
  );
}
