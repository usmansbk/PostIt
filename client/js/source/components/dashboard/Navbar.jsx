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

let url = '../../../../images/default.jpg';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: false };
    this.handleClick = this.handleClick.bind(this);
    this.dropDownInit = this.dropDownInit.bind(this);
  }

  dropDownInit() {
    let elem = document.querySelector('.notifications');
    let instance = M.Dropdown.init(elem, { coverTrigger: false, constrainWidth: false, alignment: 'right' });
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
    const { location, account } = this.props;
    return (
      <div className='navbar-fixed'>
        <nav>
          <div className='nav-wrapper white '>
            <table>
              <tbody>
	              <tr>
			            <td id='td-menu'><a className='sidenav-trigger hide-on-large-only' data-target='slide-out'><Icon>menu</Icon></a></td>
			            <td id='td-logo' className='center-align'>
                    <Logo>PostIt</Logo>
			            </td>
                  <td id='td-loc'>
		                <span id='location' className='grey-text text-darken-2 truncate'>{ location }</span>
                  </td>
			            <td className='hide-on-small-only grey-text'>
				            <input type='search' placeholder='Search PostIt' className='grey lighten-3 center-align'/>
			            </td>
			            <td id='td-search' className='hide-on-med-and-up center-align' onClick={this.handleClick}>
				            <Icon>search</Icon>
			            </td>
			            <td id='td-notification' className='notifications center-align' data-target='notifications'>
				            <Icon>notifications</Icon>
			            </td>
			            <td className='account' data-target='account' >
				            <img id='avatar' src={account.img} alt='' className='circle image-responsive' />
			            </td>
		            </tr>
              </tbody>
            </table>
            <NotificationBox id='notifications' notifications={this.props.notifications} />
            <Dropdown id='account' >
              <a className='grey-text text-darken-2'>Profile</a>
              <a className='grey-text text-darken-2'>Logout</a>
            </Dropdown>
          </div>
        </nav>
      </div>
    );
  }
}
