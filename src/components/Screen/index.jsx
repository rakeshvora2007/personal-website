import React, { useState } from "react";

import App from "../App/App.jsx";
import Admin from "../Admin/index.jsx";

const Screen = () => {
  const [auth, setAuth] = useState(true);

  return <>{auth ? <Admin /> : <App />}</>;
};

export default Screen;
