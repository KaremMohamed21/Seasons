import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  // Initialize State
  state = { lat: null, err: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ err: err.message })
    );
  }

  render() {
    if (this.state.err && !this.state.lat) {
      return <div>Error: {this.state.err}</div>;
    }

    if (!this.state.err && this.state.lat) {
      return <div>latitude: {this.state.lat}</div>;
    }

    return <div>Loading</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
