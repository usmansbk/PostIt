import React from 'react';
import Icon from '../common/Icon';

export default function Searchbar ({onClick}) {
  return (
    <div className='navbar-fixed nav-wrapper'>
      <nav>
        <div className='input-field'>
          <input id='searchbar' type='search' className='center-align grey lighten-3' placeholder='Search PostIt' />
          <label className='label-icon' htmlFor='searchbar'><Icon>search</Icon></label>
          <Icon name='cancel-search' onClick={onClick}>close</Icon>
        </div>
      </nav>
    </div>
  )
}
