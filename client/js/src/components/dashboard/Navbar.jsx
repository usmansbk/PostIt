import React from 'react';
import { NavLink } from 'react-router-dom';
import EventHandler from '../../containers/EventHandler';
import Searchbar from './Searchbar';
import Search from './Search';
import SearchBox from '../../containers/SearchBox';
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
    this.jsInit = this.jsInit.bind(this);
    this.handleSearchBox = this.handleSearchBox.bind(this);
  }

  jsInit() {
    let elem = document.querySelector('.account');
    let instance = M.Dropdown.init(elem, { coverTrigger: false, constrainWidth: false });
    elem = document.querySelector('.sidenav');
    instance = M.Sidenav.init(elem)
  }

  componentDidMount() {
    this.jsInit();
  }

  handleClick(event) {
    const target = event.target;
    const name = target.getAttribute('name');
    if (name === 'cancel-search') {
      this.setState({searchbar: false, search: false}, () => {
        this.jsInit();
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
    const { page, username } = this.props;
    return this.state.searchbar ?
    (<div>
      <Searchbar onClick={this.handleClick} onChange={this.handleSearchBox}> 
        { this.state.search && <SearchBox /> }
      </Searchbar>
     </div>
    ):
    (
      <div>
        <div className='navbar-fixed'>
          <nav>
            <div className='nav-wrapper white '>
                <a href='#' className='sidenav-trigger hide-on-large-only' data-target='slide-out'>
                  <Icon className='grey-text text-darken-2'>menu</Icon>
                </a>  
                <Logo />
  		          <span id='location' className='grey-text text-darken-2'>{ page }</span>

                <div className='nav-display right'>
                  <div className='nav-display hide-on-med-and-down nav-item'>
                    <Search id='search' onChange={this.handleSearchBox}>
                    {
                      this.state.search && <SearchBox />
                    }
                    </Search>
                  </div>
    		          <Icon onClick={this.handleClick} className='nav-display nav-item hide-on-med-and-up'>search</Icon>
                  <a href='#' className='account' data-target='account'><Icon className='nav-display nav-item blue-text'>account_circle</Icon></a>
                  <span className='nav-display nav-item grey-text text-darken-2'>{username}</span>
                </div>
                <AccountBox>
                <NavLink to='/'><EventHandler className='grey-text text-darken-2' label='Logout'>Logout</EventHandler></NavLink>
              </AccountBox>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
