import React from 'react'
import { ArticleForm } from "../../components/forms";
import connect from "react-redux/es/connect/connect";
import {articlesAction} from "../../actions";

class CreateArticle extends React.Component {

  onSubmit = data => {
    this.props.dispatch(articlesAction.create(data))
  }

  render() {
    return (
      <div className='create-article'>
        <ArticleForm onSubmit={this.onSubmit} btnText="Create" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {state}
}

const connectionCreateArticle = connect(mapStateToProps)(CreateArticle);
export {connectionCreateArticle as CreateArticle}