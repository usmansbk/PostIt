import React from 'react';
import Fab from '../common/Fab';
import Loader from '../common/Loader';
import SelectGroup from './SelectGroup';
import { Status } from '../../redux/actionTypes';

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
		instance = M.Modal.init(elem);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.handleSubmit(this.state);
	}

	render() {
		const { groups, status } = this.props;
	    const loader =  <div className='center-align section'>
                  			<Loader />
              			</div>
        const message = <div className='center-align'>
        					<p className='red-text text-lighten-1'>
        						Failed to post message
        					</p>
        				</div>

		const failed = Status.FAILED_TO_POST_MESSSAGE
		    , posting = (status === Status.POSTING_MESSAGE);
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
						className={'modal-action waves-effect btn blue white-text ' + (this.state.message.trim() === '' ?'disabled':'')}>
						Post
						</button>
					</div>
				</div>
			</div>
		);
	}
} 