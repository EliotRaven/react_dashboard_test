import React from 'react'
import { connect } from 'react-redux'
import { ChartPie, ChartBar, ChartHBar, ChartLine } from '../../components/charts'
import { ColorInfoBlocks } from "../../components/color-info-blocks";

import { statisticAction } from "../../actions";

class Main extends React.Component {
  componentWillMount(){
    this.getData()
  }

  getData = () => {
    this.props.dispatch(statisticAction.index())
  }

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
    const { statistics } = this.props.state

    return (
      <div className="charts">
        <ColorInfoBlocks statistics={statistics.data} />
        {/**/}
        <div className="row pb-5 justify-content-md-center">
          <div className="col-12 col-sm-10 col-xl-6 pb-5">
            {!statistics.data.articles ? '' : <ChartLine statistics={statistics.data.articles.statistic} />}
          </div>
          <div className="col-12 col-sm-10 col-xl-6">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe src="https://www.youtube.com/embed/CqJSWimYcuY" frameBorder="0"
                      title="https://www.youtube.com/embed/CqJSWimYcuY"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen />
            </div>
          </div>
        </div>
        {/**/}
        <div className="row pb-5 justify-content-md-center">
          <div className="col-12 col-sm-10 col-xl-6 pb-5">
            {!statistics.data.users ? '' : <ChartHBar data={statistics.data.users.statistic} label="New users" />}
          </div>
          <div className="col-12 col-sm-10 col-xl-6">
            {!statistics.data.articles ? '' :
            <div className="card">
              <h2 className="m-3 text-center">New Article</h2>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="align-self-center">
                    <img src={statistics.data.articles.last.image} alt={statistics.data.articles.last.title} />
                  </div>
                  <div className="align-self-center pl-3">
                    <h5 className="card-title mt-4 mb-4">{statistics.data.articles.last.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{statistics.data.articles.last.source}</h6>
                  </div>
                </div>
                <p className="card-text mt-3">
                  {statistics.data.articles.last.description}
                </p>
                <a href={statistics.data.articles.last.source} className="card-link btn btn-outline-warning">Read more</a>
              </div>
            </div>
            }
          </div>
        </div>
        {/**/}
        <div className="row pb-5 justify-content-md-center">
          <div className="col-12 col-sm-10 col-xl-6 pb-5">
            {!statistics.data.comments ? '' : <ChartBar statistics={statistics.data.comments.statistic} label="Comments from month" />}
          </div>
          <div className="col-12 col-sm-10 col-xl-6">
            {!(statistics.data.comments && statistics.data.users && statistics.data.articles) ? '' :
              <ChartPie statistics={statistics.data} labels={['Articles', 'Users', 'Comments']} />
            }
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