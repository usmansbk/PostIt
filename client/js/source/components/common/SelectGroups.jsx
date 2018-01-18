import React from 'react';
import M from '../../../materialize';
import Icon from './Icon.jsx';

export default class SelectGroups extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const elem = document.querySelector('select');
    const instance = M.Select.init(elem);
  }

  render() {
    let notice = 'You don\'t belong to any group';
    let {groups} = this.props;

    if (groups) {
      notice = 'Select groups to send post';
      groups = groups.map((group, index) => <option value='' key={index} data-icon={group.img} className='left'>{group.name}</option>);
    }
    return (
      <div className='input-field'>
        <select className='icons' value={['-1']} multiple>
          <option value='-1' disabled>{notice}</option>
          {groups || notice}
        </select>
        <label className='valign-wrapper'>Groups <Icon className='tiny blue-text'>group_work</Icon></label>
      </div>
    );
  }
}
