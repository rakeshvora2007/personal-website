import React from 'react';
import logo from "../../images/logo.png"

const Navbar = (props) => {
    return (
    <header id="top-bar" className="navbar-fixed-top animated-header">
    <div className="container">
    <nav className="navbar  navbar-light navbar-expand-lg bg-faded ">

        <div className="navbar-brand">
            <a href="index.html"><img src={logo} alt="Logo"/></a>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSource" aria-controls="navbarSourcet" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>  
    <div className="collapse navbar-collapse" id="navbarSource">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" onClick={() => props.setPage("Home")}>Home</a></li>
            <li className="nav-item"><a className="nav-link" onClick={() => props.setPage("Education")}>Eduaction</a></li>
            <li className="nav-item"><a className="nav-link" onClick={() => props.setPage("Experience")}>Work Experience</a></li>
            <li className="nav-item"><a className="nav-link" onClick={() => props.setPage("Projects")}>Projects</a></li>
            <li className="nav-item"><a className="nav-link" onClick={() => props.setPage("Contact")}>Contact</a></li>
        </ul>
    </div>
    
</nav>
        </div>
    </header>
    )
}

export default Navbar
