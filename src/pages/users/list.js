import React from 'react'
import { connect } from "react-redux";
import { userAction } from "../../actions";
import { Link } from 'react-router-dom'
import ReactPaginate from "react-paginate";
import {history} from "../../helpers";
import queryString from "query-string";

class Users extends React.Component {
  componentWillMount(){
    this.getUsers(queryString.parse(this.props.location.search).page)
  }

  remove = (id) => {
    this.props.dispatch(userAction.remove(id))
  }

  getUsers = (page = 1) => {
    this.props.dispatch(userAction.index({page}))
  }

  onPageChange = (page) => {
    if((page.selected + 1) !== parseInt(this.props.state.users.pagination.page))
      history.push({ pathname: "/users", search: `?page=${parseInt(page.selected) + 1}` })
  }

  render () {
    let { users } = this.props.state
    const { pagination } = this.props.state.users

    return (
      <div className="users">
        {users.error.message &&
        <div className="alert alert-danger" role="alert">
          {users.error.message}
        </div>
        }
        <div className="d-flex justify-content-end pb-3">
          <Link to='/users/create' className="btn btn-lg btn-outline-dark">create</Link>
        </div>

        {users.loading && <i className="material-icons custom-spin">autorenew</i>}

        {!users.data.length
          ?
          <h3>Сreate a story create the first user . . .</h3>
          :
          <table className="table custom-table table-responsive-sm">
            <thead className="thead-dark">
            <tr className="text-center">
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody className="text-center">
            {users.data.map( (user, index) => (
                <tr key={user.id}>
                  <th scope="row">{index+1}</th>
                  <td className="image"><img className='d-block w-100' src={user.image} alt={user.name} /></td>
                  <td><Link to={`/users/update/${user.id}`} className="h4">
                    <span>{user.name} {user.surname}</span>
                    <div className="btn btn-warning"><i className="material-icons">edit</i></div>
                    </Link></td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => this.remove(user.id)} className="btn btn-block btn-danger">
                      <i className="material-icons">delete_outline</i>
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
                       containerClassName={'pagination justify-content-center align-items-center'}
                       pageClassName={'page-item align-self-center'}
                       previousClassName={'page-item align-self-center'}
                       nextClassName={'page-item align-self-center'}
                       pageLinkClassName={'page-link'}
                       previousLinkClassName={'page-link'}
                       nextLinkClassName={'page-link'}
                       activeClassName={'active'}
                       disabledClassName={'disabled'}
                       previousLabel={<i className="material-icons">fast_rewind</i>}
                       nextLabel={<i className="material-icons">fast_forward</i>}/>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {state}
}

const connectionUsers = connect(mapStateToProps)(Users);
export {connectionUsers as Users}