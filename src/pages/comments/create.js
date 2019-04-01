import React from 'react'
import { CommentForm } from "../../components/forms";
import connect from "react-redux/es/connect/connect";
import {articlesAction, commentAction, userAction} from "../../actions";

class CreateComment extends React.Component {
  componentWillMount(){
    this.props.dispatch(userAction.list())
    this.props.dispatch(articlesAction.list())
  }

  onSubmit = data => {
    this.props.dispatch(commentAction.create(data))
  }

  render() {
    let articles = this.props.state.articles.data
    let users = this.props.state.users.data

    return (
      <div className='create-user'>
        <CommentForm onSubmit={this.onSubmit}
                     articles={articles}
                     users={users}
                     btnText="Create" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {state}
}

const connectionCreateComment = connect(mapStateToProps)(CreateComment);
export {connectionCreateComment as CreateComment}