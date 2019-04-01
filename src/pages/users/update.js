import React from 'react'
import { UserForm } from "../../components/forms";
import connect from "react-redux/es/connect/connect";
import {roleAction, userAction} from "../../actions";

class UpdateUser extends React.Component {
  componentWillMount(){
    this.props.dispatch(userAction.show(this.props.match.params.id))
    this.props.dispatch(roleAction.list())
  }

  onSubmit = data => {
    this.props.dispatch(userAction.update(data, this.props.match.params.id))
  }

  render() {
    let {loading, item} = this.props.state.users
    let roles = this.props.state.roles.data

    return (
      <div className='update-user'>
        {!(roles.length && item.id) ? <i className="material-icons pl-2 custom-spin">autorenew</i> :
          <UserForm onSubmit={this.onSubmit} loading={loading} roles={roles} data={item} btnText="Update" />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {state}
}

const connectionUpdateUser = connect(mapStateToProps)(UpdateUser);
export {connectionUpdateUser as UpdateUser}