import React from "react";
import ReactDOM from "react-dom";
import Screen from "./components/Screen/index.jsx";

import AuthState from "./context/auth/authState";

ReactDOM.render(
  <AuthState>
    <Screen />
  </AuthState>,
  document.getElementById("root")
);
