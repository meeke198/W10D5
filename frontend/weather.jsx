import React from "react";
const axios = require("axios"); //call API


class Weather extends React.Component {
  constructor() {
    super(); //setups "this.props"
    this.state = {
     text: "Loading weather"
    };
   
  }

  componentDidMount() {  //run after render
    const that = this;
   axios
     .get(
       "https://api.openweathermap.org/data/2.5/weather?q=Englewood,US&appid=a85cfc7c4e38d9a8bc53ef7c68a47bb6"
     ) //add domain
     .then(function (response) {
       const name = response.data.name;
       const weather = response.data.weather[0]?.description || "No Temp"; //? => co data moi chay tiep
       const humidity = response.data.main.humidity;
       const feelsLike = response.data.main.feels_like;
       that.setState({text: name + " " + weather + " " + humidity + " " + feelsLike});
    //    console.log("that ne", that);
       console.log("respone ne", response);
     })
     .catch(function (error) {
       // handle error
       console.log(error);
     })
     .then(function () {
       // always executed
     });
  }

  componentWillUnmount() { 
   
  }


  render() {

    return (
      <div id="weather">
        <p>Weather neeeeee</p>
        <div id="weather-container">
            {this.state.text}
        </div>
      </div>
    );
  }
}

export default Weather;
