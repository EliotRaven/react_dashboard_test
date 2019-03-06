import React from 'react'
import {Doughnut} from 'react-chartjs-2';

class ChartPie extends React.Component {
  constructor(){
    super()
    this.data = {
      labels: [
        'Red',
        'Green',
        'Yellow'
      ],
      datasets: [{
        data: [this.getRandomInt(50, 200), this.getRandomInt(100, 150), this.getRandomInt(150, 250)],
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
    }
  }

  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render () {

    return (
      <Doughnut data={this.data} />
    )
  }
}

export {ChartPie}
