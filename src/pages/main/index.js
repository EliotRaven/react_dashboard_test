import React from 'react'
import { connect } from 'react-redux'
import { ChartPie, ChartBar, ChartHBar, ChartLine } from '../../components/charts'

class Main extends React.Component {
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

  render () {
    return (
      <div className="charts">
        <div className="row pb-5">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="p-3 mb-2 bg-dark text-white info-box">
              <div className="d-flex justify-content-start align-items-center h1 m-0">
                <i className="material-icons m-0 fz50">perm_identity</i>
                <span className="pl-2">{this.formatData(this.randInt(1e3, 1e5), 1)} Users</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="p-3 mb-2 bg-success text-white info-box">
              <div className="d-flex justify-content-start align-items-center h1 m-0">
                <i className="material-icons m-0 fz50">payment</i>
                <span className="pl-2">{this.formatData(this.randInt(1e6, 1e7), 1)}$</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="p-3 mb-2 bg-danger text-white info-box">
              <div className="d-flex justify-content-start align-items-center h1 m-0">
                <i className="material-icons m-0 fz50">add_shopping_cart</i>
                <span className="pl-2">{this.formatData(this.randInt(1e4, 1e6), 1)} Products</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="p-3 mb-2 bg-info text-white info-box">
              <div className="d-flex justify-content-start align-items-center h1 m-0">
                <i className="material-icons m-0 fz50">language</i>
                <span className="pl-2">{this.formatData(this.randInt(100, 1000), 1)} Locations</span>
              </div>
            </div>
          </div>
        </div>
        {/**/}
        <div className="row pb-5 justify-content-md-center">
          <div className="col-12 col-sm-10 col-xl-6 pb-5">
            <ChartLine />
          </div>
          <div className="col-12 col-sm-10 col-xl-6">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe title="video" className="embed-responsive-item" src="https://www.youtube.com/embed/fJ9rUzIMcZQ"
                      frameBorder="0"
                      allowFullScreen />
            </div>
          </div>
        </div>
        {/**/}
        <div className="row pb-5 justify-content-md-center">
          <div className="col-12 col-sm-10 col-xl-6 pb-5">
            <ChartHBar />
          </div>
          <div className="col-12 col-sm-10 col-xl-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <div className="alert alert-primary" role="alert">This is a primary alert—check it out!</div>
                <div className="alert alert-success" role="alert">This is a success alert—check it out!</div>
                <div className="alert alert-danger" role="alert">This is a danger alert—check it out!</div>
                <a href="/#" className="card-link">Card link</a>
                <a href="/#" className="card-link">Another link</a>
              </div>
            </div>
          </div>
        </div>
        {/**/}
        <div className="row pb-5 justify-content-md-center">
          <div className="col-12 col-sm-10 col-xl-6 pb-5">
            <ChartBar />
          </div>
          <div className="col-12 col-sm-10 col-xl-6">
            <ChartPie />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {state}
}

const connectionHome = connect(mapStateToProps)(Main);
export {connectionHome as Main}