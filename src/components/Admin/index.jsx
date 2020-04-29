import React, { useEffect, useState } from "react";
import axios from "axios";

import Project from "./Project.js";
import Education from "./Education";
import Work from "./Work";

const Admin = () => {
  const [tab, setTab] = useState("");

  const renderTab = () => {
    switch (tab) {
      case "Education":
        return <Education />;
      case "Project":
        return <Project />;
      case "Work":
        return <Work />;
      default:
        return <Education />;
    }
  };
  return (
    <div>
      <header id="top-bar" className="navbar">
        <div className="container">
          <div className="navbar-header">
            <div className="">
              <a href="index.html">ADMIN</a>
            </div>
          </div>
          <nav
            className="collapse navbar-collapse navbar-right"
            role="navigation"
          >
            <div className="main-menu">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a onClick={() => setTab("Education")}>Eduaction</a>
                </li>
                <li>
                  <a onClick={() => setTab("Work")}>Work Experience</a>
                </li>
                <li>
                  <a onClick={() => setTab("Project")}>Projects</a>
                </li>
                <li>
                  <a onClick={() => alert("Logout")}>Logout</a>
                </li>                
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {renderTab()}
    </div>
  );
};

export default Admin;
