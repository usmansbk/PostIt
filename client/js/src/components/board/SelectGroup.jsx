import React from 'react';
import M from '../../../materialize';
import Icon from '../common/Icon';

export default class SelectGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      status: "You don't belong to any group"
    }
    this._initSelect = this._initSelect.bind(this);
  }

  componentDidMount() {
    this._getOptions(this.props.groups);
    this._initSelect();
  }

  _initSelect() {
    const elem = document.querySelector('select');
    const instance = M.Select.init(elem);
  }

  _getOptions(groups) {
    if (groups.length > 0) {
      const status = 'Choose group';
      let options = groups.map((group, index) => {
        const {name, id} = group;
        return <option value={id} key={index}>{name}</option>
      });
      this.setState({
        options, 
        status
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    const { groups } = nextProps;
    this._getOptions(groups);
    this._initSelect();
  }

  render() {
    const { options, status }  = this.state;
    return (
      <div className='input-field'>
        <select className='icons' name='gid' onChange={this.props.onChange} defaultValue=''>
          <option value='' key={-1} disabled>{status}</option>
          { options }
        </select>
        <label className='valign-wrapper'>Groups <Icon className='tiny blue-text'>group</Icon></label>
      </div>
    );
  }
}
