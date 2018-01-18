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
    let {options} = this.props;
    options = [
      {
        name: 'Group 1',
        img: '../../../../images/default.jpg',
        id: 1
      }
    ]
    if (options) {
      notice = 'Select groups to send post';
      options = options.map((option, index) => <option value='' key={index} data-icon={option.img} className='left'>{option.name}</option>);
    }
    return (
      <div className='input-field'>
        <select className='icons' value={['-1']} multiple>
          <option value='-1' disabled>{notice}</option>
          {options || notice}
        </select>
        <label className='valign-wrapper'>Groups <Icon className='tiny blue-text'>group_work</Icon></label>
      </div>
    );
  }
}
