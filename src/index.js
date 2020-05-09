import React from "react";
import ReactDOM from "react-dom";
import Screen from "./components/Screen/index.jsx";

const login = false;

export const handleChangeLoginState = (loggedIn = false) => {
    // setLoggedIn(loggedIn);
    if (loggedIn) {
        login = true;
    //   signIn(jwt);
    } else {
        login = false;
    //   signOut();
    //   client.resetStore();
      // client.clearStore() ==> use this if just want to clear store and keep active queries
    }
  };

ReactDOM.render(<Screen loggedIn={login}/>, document.getElementById("root"));
