import React from "react";
import ReactDOM from "react-dom";
import Screen from "./components/Screen/index.jsx";

import "./css/main.css";
import "./css/animate.css";
import "./css/responsive.css";
import "./css/slider.css";
import "./css/ionicons.min.css";

/* 
If you want to use jquery within the file/window need to be imported like this
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
*/

// import "./js/vendor/modernizr-2.6.2.min.js"

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import './js/main.js'
import './js/slider.js'

import AuthState from "./context/auth/authState";

ReactDOM.render(
  <AuthState>
    <Screen />
  </AuthState>,
  document.getElementById("root")
);
