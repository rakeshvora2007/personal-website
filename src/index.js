import React from "react";
import ReactDOM from "react-dom";
import Screen from "./components/Screen/index.jsx";

import "./css/main.css";
import "./css/animate.css";
import "./css/responsive.css";
import "./css/slider.css";
import "./css/ionicons.min.css";

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
