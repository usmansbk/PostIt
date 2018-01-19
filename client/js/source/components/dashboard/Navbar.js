import React from 'react';
import Searchbar from './Searchbar';
import NotificationBox from '../../containers/NotificationBox';
import AccountBox from './AccountBox';
import Logo from '../common/Logo';
import Icon from '../common/Icon';
import Button from '../common/Button';
import UserInfo from '../board/UserInfo';
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
    const { locationName, avatarImage } = this.props;
    return this.state.search ? <Searchbar onClick={this.handleClick} /> :
    (
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
      		          <span id='location' className='grey-text text-darken-2 truncate'>{ locationName }</span>
                  </td>
      		        <td className='hide-on-small-only grey-text'>
      		          <input type='search' placeholder='Search PostIt' className='grey lighten-3 center-align'/>
      		        </td>
      		        <td id='td-search' className='hide-on-med-and-up center-align' onClick={this.handleClick}>
      		          <Icon>search</Icon>
      		        </td>
                  {
                    locationName === 'Group' &&
                      <td id='td-person-add' className='center-align'>
                        <Icon>person_add</Icon>
                      </td>
                  }
      		        <td id='td-notification' className='notifications center-align' data-target='notifications'>
      		          <Icon>notifications</Icon>
      		        </td>
      		        <td className='account' data-target='account' >
      		          <img id='avatar' src={avatarImage} alt='' className='circle image-responsive' />
      		        </td>
      		      </tr>
              </tbody>
            </table>
            <NotificationBox />
            <AccountBox>
              <a className='grey-text text-darken-2'>Profile</a>
              <a className='grey-text text-darken-2'>Logout</a>
            </AccountBox>
          </div>
        </nav>
      </div>
    );
  }
}
