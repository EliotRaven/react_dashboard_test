import React from 'react'
import connect from 'react-redux/es/connect/connect';
import { UserForm } from '../../components/forms';
import { userAction } from '../../modules/user';
import { roleAction } from '../../modules/role';

class CreateUser extends React.Component {
  componentWillMount(){
    this.props.dispatch(roleAction.list());
  }

  onSubmit = data => {
    this.props.dispatch(userAction.create(data));
  }

  render() {
    const { data } = this.props.state.roles

    return (
      <div className='create-user'>
        <UserForm onSubmit={this.onSubmit} btnText='Create' roles={data} />
      </div>
    );
  }
}

const mapStateToProps = state => ({state});

const connectionCreateUser = connect(mapStateToProps)(CreateUser);
export {connectionCreateUser as CreateUser};
