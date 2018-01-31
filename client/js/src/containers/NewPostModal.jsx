import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { predicate } from '../helpers/utils';
import { postMessage } from '../redux/asyncActions';
import NewPostModal from '../components/board/NewPostModal';
import { Status } from '../redux/actionTypes';

const getGroups = (groups) => groups.ids.map(id => groups.byId[id]);

const isPosted = (state) => predicate('status', state.status, Status.MESSAGE_POSTED, state);

const hasFailed = (state) => predicate('error', state.error, Status.FAILED_TO_POST_MESSAGE, state);

const isPosting = (status, state) => (status === Status.POSTING_MESSAGE);

const mapStateToProps = state => {
	return {
		posting: isPosting(state.status, state),
		failed: hasFailed(state),
		isPosted: isPosted(state),
		groups: getGroups(state.groups)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleSubmit: form => {
			dispatch(postMessage(form));
		}
	}
}

const NewPostModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(NewPostModal);

export default withRouter(NewPostModalContainer);