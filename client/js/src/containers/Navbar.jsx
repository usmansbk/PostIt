import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navbar from '../components/dashboard/Navbar';
import { setGroup, setPage } from '../redux/actionTypes';

const mapStateToProps = state => {
  return {
    page: state.page,
    username: state.account.username
  }
}

const mapDispatchToProps = dispatch => {
	return {
	    _navigate: (history) => {
	      const { pathname } = history.location;
	      let page = 'Home';
	      const groupRegex = /\/dashboard\/groups\/(\d)/.exec(pathname);
		  if (pathname === '/dashboard/groups') {
	      	page = 'Groups';
	      } else if (groupRegex) {
	      	page = 'Group';
	      	const id = groupRegex[1];
	      	dispatch(setGroup(+id));
	      }
	      dispatch(setPage(page));
	    }
	}
}

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)

export default withRouter(NavbarContainer);