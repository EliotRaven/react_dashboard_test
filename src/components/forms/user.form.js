import React from 'react'
import {FormGroup} from "../form-group";
import { FormSelect } from "../form-select";

const iData = {
  name: null,
  surname: null,
  email: null,
  role_id: null,
  password: null,
}

class UserForm extends React.Component {
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
    )
  }

  onChange = (val) => {
    this.setState({
      form: {
        ...this.state.form,
        [val.target.name]: val.target.value
      }
    })
  }

  findAndShowError = () => {
    let formErrors = {}
    Object.keys(this.state.formErrors).forEach(k => {
      formErrors[k] = this.state.form[k] ? null : 'Field is required'
    });
    this.setState({formErrors})
  }

  submit = (e) => {
    e.preventDefault()
    this.formValidation() ? this.props.onSubmit(this.state.form) : this.findAndShowError()
  }

  cOptions = () => {
    return this.props.roles.map(r => {
      return {value: r.id.toString(), label: r.name}
    })
  }

  render() {
    let user = this.props.data ? this.props.data : {}
    let roles = this.props.roles ? this.cOptions() : []

    return(
      <form onSubmit={this.submit}>

        <FormGroup name='image'
                   id='image'
                   type='text'
                   label='Image'
                   value={user.image ? user.image : null}
                   onChange={this.onChange} />

        <FormGroup required={true}
                   name='name'
                   id='name'
                   type='text'
                   label='Name'
                   value={user.name ? user.name : null}
                   onChange={this.onChange}
                   error={this.state.formErrors.name} />

        <FormGroup required={true}
                   name='surname'
                   id='surname'
                   type='text'
                   value={user.surname ? user.surname : null}
                   label='Surname'
                   onChange={this.onChange}
                   error={this.state.formErrors.surname}
        />

        <FormSelect required={true}
                    name='role_id'
                    id='role_id'
                    label='Role'
                    options={roles}
                    option={user.role_id ? user.role_id : null}
                    error={this.state.formErrors.role_id}
                    onChange={this.onChange} />

        <FormGroup required={true}
                   name='email'
                   id='email'
                   type='text'
                   label='Email'
                   value={user.email ? user.email : null}
                   error={this.state.formErrors.email}
                   onChange={this.onChange} />

        <FormGroup required={true}
                   name='password'
                   id='password'
                   type='password'
                   label='Password'
                   value={user.password ? user.password : null}
                   error={this.state.formErrors.password}
                   onChange={this.onChange} />

        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-outline-dark btn-lg d-flex justify-content-between align-items-center">
            <span>{this.props.btnText}</span> {this.props.loading && <i className="material-icons pl-2 custom-spin">autorenew</i>}
          </button>
        </div>
      </form>
    )
  }
}

export {UserForm}