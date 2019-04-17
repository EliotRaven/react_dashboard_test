import React from 'react';
import { connect } from 'react-redux';
import { RoleForm } from '../../components/forms';
import { roleAction } from '../../modules/role';

class CreateRole extends React.Component {
  onSubmit = data => {
    this.props.dispatch(roleAction.create(data));
  }

  render() {
    return (
      <div className='create-user'>
        <RoleForm onSubmit={this.onSubmit} btnText='Create' />
      </div>
    );
  }
}

const mapStateToProps = state => ({state});

const connectionCreateRole = connect(mapStateToProps)(CreateRole);
export {connectionCreateRole as CreateRole};
