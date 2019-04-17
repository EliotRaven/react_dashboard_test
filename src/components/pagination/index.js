import React from 'react';
import ReactPaginate from 'react-paginate';

class Pagination extends React.Component {
  render() {
    return (
      <ReactPaginate pageCount={this.props.pages}
                     pageRangeDisplayed={this.props.pageRangeDisplayed}
                     marginPagesDisplayed={5}
                     forcePage={parseInt(this.props.page) - 1}
                     onPageChange={this.props.onPageChange}
                     containerClassName="pagination justify-content-center align-items-center"
                     pageClassName="page-item align-self-center"
                     previousClassName="page-item align-self-center"
                     nextClassName="page-item align-self-center"
                     pageLinkClassName="page-link"
                     previousLinkClassName="page-link"
                     nextLinkClassName="page-link"
                     activeClassName="active"
                     disabledClassName="disabled"
                     previousLabel={<i className="material-icons">fast_rewind</i>}
                     nextLabel={<i className="material-icons">fast_forward</i>}/>
    );
  }
}

export { Pagination };
