import React from 'react';
import Searchbar from './Searchbar';
import Search from './Search';
import SearchBox from '../../containers/SearchBox';
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
    this.state = { searchbar: false , search: false};
    this.handleClick = this.handleClick.bind(this);
    this.dropDownInit = this.dropDownInit.bind(this);
    this.handleSearchBox = this.handleSearchBox.bind(this);
  }

  dropDownInit() {
    let elem = document.querySelector('.notifications');
    let instance = M.Dropdown.init(elem, { coverTrigger: false, constrainWidth: false,});
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
      this.setState({searchbar: false, search: false}, () => {
        this.dropDownInit();
      });
    } else {
      this.setState({searchbar: true});
    }
  }

  handleSearchBox(event) {
    const {target} = event;
    const value = target.value;
    if (target.value.length > 0) {
      this.setState({search: true});
    }
    else {
      this.setState({search: false});
    }

  }

  render() {
    const { locationName, avatarImage } = this.props;
    return this.state.searchbar ?
    (<div>
      <Searchbar onClick={this.handleClick} onChange={this.handleSearchBox}> 
        { this.state.search && <SearchBox /> }
      </Searchbar>
     </div>
    ):
    (
      <div className='navbar-fixed'>
        <nav>
          <div className='nav-wrapper white '>
            <table>
              <tbody>
      	        <tr>
      		        <td id='td-menu'><a className='sidenav-trigger hide-on-large-only' data-target='slide-out'><Icon>menu</Icon></a></td>
      		        <td id='td-logo' className='left-align'>
                    <Logo>PostIt</Logo>
      		        </td>
                  <td id='td-loc'>
      		          <span id='location' className='grey-text text-darken-2 truncate'>{ locationName }</span>
                  </td>
      		        <td className='hide-on-small-only grey-text' id='td-search-field'>
                    <Search onChange={this.handleSearchBox}>
                    {
                      this.state.search && <SearchBox />
                    }
                    </Search>
      		        </td>
      		        <td id='td-search' className='hide-on-med-and-up center-align' onClick={this.handleClick}>
      		          <Icon>search</Icon>
      		        </td>
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
