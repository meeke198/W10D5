import React from 'react'; //include React
import ReactDOM from 'react-dom'; //give access to ReactDOM
import App from './app';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<App/>, root);
});

// document.addEventListener("DOMContentLoaded", () => {
//   const root = document.getElementById("root");
//   ReactDOM.render(<Weather />, root);
// });


