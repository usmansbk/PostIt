import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signIn } from '../redux/asyncActions';
import SignInPage from '../components/sign/SignInPage';

const mapStateToProps = state => {
	return {
		status: state.status
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleSubmit: form => {
			dispatch(signIn(form));
		}
	}
}

const SignInPageContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(SignInPage);

export default withRouter(SignInPageContainer);