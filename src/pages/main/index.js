import React from 'react';
import { connect } from 'react-redux';
import { ChartPie, ChartBar, ChartHBar, ChartLine } from '../../components/charts';
import { ColorInfoBlocks } from '../../components/color-info-blocks';
import { Card } from '../../components/card';
import { statisticAction } from '../../modules/statistic';

class Main extends React.Component {
  componentDidMount(){
    this.getData();
  }

  getData = () => {
    this.props.dispatch(statisticAction.index());
  }

  render () {
    const statistics = this.props.state.statistic.data;

    return (
      <div className='charts'>
        <ColorInfoBlocks statistics={statistics} />
        {/**/}
        <div className='row pb-5 justify-content-md-center'>
          <div className='col-12 col-sm-10 col-xl-6 pb-5'>
            {!statistics.articles ? '' : <ChartLine statistics={statistics.articles.statistic} />}
          </div>
          <div className='col-12 col-sm-10 col-xl-6'>
            <div className='embed-responsive embed-responsive-16by9'>
              <iframe src='https://www.youtube.com/embed/CqJSWimYcuY' frameBorder='0'
                      title='https://www.youtube.com/embed/CqJSWimYcuY'
                      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen />
            </div>
          </div>
        </div>
        {/**/}
        <div className='row pb-5 justify-content-md-center'>
          <div className='col-12 col-sm-10 col-xl-6 pb-5'>
            {!statistics.users ? '' : <ChartHBar data={statistics.users.statistic} label='New users' />}
          </div>
          <div className='col-12 col-sm-10 col-xl-6'>
            {!(statistics.articles && statistics.articles.last) ? '' :
              <Card article={statistics.articles.last} />
            }
          </div>
        </div>
        {/**/}
        <div className='row pb-5 justify-content-md-center'>
          <div className='col-12 col-sm-10 col-xl-6 pb-5'>
            {!statistics.comments ? '' : <ChartBar statistics={statistics.comments.statistic} label='Comments from month' />}
          </div>
          <div className='col-12 col-sm-10 col-xl-6'>
            {!(statistics.comments && statistics.users && statistics.articles) ? '' :
              <ChartPie statistics={statistics} labels={['Articles', 'Users', 'Comments']} />
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({state});

const connectionHome = connect(mapStateToProps)(Main);
export {connectionHome as Main};
