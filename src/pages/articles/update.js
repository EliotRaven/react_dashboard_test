import React from 'react';
import connect from 'react-redux/es/connect/connect';
import { ArticleForm } from '../../components/forms';
import { articlesAction } from '../../modules/article';

class UpdateArticle extends React.Component {
  componentWillMount(){
    this.props.dispatch(articlesAction.show(this.props.match.params.id));
  }

  onSubmit = data => {
    this.props.dispatch(articlesAction.update(data, this.props.match.params.id));
  }

  render() {
    const {loading, item} = this.props.state.articles;

    return (
      <div className='update-article'>
        {item.id && <ArticleForm onSubmit={this.onSubmit} loading={loading} article={item} btnText='Update' />}
      </div>
    );
  }
}

const mapStateToProps = state => ({state});

const connectionUpdateArticle = connect(mapStateToProps)(UpdateArticle);
export {connectionUpdateArticle as UpdateArticle};
