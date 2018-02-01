import React from 'react';
import Icon from '../common/Icon';
import UserInfo from './UserInfo';
import M from '../../../materialize';
import MembersCard from '../../containers/GroupMembers';
import EditGroupModal from './EditGroupModal';

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
    const style = {
      fontWeight: '500',
      marginTop: '0px',
    };
    const {groupName, discription, creator, membersCount} = this.props;
    return (
      <div className='row'>
        <div className='col s12'>
  	       <div className='card' >
  	         <div className='card-content'>
          	    <h3 className='grey-text text-darken-4' style={style}>{groupName}</h3>
                <p>{discription}</p>
          	    <UserInfo {...creator} />
                <div className='section'>
                  <p className='valign-wrapper' style={{paddingTop: '0.5rem'}}><Icon className='tiny'>group_work</Icon><a href='#members' className='blue-text text-darken-1 modal-trigger'>{membersCount}</a></p>
                  <EditGroupModal groupName={groupName} discription={discription} />
                </div>
  	         </div>
          </div>
        </div>
        <MembersCard />
      </div>
    );
  }
}
