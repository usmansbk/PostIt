import React from 'react';
import '../../../../stylesheets/sass/components/Dropdown.scss';

export default function Dropdown(props) {
  let items = React.Children.map(props.children, child => {
    return <li>{child}</li>
  });
  return (
    <ul className='dropdown-content' id={props.id}>
        { items }
    </ul>
  );
}
