import React from 'react';
import M from '../../../materialize';
import UserInfo from '../common/UserInfo.jsx';

export default class GroupCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const elem = document.querySelectorAll('.tooltipped');
    const instance = M.Tooltip.init(elem);
  }

  render() { 
  const { group } = this.props;
  return (
    <div className='col s12 m6 l4'>
      <div className='card hoverable'>
	<div className='card-content'>
          <span className='card-title truncate'>{group.name}</span>
	  <a className='truncate tooltipped'
           data-position='bottom' data-delay='50'
           data-tooltip={group.purpose}
          >{group.purpose}</a>
	  <UserInfo account={group.creator} />
	  <div className='center-align'>
	  <small className='grey-text text-darken-2'>{group.cardinal} members</small>
        </div>
      </div>
    </div>
  </div>
  );
  }
}
