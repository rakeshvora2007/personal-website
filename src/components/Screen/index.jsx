import React, { useState, useEffect, useContext } from "react";

import App from "../App/App.jsx";
import Admin from "../Admin/index.jsx";

import { Loading } from "../Reusables/Loading.jsx";

import AuthContext from "../../context/auth/authContext";

const Screen = () => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const {setToken} = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    if (window) {
      if (window.sessionStorage.getItem("token")) {
        setAuth(true);
      } else {
        setAuth(false);
      }
      window.addEventListener("keydown", loginListener);
      window.addEventListener("keydown", generateToken);
      setLoading(false);
    }
    return () => {
      window.removeEventListener("keydown", loginListener);
      window.removeEventListener("keydown", generateToken);
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

  const generateToken = async event => {
    if (event.key === "%") {
      window.sessionStorage.setItem("generatorTokenInput", "%");
    }
    if (event.key === "g") {
      if (window.sessionStorage.getItem("generatorTokenInput")) {
        let val = window.sessionStorage.getItem("generatorTokenInput");
        window.sessionStorage.setItem("generatorTokenInput", val + "g");
      }
    }

    if (event.key === "e") {
      if (window.sessionStorage.getItem("generatorTokenInput")) {
        let val = window.sessionStorage.getItem("generatorTokenInput");
        window.sessionStorage.setItem("generatorTokenInput", val + "e");
      }
    }

    if (event.key === "n") {
      if (window.sessionStorage.getItem("generatorTokenInput")) {
        let val = window.sessionStorage.getItem("generatorTokenInput");
        window.sessionStorage.setItem("generatorTokenInput", val + "n");
      }
    }

    if (event.key === "r") {
      if (window.sessionStorage.getItem("generatorTokenInput")) {
        let val = window.sessionStorage.getItem("generatorTokenInput");
        window.sessionStorage.setItem("generatorTokenInput", val + "r");
      }
    }

    if (event.key === "a") {
      if (window.sessionStorage.getItem("generatorTokenInput")) {
        let val = window.sessionStorage.getItem("generatorTokenInput");
        window.sessionStorage.setItem("generatorTokenInput", val + "a");
      }
    }

    if (event.key === "t") {
      if (window.sessionStorage.getItem("generatorTokenInput")) {
        let val = window.sessionStorage.getItem("generatorTokenInput");
        window.sessionStorage.setItem("generatorTokenInput", val + "t");
      }
    }
    if (event.key === "o") {
      if (window.sessionStorage.getItem("generatorTokenInput")) {
        let val = window.sessionStorage.getItem("generatorTokenInput");
        window.sessionStorage.setItem("generatorTokenInput", val + "o");
      }
    }

    let regex = /%generator/;
    let value = window.sessionStorage.getItem("generatorTokenInput");
    if (value && value.match(regex)) {
      let key = prompt("Please enter key");
      window.sessionStorage.removeItem("generatorTokenInput");
      if (key) {
        try {
          setToken(key);
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("wrong generator");
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

  return <>{auth ? <Admin /> : <App />}</>;
};

export default Screen;
