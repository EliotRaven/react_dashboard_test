import React from 'react'
import { RoleForm } from "../../components/forms";
import connect from "react-redux/es/connect/connect";
import {roleAction} from "../../actions";

class CreateRole extends React.Component {
  onSubmit = data => {
    this.props.dispatch(roleAction.create(data))
  }

  render() {
    return (
      <div className='create-user'>
        <RoleForm onSubmit={this.onSubmit} btnText="Create" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {state}
}

const connectionCreateRole = connect(mapStateToProps)(CreateRole);
export {connectionCreateRole as CreateRole}