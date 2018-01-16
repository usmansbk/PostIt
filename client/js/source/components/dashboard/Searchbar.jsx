import React from 'react';
import Icon from '../common/Icon.jsx';

export default function Searchbar (props) {
  return (
    <div className='navbar-fixed'>
      <nav>
        <div className='input-field'>
          <input id='searchbar' type='search' className='center-align grey lighten-3' placeholder='Search PostIt' />
          <label className='label-icon' htmlFor='searchbar'><Icon>search</Icon></label>
          <Icon name='cancel-search' onClick={props.onClick}>close</Icon>
        </div>
      </nav>
    </div>
  )
}
