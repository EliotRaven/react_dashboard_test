import React from 'react'

class ColorInfoBlocks extends React.Component {
  randInt = (min, max) => {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
  }

  formatData = (num, digits) => {
    let si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "k" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
  }

  render() {
    return (
      <div className="color-info-blocks">
        <div className="row pb-5">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="p-3 mb-2 bg-dark text-white info-box">
              <div className="d-flex justify-content-start align-items-center h1 m-0">
                <i className="material-icons m-0 fz50">perm_identity</i>
                <span className="pl-2">{this.props.statistics.users ? this.props.statistics.users.count : 0} Users</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="p-3 mb-2 bg-success text-white info-box">
              <div className="d-flex justify-content-start align-items-center h1 m-0">
                <i className="material-icons m-0 fz50">library_books</i>
                <span className="pl-2">{this.props.statistics.articles ? this.props.statistics.articles.count : 0} Articles</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="p-3 mb-2 bg-danger text-white info-box">
              <div className="d-flex justify-content-start align-items-center h1 m-0">
                <i className="material-icons m-0 fz50">comment</i>
                <span className="pl-2">{this.props.statistics.comments ? this.props.statistics.comments.count : 0} Comments</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="p-3 mb-2 bg-info text-white info-box">
              <div className="d-flex justify-content-start align-items-center h1 m-0">
                <i className="material-icons m-0 fz50">language</i>
                <span className="pl-2">{this.formatData(this.randInt(10, 100), 1)} Locations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {ColorInfoBlocks}