import React from 'react'
import { UserForm } from "../../components/forms";
import connect from "react-redux/es/connect/connect";
import {userAction, roleAction} from "../../actions";

class CreateUser extends React.Component {
  componentWillMount(){
    this.props.dispatch(roleAction.list())
  }
  onSubmit = data => {
    this.props.dispatch(userAction.create(data))
  }

  render() {
    let { data } = this.props.state.roles

    return (
      <div className='create-user'>
        <UserForm onSubmit={this.onSubmit} btnText="Create" roles={data} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {state}
}

const connectionCreateUser = connect(mapStateToProps)(CreateUser);
export {connectionCreateUser as CreateUser}