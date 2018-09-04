// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"
import css from '../css/app.scss';
import Root from './Root'
// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<Root />, document.getElementById("root"));
