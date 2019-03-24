import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import toast from '../../shared/toast';
import config from '../../config';

class BarChart extends Component {
  state = { labels: [], value: [] };

  componentDidMount() {
    fetch(`${config.url}/graph/bar`, {
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
        <h3 className="center-align">Bar Chart</h3>
        <Bar data={{
          labels: this.state.labels,
          datasets: [
            {
              label: 'bar chart',
              backgroundColor: ['#0FA3B1', '#B5E2FA', '#8FC93A', '#EDDEA4', '#E4CC37', '#E18335'],
              data: this.state.value,
            },
          ],
        }}
        />
      </div>
    );
  }
}

export default BarChart;
