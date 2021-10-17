import React from "react";

class Clock extends React.Component {
  constructor() {
    super(); //setups "this.props"
    this.state = {
      time: new Date(),
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }
  tick() {
    this.setState({ time: new Date() });
  }
  getDate(time) {
    return time.toString().split(" ").slice(0, 4).join(" ");
  }

  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return (
        <div id="clock">
          <h1 style={{ padding: "20px 0px"}}>Clock</h1>
          <div className="border" style={{ border: "1px solid black" }}>
            <p className="clock-container">
              <span>Time:</span>{" "}
              <span>
                {hours}:{minutes}:{seconds} PDT{" "}
              </span>
            </p>
            <p className="clock-container" style={{ paddingTop: 20 }}>
              <span>Date:</span> <span>{this.getDate(this.state.time)}</span>
            </p>
          </div>
        </div>
    );
  }
}

export default Clock;
