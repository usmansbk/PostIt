import React from 'react';
import M from '../../../materialize';
import Icon from './Icon';

export default class SelectGroups extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const elem = document.querySelector('select');
    const instance = M.Select.init(elem);
  }

  render() {
    let notice = "You don't belong to any group";
    let {groups} = this.props;
    let groupsComponent;
    if (groups) {
      notice = 'Select groups to send post';
      groupsComponent = groups.map((group, index) => <option defaultValue='' key={index} data-icon={group.img} className='left'>{group.name}</option>);
    }
    return (
      <div className='input-field'>
        <select className='icons' defaultValue={['-1']} multiple>
          <option defaultValue='-1' disabled>{notice}</option>
          {groupsComponent || notice}
        </select>
        <label className='valign-wrapper'>Groups <Icon className='tiny blue-text'>group</Icon></label>
      </div>
    );
  }
}
