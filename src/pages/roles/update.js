import React from 'react';
import { RoleForm } from '../../components/forms';
import { connect } from 'react-redux/';
import { roleAction } from '../../modules/role';

class UpdateRole extends React.Component {
  componentWillMount(){
    this.props.dispatch(roleAction.show(this.props.match.params.id));
  }

  onSubmit = data => {
    this.props.dispatch(roleAction.update(data, this.props.match.params.id));
  }

  render() {
    let {loading, item} = this.props.state.roles;

    return (
      <div className='update-user'>
        {item.name && <RoleForm onSubmit={this.onSubmit} loading={loading} data={item} btnText="Update" />}
      </div>
    );
  }
}

const mapStateToProps = state => ({state});

const connectionUpdateRole = connect(mapStateToProps)(UpdateRole);
export {connectionUpdateRole as UpdateRole};
