import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class ChartHBar extends React.Component {
  constructor(props){
    super()

    this.state = {
      data: {
        labels: Object.keys(props.data),
        datasets: [
          {
            label: 'New users',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: Object.values(props.data)
          }
        ],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
  }

  render() {
    return (
      <HorizontalBar data={this.state.data} option={this.state.options}/>
    );
  }
}

export {ChartHBar}
