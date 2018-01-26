import React from 'react';
import { connect } from 'react-redux';
import { createGroup } from '../redux/asyncActions';
import NewGroupModal from '../components/board/NewGroupModal';

const mapStateToProps = state => {
	return {
		status: state.status
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