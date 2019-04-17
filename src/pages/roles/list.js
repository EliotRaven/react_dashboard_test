import React from 'react';
import queryString from 'query-string';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { history } from '../../helpers';
import { roleAction } from '../../modules/role';

class Roles extends React.Component {
  componentWillMount(){
    this.getRoles(queryString.parse(this.props.location.search).page);
  }

  remove = (id) => {
    this.props.dispatch(roleAction.remove(id));
  }

  getRoles = (page = 1) => {
    this.props.dispatch(roleAction.index({page}));
  }

  onPageChange = (page) => {
    if((page.selected + 1) !== parseInt(this.props.state.roles.pagination.page))
      history.push({ pathname: '/roles', search: `?page=${parseInt(page.selected) + 1}` });
  }

  render () {
    const { roles } = this.props.state;
    const { pagination } = this.props.state.roles;

    return (
      <div className='roles'>
        {roles.error.message &&
        <div className='alert alert-danger' role='alert'>
          {roles.error.message}
        </div>
        }
        <div className='d-flex justify-content-end pb-3'>
          <Link to='/roles/create' className='btn btn-lg btn-outline-dark'>create</Link>
        </div>

        {roles.loading && <i className='material-icons custom-spin'>autorenew</i>}

        {!roles.data.length
          ?
          <h3>Need more roles . . .</h3>
          :
          <table className='table custom-table'>
            <thead className='thead-dark'>
            <tr className='text-center'>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Action</th>
            </tr>
            </thead>
            <tbody className='text-center'>
            {roles.data.map( (role, index) => (
                <tr key={role._id}>
                  <th scope='row'>{index+1}</th>
                  <td>
                    <Link to={`/roles/update/${role._id}`} className='h4'>
                      <span>{role.name}</span>
                      <div className='btn btn-warning'><i className='material-icons'>edit</i></div>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => this.remove(role._id)} className='btn btn-danger'>
                      <i className='material-icons'>delete_outline</i>
                    </button>
                  </td>
                </tr>
              ))
            }
            </tbody>
          </table>
        }
        {(pagination && pagination.pages > 1) &&
        <ReactPaginate pageCount={pagination.pages}
                       pageRangeDisplayed={5}
                       marginPagesDisplayed={5}
                       forcePage={parseInt(pagination.page) - 1}
                       onPageChange={this.onPageChange}
                       containerClassName='pagination justify-content-center align-items-center'
                       pageClassName='page-item align-self-center'
                       previousClassName='page-item align-self-center'
                       nextClassName='page-item align-self-center'
                       pageLinkClassName='page-link'
                       previousLinkClassName='page-link'
                       nextLinkClassName='page-link'
                       activeClassName='active'
                       disabledClassName='disabled'
                       previousLabel={<i className='material-icons'>fast_rewind</i>}
                       nextLabel={<i className='material-icons'>fast_forward</i>}/>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({state})

const connectionRoles = connect(mapStateToProps)(Roles);
export {connectionRoles as Roles};
