import React, { useEffect, useState } from "react";
import axios from "axios";

import Project  from "./Project.js";

const Admin = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      {/* <header id="top-bar" className="navbar-fixed-top animated-header">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-brand">
              <a href="index.html">
                ADMIN
              </a>
            </div>
          </div>
          <nav
            className="collapse navbar-collapse navbar-right"
            role="navigation"
          >
            <div className="main-menu">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a onClick={() => props.setPage("Home")}>Home</a>
                </li>
                <li>
                  <a onClick={() => props.setPage("Education")}>Eduaction</a>
                </li>
                <li>
                  <a onClick={() => props.setPage("Experience")}>
                    Work Experience
                  </a>
                </li>
                <li>
                  <a onClick={() => props.setPage("Projects")}>Projects</a>
                </li>
                <li>
                  <a onClick={() => props.setPage("Contact")}>Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header> */}
      <Project />
    </div>
  );
};

export default Admin;
