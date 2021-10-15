import React from 'react'; //include React
import ReactDOM from 'react-dom'; //give access to ReactDOM
import Clock from './clock';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Clock/>, root);
});