import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Sidepanel from './Sidepanel';
import PanelItem from './PanelItem';
import Footer from '../common/Footer';
import Navbar from '../../containers/Navbar';
import MessageBoard from '../../containers/MessageBoard';
import GroupsBoard from '../../containers/GroupsBoard';
import GroupBoard from '../../containers/GroupBoard';
import ProfileBoard from '../board/ProfileBoard';
import '../../../../stylesheets/sass/components/Dashboard.scss';

export default ({match}) => {
  return (
  <div>
    <Navbar />
    <div className='row'>
      <Sidepanel className='col m2 hide-on-med-and-down my-side-nav'>
        <div className='section'>
          <NavLink exact to={`${match.url}`} activeClassName='red-text text-lighten-1'><PanelItem icon='home' label='Home' /></NavLink>
          <NavLink to={`${match.url}/groups`} activeClassName='red-text text-lighten-1'><PanelItem icon='group' label='Groups' /></NavLink>
          <NavLink to={`${match.url}/profile`} activeClassName='red-text text-lighten-1'><PanelItem icon='account_circle' label='Profile' /></NavLink>
        </div>
        <Footer className='nav-footer' />
      </Sidepanel>
      <div id='mainboard' className='col s12 m9 offset-m2 container'>
        <Switch>
          <Route exact={true} path={`${match.url}`} component={MessageBoard} />
          <Route exact={true} path={`${match.url}/groups/:id`} component={GroupBoard} />
          <Route exact={true} path={`${match.url}/groups`} component={GroupsBoard} />
          <Route exact={true} path={`${match.url}/profile`} component={ProfileBoard} />
        </Switch>
      </div>
    </div>
  </div>)
} 