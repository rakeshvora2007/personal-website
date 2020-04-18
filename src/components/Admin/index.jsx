import React, { useEffect, useState } from "react";
import axios from "axios";

import Project from "./Project.js";
import Education from "./Education";
import Work from "./Work";

const Admin = () => {
  const [tab, setTab] = useState("");

  const renderTab = () => {
    switch(tab) {
      case "Education": return <Education/>;
      case "Project": return <Project />;
      case "Work": return <Work/>;
      default: return <Education/>
    }
  }
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
      <ul>
        <li>
          <a onClick={() => setTab("Education")}>Eduaction</a>
        </li>
        <li>
          <a onClick={() => setTab("Work")}>Work Experience</a>
        </li>
        <li>
          <a onClick={() => setTab("Project")}>Projects</a>
        </li>
      </ul>
      {renderTab()}
    </div>
  );
};

export default Admin;
