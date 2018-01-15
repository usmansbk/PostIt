import React from 'react';
import '../../../../stylesheets/sass/components/Dropdown.scss';

export default function Dropdown(props) {
  return (
    <ul id={props.id} className='dropdown-content'>
      {
	React.Children.map(props.children, (child) => {
	  return <li>{child}</li>
        })
      }
    </ul>
  );
}
