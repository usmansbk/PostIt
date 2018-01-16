import React from 'react';

export default function GroupCard(props) {
	const { group } = props;
  return (
    <div className='card'>
      <h5 className=''>{group.name}</h5>
      <p className=''>{group.purpose}</p>
      <small className='text-muted'>{group.creator.username}</small>
      <div className=''>
        <small className='text-muted'>{group.memberCount} members</small>
      </div>
    </div>
  );
}
