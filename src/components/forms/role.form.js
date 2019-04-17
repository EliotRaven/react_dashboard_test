import React from 'react'
import { FormGroup } from '../form-group';

const iData = {
  name: null,
};

class RoleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: this.props.data ? this.props.data : iData,
      formErrors: iData,
    };
  }

  formValidation(){
    return Object.keys(iData).reduce(
      (isValid, keyName) => isValid && keyName in this.state.form && !!this.state.form[keyName], true
    );
  }

  onChange = (val) => {
    this.setState({
      form: {
        ...this.state.form,
        [val.target.name]: val.target.value,
      }
    });
  }

  findAndShowError = () => {
    const formErrors = {};
    Object.keys(this.state.formErrors).forEach(k => {
      formErrors[k] = this.state.form[k] ? null : 'Field is required'
    });
    this.setState({formErrors});
  }

  submit = (e) => {
    e.preventDefault();
    this.formValidation() ? this.props.onSubmit(this.state.form) : this.findAndShowError();
  }

  render() {
    const role = this.props.data ? this.props.data : {};

    return(
      <form onSubmit={ this.submit }>

        <FormGroup name='name'
                   id='name'
                   type='text'
                   label='Name'
                   value={ role.name ? role.name : null }
                   onChange={ this.onChange } />

        <div className="d-flex justify-content-end">
          <button type='submit'
                  className="btn btn-outline-dark btn-lg d-flex justify-content-between align-items-center">
            <span>{ this.props.btnText }</span>
	          { this.props.loading && <i className="material-icons pl-2 custom-spin">autorenew</i> }
          </button>
        </div>
      </form>
    )
  }
}

export { RoleForm };
