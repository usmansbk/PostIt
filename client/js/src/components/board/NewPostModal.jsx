import React from 'react';
import Fab from '../common/Fab';
import Loader from '../common/Loader';
import SelectGroup from './SelectGroup';
import M from '../../../materialize'

export default class NewPostModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gid: '',
			message: '',
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearFields = this.clearFields.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}

	clearFields() {
		this.setState({
			message: '',
		})
	}

	componentDidMount() {
		let elem = document.querySelector('.modal');
		let instance = M.Modal.init(elem);
		elem = document.querySelector('#newpost');
		this.instance = M.Modal.init(elem);
	}

	componentWillReceiveProps({isPosted, failed, ...rest}) {
		if (isPosted) {
			this.instance.close();
			M.toast({html: 'Message Posted!', classes: 'rounded'})
		}
		if (failed) {
			this.instance.close();
			M.toast({html: 'Posting failed!', classes: 'rounded'})
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.handleSubmit(this.state);
	}

	render() {
		const { groups, posting, failed } = this.props;
	    const loader =  <div className='center-align section'>
                  			<Loader />
              			</div>

       	const isInvalid = (this.state.message.trim() === '' || this.state.gid === '');

		return (
			<div>
				<Fab href='#newpost' color='red'onClick={this.clearFields} >mode_edit</Fab>
				<div id='newpost' className='modal modal-fixed-footer'>
					<div className='modal-content'>
						{ posting && loader }
						<form id='new-post-modal' onSubmit={this.handleSubmit}>
							<SelectGroup groups={groups} onChange={this.handleSelect} />
							<div className='input-field' id='message'>
								<textarea className='materialize-textarea' name='message' id='message' value={this.state.message} onChange={this.handleChange} />
								<label htmlFor='message'>Whats new with you</label>
							</div>
						</form>
					</div>
					<div className='modal-footer'>
						<a className='modal-action modal-close waves-effect btn-flat'>Cancel</a>
						<button 
						type='submit'
						form='new-post-modal'
						className={'modal-action waves-effect btn blue white-text ' + (isInvalid ? 'disabled' : '')}>
						Post
						</button>
					</div>
				</div>
			</div>
		);
	}
} 