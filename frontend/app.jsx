import React from "react";
import Clock from "./clock";
import Weather from "./weather";

class App extends React.Component {
  constructor() {
    super(); //setups "this.props"
    this.state = {screen: 1};
  }

  componentDidMount() {
    //run after render
    console.log("didMount App");
  }

  componentWillUnmount() {
     console.log("UnMount App");
  }
  onSwitch(){
    console.log("onSwitch ne", this)
    if (this.state.screen === 1){
      this.setState({screen: 2});
    } else {
      this.setState({screen: 1});
    }
  }

  render() {
    return (
      <div id="app">
        {this.state.screen === 1 ? <Clock/> : <Weather/>}
        {/* <Clock/>
        <Weather/> */}
        <button onClick={this.onSwitch.bind(this)}>Switch</button>
      </div>
    );
  }
}

export default App;
