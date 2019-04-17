import React from 'react'
import { Doughnut } from 'react-chartjs-2';

class ChartPie extends React.Component {
  constructor(props){
    super();
    this.state = {
      data: {
        labels: props.labels,
        datasets: [{
          data: [props.statistics.articles.count, props.statistics.users.count, props.statistics.comments.count],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#e15871',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
      },
    };
  }

  render () {
    return (
      <Doughnut data={this.state.data} />
    )
  }
}

export { ChartPie };
