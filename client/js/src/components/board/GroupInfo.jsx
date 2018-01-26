import React from 'react';
import Icon from '../common/Icon';
import UserInfo from './UserInfo';
import M from '../../../materialize';
import MembersCard from '../../containers/GroupMembers';

export default class GroupInfo extends React.Component {
  constructor(props) {
    super(props);
    this._initModals = this._initModals.bind(this);
  }
  componentDidMount() {
    this._initModals();
  }

  _initModals() {
    let elems = document.querySelectorAll('.modal');
    let instance = M.Modal.init(elems);
    let elem = document.querySelector('#members');
    instance = M.Modal.init(elem);

  }

  render() {
    const {groupName, discription, creator, membersCount} = this.props;
    return (
      <div className='row'>
        <div className='col s12'>
  	       <div className='card' >
  	         <div className='card-content'>
          	   <span className='card-title activator grey-text text-darken-4'>{groupName}<Icon className='right'>more_vert</Icon></span>
          	   <UserInfo {...creator} />
          	   <p><a href='#members' className='grey-text text-darken-1 modal-trigger'>{membersCount}</a></p>
  	         </div>
        	   <div className='card-reveal'>
        	     <span className='card-title grey-text text-darken-4'>
                About this group<Icon className='right'>close</Icon>
               </span>
              <p>{discription}</p>
            </div>
          </div>
        </div>
        <MembersCard />
      </div>
    );
  }
}
