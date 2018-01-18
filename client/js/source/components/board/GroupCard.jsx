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
    <div className='col s12 m6 l3'>
      <div className='card small hoverable'>
        <div className='card-image'>
          <img src={group.img} />
        </div>
	   <div className='card-content'>
        <span className='card-title truncate'>{group.name}</span>
	      <p className='grey-text text-darken-1'>{group.cardinal} Members</p>
      </div>
    </div>
  </div>
  );
  }
}
