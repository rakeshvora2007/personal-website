import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import DisplayPage from "../DisplayPage/DisplayPage.jsx";
import Footer from "../Footer/Footer.jsx";
import axios from "axios";

const App = () => {
  const [page, setPage] = useState();

  useEffect(() => {
    if (window) {
      window.addEventListener("keydown", generateToken);
    }
    return () => {
      window.removeEventListener("keydown", generateToken);
    };
  }, []);

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
          let response = await axios.post(
            "https://personal-website--backend.herokuapp.com/generateToken",
            { body: { key } }
          );
          console.log(response);
          window.sessionStorage.setItem("token", response.data);
          alert("Generated Token: " + response.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("wrong generator");
      }
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Navbar setPage={setPage} />
      <DisplayPage page={page} />
      <Footer />
    </div>
  );
};

export default App;
