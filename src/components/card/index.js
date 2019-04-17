import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <h2 className="m-3 text-center">New Article</h2>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="align-self-center">
              <img src={ this.props.article.image } alt={ this.props.article.title } />
            </div>
            <div className="align-self-center pl-3">
              <h5 className="card-title mt-4 mb-4">{ this.props.article.title }</h5>
              <h6 className="card-subtitle mb-2 text-muted">{ this.props.article.source }</h6>
            </div>
          </div>
          <p className="card-text mt-3">
            { this.props.article.description }
          </p>
          <a href={ this.props.article.source } className="card-link btn btn-outline-warning">Read more</a>
        </div>
      </div>
    );
  }
}

export { Card };
