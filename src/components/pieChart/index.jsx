import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import toast from '../../shared/toast';
import config from '../../config';

class PieChart extends Component {
  state = { labels: [], value: [] };

  componentDidMount() {
    fetch(`${config.url}/graph/pie`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json())
      .then((res) => {
        if (res.code === 200) {
          this.setState({ value: res.data.value });
          this.setState({ labels: res.data.labels });
        } else {
          toast(res.message, 'error');
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <h3 className="center-align">Pie Chart</h3>
        <Pie data={{
          labels: this.state.labels,
          datasets: [{
            data: this.state.value,
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
            ],
          }],
        }}
        />
      </div>
    );
  }
}

export default PieChart;
