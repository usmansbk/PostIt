import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signUp } from '../redux/asyncActions';
import { Status } from '../redux/actionTypes';
import SignUpPage from '../components/sign/SignUpPage';

const signingUp = status => (status === Status.SIGNING_UP)

const hasFailed = status => (status === Status.SIGNUP_FAILED)

const mapStateToProps = state => {
  return {
    status: state.session,
    signingUp: signingUp(state.session),
    failed: hasFailed(state.session)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: form => {
      dispatch(signUp(form));
    },
    handleSignup: (history, status) => {
      if (status === Status.SIGNED_IN)
            history.replace('/dashboard');
    }
  }
}

const SignUpPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpPage);

export default withRouter(SignUpPageContainer);