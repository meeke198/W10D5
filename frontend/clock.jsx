import React from 'react';

class Clock extends React.Component {

    constructor() {
        super(); //setups "this.props"
        this.state = {
            time: new Date()
        }
        this.tick = this.tick.bind(this);
    }

    componentDidMount(){
        this.intervalId = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    tick(){
        this.setState({time: new Date()});
    }

    render(){
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
        return(
            <div>
                <h1>Clock</h1>
                <div>
                    <p>Time: {hours}:{minutes}:{seconds} PDT</p> 
                    <p>Date: {hours}:{minutes}:{seconds} PDT</p> 

                </div>

            </div>
            
        )
    }

}

export default Clock;