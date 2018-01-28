import React from 'react';
import M from '../../../materialize';
import InputField from '../common/InputField';
import Fab from '../common/Fab';
import Loader from '../common/Loader';

export default class NewGroupModal extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			purpose: ''
		};
		this._initModal = this._initModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.clearFields = this.clearFields.bind(this);
	}

	componentDidMount() {
		this._initModal();
	}

	handleChange(event) {
		const { target } = event;
		const name = target.name;
		const value = target.value;
		this.setState({
			[name]: value
		})
	}

	clearFields() {
		this.setState({
			name: '',
			value: '',
		})
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.handleSubmit(this.state);
	}

	_initModal() {
		let elem = document.querySelector('#newgroup');
		let instance = M.Modal.init(elem);
	}

	render() {
		const { failed, creating } = this.props;
	    const loader =  <div className='center-align section'>
	                      <Loader />
	                    </div>
        const message = <div className='center-align'>
        					<p className='red-text text-lighten-1'>
        						Failed to create group
        					</p>
        				</div>
		return (
			<div>
				<Fab href='#newgroup' color='green' onClick={this.clearFields}>add_circle_outline</Fab>
				<div id='newgroup' className='modal'>
					{ creating && loader }
					{ failed && message }
					<div className='modal-content'>
						<form id='new-group-modal' onSubmit={this.handleSubmit}>
							<InputField className='input-field' id='groupname' name='name' label='Group name' value={this.state.name} onChange={this.handleChange}>
							  Group name should not exceed 22 characters
							</InputField>
							<InputField className='input-field' id='discription' name='purpose' label='Discription' value={this.state.purpose} onChange={this.handleChange}>
							  Discription should not exceed 50 characters
							</InputField>
						</form>
					</div>
					<div className='modal-footer'>
						<a className='modal-action modal-close waves-effect btn-flat'>Cancel</a>
						<button type='submit'
						form='new-group-modal'
						className={ 'modal-action blue white-text waves-effect waves-light btn ' + (this.state.name.trim() === ''?'disabled':'')} >
						  Create
						</button>
					</div>
				</div>
			</div>
		);
	}
}