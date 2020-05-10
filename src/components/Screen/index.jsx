import React, { useState, useEffect } from "react";

import App from "../App/App.jsx";
import Admin from "../Admin/index.jsx";

const Screen = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (window) {
      window.addEventListener("keydown", loginListener);
    }
    return () => {
      window.removeEventListener("keydown", loginListener);
    };
  }, []);

  const loginListener = event => {
    if (event.key === "#") {
      window.sessionStorage.setItem("input", "#");
    }
    if (event.key === "s") {
      if (window.sessionStorage.getItem("input")) {
        let val = window.sessionStorage.getItem("input");
        window.sessionStorage.setItem("input", val + "s");
      }
    }
  
    if (event.key === "e") {
      if (window.sessionStorage.getItem("input")) {
        let val = window.sessionStorage.getItem("input");
        window.sessionStorage.setItem("input", val + "e");
      }
    }
  
    if (event.key === "c") {
      if (window.sessionStorage.getItem("input")) {
        let val = window.sessionStorage.getItem("input");
        window.sessionStorage.setItem("input", val + "c");
      }
    }
  
    if (event.key === "r") {
      if (window.sessionStorage.getItem("input")) {
        let val = window.sessionStorage.getItem("input");
        window.sessionStorage.setItem("input", val + "r");
      }
    }
  
    if (event.key === "t") {
      if (window.sessionStorage.getItem("input")) {
        let val = window.sessionStorage.getItem("input");
        window.sessionStorage.setItem("input", val + "t");
      }
    }
  
    let regex = /#secret/;
    let value = window.sessionStorage.getItem("input");
    if (value && value.match(regex)) {
      let username = prompt("what the heck?");
      let password = prompt("really thats it?");
      window.sessionStorage.removeItem("input");
      if (username === "rakesh" && password === "rakesh") {
        alert("You are logging in..........");
        setAuth(true);
      } else {
        setAuth(false);
      }
    }
  };

  return <>{auth ? <Admin /> : <App />}</>;
};

export default Screen;
