import React from 'react';
import { Bar } from 'react-chartjs-2';

class ChartBar extends React.Component {
  constructor(props){
    super();
    this.state = {
      data: {
	      labels: Object.keys(props.statistics),
	      datasets: [
		      {
			      label: props.label,
			      backgroundColor: 'rgba(255,99,132,0.2)',
			      borderColor: 'rgba(255,99,132,1)',
			      borderWidth: 1,
			      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
			      hoverBorderColor: 'rgba(255,99,132,1)',
			      data: Object.values(props.statistics)
		      }
	      ]
      },
    };
  };

  render () {
    return (
      <Bar data={this.state.data} />
    )
  }
}

export {ChartBar}
