import React from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import Sidepanel from './Sidepanel';
import Sidenav from './Sidenav';
import PanelItem from './PanelItem';
import Footer from '../common/Footer';
import Navbar from '../../containers/Navbar';
import MessageBoard from '../../containers/MessageBoard';
import GroupsBoard from '../../containers/GroupsBoard';
import GroupBoard from '../../containers/GroupBoard';
import ProfileBoard from '../board/ProfileBoard';
import { setPageTitle } from '../../helpers/utils';
import '../../../../stylesheets/sass/components/Dashboard.scss';

export default ({match}) => {
  setPageTitle('PostIt');
  return (
  <div>
    <Navbar />
    <Sidenav />
    <div className='row'>
      <Sidepanel>
        <div className='section'>
          <NavLink exact to={`${match.url}`} activeClassName='red-text text-lighten-1'><PanelItem icon='home' label='Home' /></NavLink>
          <NavLink to={`${match.url}/groups`} activeClassName='red-text text-lighten-1'><PanelItem icon='group' label='Groups' /></NavLink>
        </div>
        <Footer className='nav-footer' />
      </Sidepanel>
      <div id='mainboard' className='col s12 m9 offset-m2 container'>
        <Switch>
          <Route exact={true} path={`${match.url}`} component={MessageBoard} />
          <Route exact={true} path={`${match.url}/groups/:id`} component={GroupBoard} />
          <Route exact={true} path={`${match.url}/groups`} component={GroupsBoard} />
          <Route render={(props) => <Redirect to='/notfound' />} />
        </Switch>
      </div>
    </div>
  </div>)
} 