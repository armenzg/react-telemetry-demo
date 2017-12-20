import React, { Component } from 'react';
import MG from 'metrics-graphics';
import MetricsGraphics from 'react-metrics-graphics';

class App extends Component {
  state = {
    series: undefined,
  }

  async componentDidMount() {
    const data = await (
      await fetch('https://health-quantum-dashboard.herokuapp.com/api/perf/benchmark/speedometer?channel=nightly&architecture=64')
    ).json();
    data.series.map(evo => MG.convert.date(evo, 'date'));
    this.setState({
      labels: data.legendLabels,
      series: data.series,
    });
  }

  render() {
    return (this.state.series ?
      <MetricsGraphics
        title='Hello title!'
        data={this.state.series}
        legend={this.state.labels}
        x_accessor='date'
        y_accessor='value'
        full_width
        full_height
      />
      : null
    );
  }
}

export default App;
