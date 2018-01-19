import React from 'react';
import Fab from '../common/Fab';
import SelectGroup from '../../containers/SelectGroup';

export default () => {
	return (
		<div>
			<Fab href='#newpost' color='red' >mode_edit</Fab>
			<div id='newpost' className='modal modal-fixed-footer'>
				<div className='modal-content'>
					<SelectGroup />
					<div className='input-field' id='message'>
						<textarea className='materialize-textarea' />
						<label htmlFor='message'>Whats new with you</label>
					</div>
				</div>
				<div className='modal-footer'>
					<a className='modal-action modal-action waves-effect btn-flat'>Cancel</a>
					<a className='modal-action modal-action waves-effect btn-flat'>Post</a>
				</div>
			</div>
		</div>
	);
}