import React from 'react'
import { connect } from "react-redux";
import { commentAction } from "../../actions";
import { Link } from 'react-router-dom'
import ReactPaginate from "react-paginate";
import {history} from "../../helpers";
import queryString from "query-string";

class Comments extends React.Component {
  componentWillMount(){
    this.getComments(queryString.parse(this.props.location.search).page)
  }

  remove = (id) => {
    this.props.dispatch(commentAction.remove(id))
  }

  getComments = (page = 1) => {
    this.props.dispatch(commentAction.index({page}))
  }

  onPageChange = (page) => {
    if((page.selected + 1) !== parseInt(this.props.state.comments.pagination.page))
      history.push({ pathname: "/comments", search: `?page=${parseInt(page.selected) + 1}` })
  }

  render () {
    let { comments } = this.props.state
    const { pagination } = this.props.state.comments

    return (
      <div className="users">
        {comments.error.message &&
        <div className="alert alert-danger" role="alert">
          {comments.error.message}
        </div>
        }
        <div className="d-flex justify-content-end pb-3">
          <Link to='/comments/create' className="btn btn-lg btn-outline-dark">create</Link>
        </div>

        {comments.loading && <i className="material-icons custom-spin">autorenew</i>}

        {!comments.data.length
          ?
          <h3>Сreate a story create the first user . . .</h3>
          :
          <table className="table custom-table">
            <thead className="thead-dark">
            <tr className="text-center">
              <th scope="col">#</th>
              <th scope="col">Message</th>
              <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody className="text-center">
            {comments.data.map( (comment, index) => (
                <tr key={comment.id}>
                  <th scope="row">{index+1}</th>
                  <td>
                    <Link to={`/comments/update/${comment.id}`} className="h4">
                      <span>{comment.message}</span>
                      <div className="btn btn-warning"><i className="material-icons">edit</i></div>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => this.remove(comment.id)} className="btn btn-block btn-danger">
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

const connectionComments = connect(mapStateToProps)(Comments);
export {connectionComments as Comments}