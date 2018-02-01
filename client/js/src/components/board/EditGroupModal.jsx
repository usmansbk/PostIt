import React from 'react';
import M from '../../../materialize';
import InputField from '../common/InputField';
import Fab from '../common/Fab';
import Loader from '../common/Loader';
import Icon from '../common/Icon';

export default class EditGroupModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.groupName,
      purpose: props.discription
    };
    this._initModal = this._initModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hasNotChanged = this.hasNotChanged.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this._initModal();
  }

  componentWillReceiveProps({failed, isCreated, groupName, discription, ...rest}) {
    if (isCreated) {
      M.toast({html: 'Group updated!', classes: 'rounded'});
      this.instance.close();
    }
    if (failed) {
      M.toast({html: 'Failed to update group', classes: 'rounded'})
      this.instance.close();
    }
  }

  hasNotChanged() {
    const { groupName, discription } = this.props;
    const result = (groupName === this.state.name) && (discription === this.state.purpose);
    return result;
  }

  reset() {
    this.setState({
      name: this.props.groupName,
      purpose: this.props.discription
    })
  }
  
  handleChange(event) {
    const { target } = event;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state);
  }

  _initModal() {
    let elem = document.querySelector('#editgroup');
    this.instance = M.Modal.init(elem);
  }

  render() {
    const { failed, creating } = this.props;
      const loader =  <div className='center-align section'>
                        <Loader />
                      </div>
    return (
      <div>
        <a
        onClick={this.reset}
        title='Edit group info'
        href='#editgroup'
        className='modal-trigger'>
        <Icon className='red-text text-lighten-1 right'>edit</Icon>
        </a>
        <div id='editgroup' className='modal'>
          { (creating && !failed) && loader }
          <div className='modal-content'>
            <form id='new-group-modal' onSubmit={this.handleSubmit}>
              <InputField type='text' id='newname' name='name' label='Group name' value={this.state.name} onChange={this.handleChange} />
              <InputField  type='text' id='newdiscription' name='purpose' label='Discription' value={this.state.purpose} onChange={this.handleChange} />
            </form>
          </div>
          <div className='modal-footer'>
            <a className='modal-action modal-close waves-effect btn-flat'>Cancel</a>
            <button type='submit'
            form='new-group-modal'
            className={ 'modal-action blue white-text waves-effect waves-light btn ' + (this.hasNotChanged()?'disabled':'')} >
              Create
            </button>
          </div>
        </div>
      </div>
    );
  }
}