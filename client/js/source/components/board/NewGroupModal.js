import React from 'react';
import M from '../../../materialize';
import InputField from '../common/InputField';
import Fab from '../common/Fab';

export default class NewGroupModal extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let elem = document.querySelector('.modal');
		let instance = M.Modal.init(elem);
		elem = document.querySelector('#newgroup');
		instance = M.Modal.init(elem);
	}

	render() {
		return (
			<div>
				<Fab href='#newgroup' color='green'>add_circle_outline</Fab>
				<div id='newgroup' className='modal'>
					<div className='modal-content'>
						<form>
							<InputField id='groupname' label='Group name' />
							<InputField id='discription' label='Discription' />
						</form>
					</div>
					<div className='modal-footer'>
						<a className='modal-action modal-close waves-effect btn-flat'>Cancel</a>
						<a className='modal-action modal-close waves-effect btn-flat'>Post</a>
					</div>
				</div>			</div>
		);
	}
}