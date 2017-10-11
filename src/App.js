import React, { Component } from 'react';
// Even if it does not get used. It takes preference over
// <script> tags in index.html
// eslint-disable-next-line
import MG from 'metrics-graphics';

const plot = {
  "channel": "nightly",
  "version": "",
  "metric": "FX_NEW_WINDOW_MS",
  "useSubmissionDate": false,
  "sanitize": true,
  "trim": true,
  "compare": "",
  "sensibleCompare": true,
  "evoVersions": "3",
  "filters": {
    "application": "Firefox"
  }
};

const node = 'winOpen';

class App extends Component {
  componentDidMount() {
    window.TelemetryWrapper.go(plot, document.getElementById(node));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Telemetry demo</h1>
          <div id={node}></div>
        </header>
      </div>
    );
  }
}

export default App;
