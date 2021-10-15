import React from 'react';

class Clock extends React.Component {

    constructor() {
        super(); //setups "this.props"
        this.state = {
            time: new Date()
        }
    }

    render(){

        return(
            <div>
                <h1>Clock</h1>
            </div>
        )
    }

}

export default Clock;