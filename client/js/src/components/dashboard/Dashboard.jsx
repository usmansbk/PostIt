import React from 'react';
import { Route, Switch, NavLink} from 'react-router-dom';
import Sidenav from './Sidenav';
import Footer from '../common/Footer';
import Navbar from '../../containers/Navbar';
import MessageBoard from '../../containers/MessageBoard';
import GroupsBoard from '../../containers/GroupsBoard';
import GroupBoard from '../../containers/GroupBoard';
import Icon from '../common/Icon';
import { setPageTitle } from '../../helpers/utils';
import '../../../../stylesheets/sass/components/Dashboard.scss';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.__Auth = this.__Auth.bind(this);
  }

  __Auth(props) {
    const { history, isLoggedIn } = props;
    this.props.isAuthenticated(history, isLoggedIn);
  }

  componentWillMount() {
    this.__Auth(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.__Auth(nextProps);
  }

  render() {
    const {match} = this.props;
    setPageTitle('PostIt');
    return (
    <div>
      <Navbar />
      <Sidenav />
      <div className='row'>
        <div className='col m2 hide-on-med-and-down my-side-nav '>
          <NavLink exact to={`${match.url}`} activeClassName='blue-text text-darken-4'>
              <div className='my-nav-item valign-wrapper'>
                <span><Icon>home</Icon></span>
                <span className='my-nav-label'>Home</span>
              </div>
          </NavLink>
          <NavLink to={`${match.url}/groups`} activeClassName='blue-text text-darken-4'>
              <div className='my-nav-item valign-wrapper'>
                <span><Icon>group</Icon></span>
                <span className='my-nav-label'>Groups</span>
              </div>
          </NavLink>
          <Footer className='nav-footer' />
        </div>
        <div id='mainboard' className='col s12 m9 offset-m2'>
            <Switch>
              <Route exact path={`${match.url}`} component={MessageBoard} />
              <Route exact path={`${match.url}/groups`} component={GroupsBoard} />
              <Route exact path={`${match.url}/groups/:id`} component={GroupBoard} />
            </Switch>
        </div>
      </div>
    </div>)
  }
}