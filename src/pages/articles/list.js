import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { history } from '../../helpers';

import { articlesAction } from '../../modules/article';

import { Pagination } from '../../components/pagination';
import { ArticleItem } from '../../components/list-items';

class Articles extends React.Component {
  componentDidMount(){
    this.getArticles(queryString.parse(this.props.location.search).page);
  }

  remove = (id) => {
    this.props.dispatch(articlesAction.remove(id));
  }

  getArticles = (page = 1) => {
    this.props.dispatch(articlesAction.index({page}));
  }

  onPageChange = (page) => {
    if((page.selected + 1) !== parseInt(this.props.state.articles.pagination.page))
      history.push({ pathname: '/articles', search: `?page=${parseInt(page.selected) + 1}` });
  }

  render () {
    const { articles } = this.props.state;
    const { pagination } = this.props.state.articles;

    return (
      <div className='articles'>

        {articles.error.message &&
        <div className='alert alert-danger' role='alert'>
          {articles.error.message}
        </div>
        }
        <div className='d-flex justify-content-end pb-3'>
          <Link to='/articles/create' className='btn btn-lg btn-outline-dark'>create</Link>
        </div>

        {articles.loading && <i className='material-icons custom-spin'>autorenew</i>}

        {!articles.data.length && !articles.loading
          ?
          <h3>Сreate a story write the first article . . .</h3>
          :
          <ul className='list-group'>
            {articles.data.map( article => (
              <ArticleItem key={article.id} edit={`/articles/update/${article.id}`} item={article} remove={this.remove} />
            ))
            }
          </ul>
        }

        {(pagination.pages > 1) &&
          <Pagination pageRangeDisplayed={5}
                      onPageChange={this.onPageChange}
                      pages={pagination.pages}
                      page={pagination.page.page} />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({state});

const connectionArticles = connect(mapStateToProps)(Articles);
export {connectionArticles as Articles};
