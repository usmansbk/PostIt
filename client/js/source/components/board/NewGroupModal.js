import React from 'react';
import InputField from '../common/InputField';
import Fab from '../common/Fab';

export default () => {
	return (
		<div>
			<Fab href='#newgroup' color='green' />
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
			</div>
		</div>
	);
}