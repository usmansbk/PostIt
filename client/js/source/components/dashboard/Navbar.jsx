import React from 'react';
import Search from './Search.jsx';
import Searchbar from './Searchbar.jsx';
import Dropdown from '../common/Dropdown.jsx';
import Logo from '../common/Logo.jsx';
import Icon from '../common/Icon.jsx';
import Button from '../common/Button.jsx';
import UserInfo from '../common/UserInfo.jsx';
import NotificationBox from '../common/NotificationBox.jsx';
import M from '../../../materialize';
import '../../../../stylesheets/sass/components/Navbar.scss';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: false };
    this.handleClick = this.handleClick.bind(this);
    this.dropDownInit = this.dropDownInit.bind(this);
  }

  dropDownInit() {
    let elem = document.querySelector('.notifications');
    let instance = M.Dropdown.init(elem, { coverTrigger: false, constrainWidth: false });
    elem = document.querySelector('.account');
    instance = M.Dropdown.init(elem, { coverTrigger: false, constrainWidth: false });
  }

  componentDidMount() {
    this.dropDownInit();
  }

  handleClick(event) {
    const target = event.target;
    const name = target.getAttribute('name');
    if (name === 'cancel-search') {
      this.setState({search: false}, () => {
        this.dropDownInit();
      });
    } else {
      this.setState({search: true});
    }
  }
  render() {
    if (this.state.search) {
      return <div className='navbar-fixed nav-wrapper'><Searchbar
       search={ this.props.search } onClick={this.handleClick} /></div>
    }
    return (
      <div className='navbar-fixed'>
        <nav>
          <div className='nav-wrapper white '>
            <a href='#' className='sidenav-trigger hide-on-large-only' data-target='slide-out'><Icon>menu</Icon></a>
            <Logo href='#'>PostIt</Logo>
            <span className='vl grey lighten-1'>.</span>
            <span id='location' className='grey-text' >{this.props.location}</span>
            <ul className='right'>
              <li className='hide-on-large-only' onClick={this.handleClick}><a><Icon href='#'>search</Icon></a></li>
              <li className='notifications' data-target='notifications'><a><Icon href='#'>notifications</Icon></a></li>
              <li className='account' data-target='account'><a><Icon href='#'>account_circle</Icon></a></li>
            </ul>
            <Search placeholder='Search PostIt' visibility='right hide-on-small-only' search={this.props.search} />
            <Dropdown id='notifications' >
              <NotificationBox search={ this.props.search }/>
            </Dropdown>
            <Dropdown id='account' >
              <UserInfo account={ this.props.account } />
              <Button className='center-align' color='blue' value='Logout'></Button>
            </Dropdown>
          </div>
        </nav>
      </div>
    );
  }
}
