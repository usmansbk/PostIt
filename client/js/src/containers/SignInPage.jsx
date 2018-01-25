import React from 'react';
import { connect } from 'react-redux';
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

export default SignInPageContainer;