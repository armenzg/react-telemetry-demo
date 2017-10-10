// Based on code from https://github.com/past/past.github.com/tree/master/perm/photon-perf
const plots = [
  {
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
  },
];

const nodes = ["winOpen", "tabSwitch", "tabClose", "startup"];

window.addEventListener('load', () => {
  TelemetryWrapper.go(plots[0], document.getElementById(nodes[0]));
});
