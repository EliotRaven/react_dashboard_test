import React from 'react';
import { connect } from 'react-redux';
import { CommentForm } from '../../components/forms';
import { commentAction } from '../../modules/comment';
import { userAction } from '../../modules/user';
import { articlesAction } from '../../modules/article';

class UpdateComment extends React.Component {
  componentWillMount(){
    this.props.dispatch(commentAction.show(this.props.match.params.id));
    this.props.dispatch(userAction.list());
    this.props.dispatch(articlesAction.list());
  }

  onSubmit = data => {
    this.props.dispatch(commentAction.update(data, this.props.match.params.id));
  }

  render() {
    const {loading, item} = this.props.state.comments;
    const articles = this.props.state.articles.data;
    const users = this.props.state.users.data;

    return (
      <div className='update-user'>
        {item.id &&
        <CommentForm onSubmit={this.onSubmit}
                     loading={loading}
                     data={item}
                     articles={articles}
                     users={users}
                     btnText='Update' />}
      </div>
    );
  }
}

const mapStateToProps = state => ({state});

const connectionUpdateComment = connect(mapStateToProps)(UpdateComment);
export {connectionUpdateComment as UpdateComment};
