import React from 'react'
import { connect } from 'react-redux';
import { ArticleForm } from '../../components/forms';
import { articlesAction } from '../../modules/article';

class CreateArticle extends React.Component {
  onSubmit = data => {
    this.props.dispatch(articlesAction.create(data))
  }

  render() {
    return (
      <div className='create-article'>
        <ArticleForm onSubmit={this.onSubmit} btnText='Create' />
      </div>
    );
  }
}

const mapStateToProps = state => ({state});

const connectionCreateArticle = connect(mapStateToProps)(CreateArticle);
export {connectionCreateArticle as CreateArticle};
