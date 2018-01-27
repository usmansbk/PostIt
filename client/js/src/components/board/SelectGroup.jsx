import React from 'react';
import M from '../../../materialize';
import Icon from '../common/Icon';

export default class SelectGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const elem = document.querySelector('select');
    const instance = M.Select.init(elem);
  }

  render() {
    let notice = 'Select groups to send post'; ;
    let {groups, onChange} = this.props;
    if (groups.ids.length === 0) notice = "You don't belong to any group";
    let groupsComponent = groups.ids.map(gid => {
      const group = groups.byId[gid];
      return <option
        value={gid}
        key={gid}
        className='left'>
      {group.name}
      </option>
    });
    return (
      <div className='input-field'>
        <select className='icons' name='gid' defaultValue='-1' onChange={onChange} >
          <option value='-1' disabled>{notice}</option>
          {groupsComponent || notice}
        </select>
        <label className='valign-wrapper'>Groups <Icon className='tiny blue-text'>group</Icon></label>
      </div>
    );
  }
}
