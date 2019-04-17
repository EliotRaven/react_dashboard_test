import React from 'react';
import { Link } from 'react-router-dom';

class ArticleItem extends React.Component {
  render() {
    const { item, edit } = this.props;

    return (
      <li className="item mb-4 list-group-item d-flex justify-content-between align-items-center flex-md-column flex-lg-row">
        {item.image &&
        <div className="item-image col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <img className="d-block w-100" src={item.image} alt={item.title} />
        </div>}
        <div className={(!item.image) ? 'col-sm-12 col-md-12 col-lg-10 col-xl-10' : 'col-sm-12 col-md-12 col-lg-6 col-xl-6'}>
          <div className="description">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2">
          <div className="d-flex justify-content-between align-items-center flex-md-row flex-lg-column">
            <div className="col-md-6 col-lg-12">
              <Link to={edit} className="btn btn-block btn-warning">
                <i className="material-icons">edit</i>
              </Link>
            </div>
            <div className="col-md-6 col-lg-12">
              <button onClick={() => this.props.remove(item.id)} className="btn btn-block btn-danger">
                <i className="material-icons">delete</i>
              </button>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export { ArticleItem };
