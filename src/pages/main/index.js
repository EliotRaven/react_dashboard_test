import React from 'react'
import { connect } from 'react-redux'
import { ChartPie, ChartBar, ChartHBar, ChartLine } from '../../components/charts'
import { ColorInfoBlocks } from "../../components/color-info-blocks";
import { Card } from "../../components/card";

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
    const statistics = this.props.state.statistics.data

    return (
      <div className="charts">
        <ColorInfoBlocks statistics={statistics} />
        {/**/}
        <div className="row pb-5 justify-content-md-center">
          <div className="col-12 col-sm-10 col-xl-6 pb-5">
            {!statistics.articles ? '' : <ChartLine statistics={statistics.articles.statistic} />}
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
            {!statistics.users ? '' : <ChartHBar data={statistics.users.statistic} label="New users" />}
          </div>
          <div className="col-12 col-sm-10 col-xl-6">
            {!(statistics.articles && statistics.articles.last) ? '' :
              <Card article={statistics.articles.last} />
            }
          </div>
        </div>
        {/**/}
        <div className="row pb-5 justify-content-md-center">
          <div className="col-12 col-sm-10 col-xl-6 pb-5">
            {!statistics.comments ? '' : <ChartBar statistics={statistics.comments.statistic} label="Comments from month" />}
          </div>
          <div className="col-12 col-sm-10 col-xl-6">
            {!(statistics.comments && statistics.users && statistics.articles) ? '' :
              <ChartPie statistics={statistics} labels={['Articles', 'Users', 'Comments']} />
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