import React from 'react';
import Icon from '../common/Icon';
import UserInfo from './UserInfo';
import M from '../../../materialize';
import EditGroupInfo from '../../containers/EditGroupInfo';
import MembersCard from '../../containers/GroupMembers';

export default class GroupInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let elems = document.querySelectorAll('.modal');
    let instance = M.Modal.init(elems);
    let elem = document.querySelector('#edit-info');
    instance = M.Modal.init(elem);
    elem = document.querySelector('#members');
    instance
  }

  render() {
    const {groupImage, groupName, discription, creator, membersCount, isOwner} = this.props;
    return (
      <div className='row'>
        <div className='col s12'>
  	       <div className='card' >
  	         <div className='card-image'>
  	           <img src={groupImage} />
               <a href='#edit-info' className='btn-floating halfway-fab waves-effect waves-light red modal-trigger'><Icon className='white-text'>edit</Icon></a>
  	         </div>
  	         <div className='card-content'>
          	   <span className='card-title activator grey-text text-darken-4'>{groupName}<Icon className='right'>more_vert</Icon></span>
          	   <UserInfo {...creator} />
          	   <p><a href='#members' className='grey-text text-darken-1 modal-trigger'>{membersCount} Members</a></p>
               <Icon className='black-text'>{ isOwner?'delete':'clear' }</Icon>
  	         </div>
        	   <div className='card-reveal'>
        	     <span className='card-title grey-text text-darken-4'>
                About this group<Icon className='right'>close</Icon>
               </span>
              <p>{discription}</p>
            </div>
          </div>
        </div>
        <EditGroupInfo />
        <MembersCard />
      </div>
    );
  }
}
