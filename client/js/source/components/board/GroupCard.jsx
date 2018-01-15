import React from 'react';

export default function GroupCard(props) {
  return (
    <div className='card'>
        <h5 className=''>{props.name}</h5>
        <p className=''>{props.purpose}</p>
        <small className='text-muted'>{props.creator}</small>
        <div className=''>
          <small className='text-muted'>{props.member}</small>
        </div>
      </div>
    </div>
  );
}
