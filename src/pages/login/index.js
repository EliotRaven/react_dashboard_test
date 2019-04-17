import React from 'react'
import {connect} from 'react-redux'
import { authAction } from '../../modules/auth';

class Login extends React.Component {
  login = (e) => {
    e.preventDefault();
    this.props.dispatch(authAction.login({
      email: this.email.value,
      password: this.password.value,
    }))
    this.email = '';
    this.password = '';
  }

  render () {
    const {error, loading} = this.props.state.auth;
    return (
      <div className='login mt-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-8'>
              <form onSubmit={this.login}>
                <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input type='text'
                         name='email'
                         className='form-control'
                         id='email'
                         ref={(input)=>this.email = input}
                         placeholder='Enter email' />
                </div>
                <div className='form-group'>
                  <label htmlFor='name'>Password</label>
                  <input type='password'
                         name='password'
                         className='form-control'
                         ref={(input)=>this.password = input}
                         id='password'
                         placeholder='Enter password' />
                </div>
                <button type='submit' disabled={loading} className='btn btn-success'>
                  Submit
                </button>
                {error.data && error.data.message && <div className='alert alert-danger mt-2'>{error.data.message}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({state});

const connectionLogin = connect(mapStateToProps)(Login);

export {connectionLogin as Login};
