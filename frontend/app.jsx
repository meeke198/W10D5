import React from "react";
import Clock from "./clock";
import Weather from "./weather";

class App extends React.Component {
  constructor() {
    super(); //setups "this.props"
    this.state = {};
  }

  componentDidMount() {
    //run after render
  }

  componentWillUnmount() {}

  render() {
    return (
      <div id="app">
        <Clock/>
        <Weather/>
      </div>
    );
  }
}

export default App;
