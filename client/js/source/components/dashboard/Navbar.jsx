import React from 'react';
import Search from './Search.jsx';
import Searchbar from './Searchbar.jsx';
import Dropdown from '../common/Dropdown.jsx';
import Logo from '../common/Logo.jsx';
import Icon from '../common/Icon.jsx';
import Button from '../common/Button.jsx';
import UserInfo from '../common/UserInfo.jsx';
import NotificationHeader from '../common/NotificationHeader.jsx';
import Avatar from '../common/Avatar.jsx';
import M from '../../../materialize';
import '../../../../stylesheets/sass/components/Navbar.scss';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: false };
    this.handleClick = this.handleClick.bind(this);
    this.init = this.init.bind(this);
  }

  init() {
    let elem = document.querySelector('.notifications');
    let instance = M.Dropdown.init(elem, { coverTrigger: false, constrainWidth: false });
    elem = document.querySelector('.account');
    instance = M.Dropdown.init(elem, { coverTrigger: false, constrainWidth: false });
  }

  componentDidMount() {
    this.init();
  }

  handleClick(event) {
    const target = event.target;
    const name = target.getAttribute('name');
    if (name === 'cancel-search') {
      this.setState({search: false}, () => {
        this.init();
      });
    } else {
      this.setState({search: true});
    }
  }
  render() {
    if (this.state.search) {
      return <div className={this.props.className}><Searchbar onClick={this.handleClick} /></div>
    }
    return (
      <div className={this.props.className} >
        <nav>
          <div className={ 'nav-wrapper ' + this.props.color }>
            <a href='#' className='sidenav-trigger' data-target='slide-out'><Icon>menu</Icon></a>
            <Logo href='#'>PostIt</Logo>
            <span className='vl grey lighten-1'>.</span>
            <span id='location' className='grey-text' >{this.props.location}</span>
            <ul className='right'>
              <li className='hide-on-med-and-up' onClick={this.handleClick}><a><Icon href='#'>search</Icon></a></li>
              <li className='notifications' data-target='notifications'><a><Icon href='#'>notifications</Icon></a></li>
              <li className='account' data-target='account'><a><Icon href='#'>account_circle</Icon></a></li>
            </ul>
            <Search placeholder='Search PostIt' visibility='right hide-on-small-only' />
            <Dropdown id='notifications' data={this.props.notifications}>
              <NotificationHeader /> 
            </Dropdown>
            <Dropdown id='account' data={this.props.account}>
              <UserInfo url={this.props.url} />
              <Button className='center-align' value='Logout'></Button>
            </Dropdown>
          </div>
        </nav>
      </div>
    );
  }
}
