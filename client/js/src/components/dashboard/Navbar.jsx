import React from 'react';
import Searchbar from './Searchbar';
import SearchBox from '../../containers/SearchBox';
import Logo from '../common/Logo';
import Icon from '../common/Icon';
import Button from '../common/Button';
import UserInfo from '../board/UserInfo';
import Logout from '../../containers/Logout';
import M from '../../../materialize';
import '../../../../stylesheets/sass/components/Navbar.scss';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchbar: false , search: false};
    this.handleClick = this.handleClick.bind(this);
    this.materializeInit = this.materializeInit.bind(this);
    this.handleSearchBox = this.handleSearchBox.bind(this);
  }

  materializeInit() {
    let elem = document.querySelector('.account');
    let instance = M.Dropdown.init(elem, { coverTrigger: false, constrainWidth: false });
    elem = document.querySelector('.sidenav');
    instance = M.Sidenav.init(elem)
  }

  componentDidMount() {
    this.materializeInit();
  }

  handleClick(event) {
    const target = event.target;
    const name = target.getAttribute('name');
    if (name === 'cancel-search') {
      this.setState({searchbar: false, search: false}, () => {
        this.materializeInit();
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
      this.props._search(value);
    }
    else {
      this.setState({search: false});
    }
  }

  componentWillReceiveProps(nextProps) {
    const { history } = nextProps;
    this.props._navigate(history);
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
                    <div className='search hide-on-med-and-down'
                      data-target='search-result' id='search'
                      style={
                        {
                          width:'500px'
                        }
                      }>
                      <input type='search' placeholder='Search PostIt'
                       className='grey lighten-3 hide-on-med-and-down' name='search' onChange={this.handleSearchBox} autoComplete='off' />
                      {
                        this.state.search && <SearchBox/>
                      }
                    </div>
                  </div>
    		          <Icon onClick={this.handleClick} className='nav-display nav-item hide-on-med-and-up grey-text text-darken-1'>search</Icon>
                  <a href='#' className='account' data-target='account'><Icon className='nav-display nav-item blue-text'>account_circle</Icon></a>
                  <span className='nav-display nav-item grey-text text-darken-2'>{username}</span>
                </div>
                <ul className='dropdown-content account' id='account'>
                  <li><Logout /></li>
                </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
