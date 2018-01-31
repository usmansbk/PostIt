import React from 'react';
import { connect } from 'react-redux';
import { predicate } from '../helpers/utils';
import { createGroup } from '../redux/asyncActions';
import { Status } from '../redux/actionTypes';
import NewGroupModal from '../components/board/NewGroupModal';

const isCreated = (state) => predicate('status', state.status, Status.GROUP_CREATED, state);

const hasFailed = (state) => predicate('error', state.error, Status.CREATE_GROUP_FAILED, state);

const isCreating = (status, state) => (status === Status.CREATING_GROUP);

const mapStateToProps = state => {
	return {
		failed: hasFailed(state),
		creating: isCreating(state.status, state),
		isCreated: isCreated(state)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleSubmit: form => {
			dispatch(createGroup(form));
		}
	}
}

const NewGroupModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(NewGroupModal);

export default NewGroupModalContainer;