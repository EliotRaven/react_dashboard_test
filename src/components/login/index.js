import React from 'react'
import {connect} from 'react-redux'
import { authAction } from "../../actions";

class Login extends React.Component {
    login = (e) => {
        e.preventDefault();
        this.props.dispatch(authAction.login({
            username: this.username.value,
            password: this.password.value
        }))
        this.username = ''
        this.password = ''
    }

    render () {
        let {error, loading} = this.props.state.auth
        return (
            <div className="login mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <form onSubmit={this.login}>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text"
                                           className="form-control"
                                           id="username"
                                           ref={(input)=>this.username = input}
                                           placeholder="Enter username" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Password</label>
                                    <input type="password"
                                           className="form-control"
                                           ref={(input)=>this.password = input}
                                           id="password"
                                           placeholder="Enter password" />
                                </div>
                                <button type="submit" disabled={loading} className="btn btn-primary">
                                    Submit
                                </button>

                                {error.data && <div className="alert alert-danger mt-2">{error.data.message}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {state}
}

const connectionLogin = connect(mapStateToProps)(Login);
export {connectionLogin as Login}