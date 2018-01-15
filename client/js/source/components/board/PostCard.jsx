import React from 'react';
import '../../../../stylesheets/sass/components/PostCard.scss';
export default function PostCard(props) {
  return (
    <div className='card-panel' id='postcard'>
      <span className='black-text flow-text'>
        {props.message}
      </span>
    </div>
  );
}
