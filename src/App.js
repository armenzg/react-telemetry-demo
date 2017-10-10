import React, { Component } from 'react';
import Telemetry from 'telemetry-next-node';

class App extends Component {
  componentDidMount() {
    // XXX: Unfortunately this fails with:
    // TypeError: request.get(...).buffer is not a function
    // Initialize library
    Telemetry.init(() => {
      const version = Telemetry.getVersions()[0]; // Get the first available version

      // Optain a mapping from filter names to possible values of those filters
      const parts = version.split("/");
      Telemetry.getFilterOptions(parts[0], parts[1], (filters) => {
        console.log("Measures available:");
        filters.metric.forEach((measure) => {
          console.log(measure);
        });
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Telemetry demo</h1>
        </header>
      </div>
    );
  }
}

export default App;
