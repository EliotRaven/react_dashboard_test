import React from 'react'
import { CommentForm } from '../../components/forms';
import { connect } from 'react-redux';
import { articlesAction } from '../../modules/article';
import { commentAction } from '../../modules/comment';
import { userAction } from '../../modules/user';

class CreateComment extends React.Component {
  componentWillMount(){
    this.props.dispatch(userAction.list());
    this.props.dispatch(articlesAction.list());
  }

  onSubmit = data => {
    this.props.dispatch(commentAction.create(data));
  }

  render() {
    let articles = this.props.state.articles.data;
    let users = this.props.state.users.data;

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

const mapStateToProps = state => ({state});

const connectionCreateComment = connect(mapStateToProps)(CreateComment);
export {connectionCreateComment as CreateComment};
