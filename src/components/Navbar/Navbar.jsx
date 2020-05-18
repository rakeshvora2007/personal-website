import React from 'react'

const Navbar = (props) => {
    return (
        <header id="top-bar" className="navbar-fixed-top animated-header">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div className="navbar-brand">
                    <a href="index.html"><img style={{height: "110px", width: "118px"}} src="images/logo.png" alt=""/></a>
                </div>
            </div>
            <nav className="collapse navbar-collapse navbar-right" role="navigation">
                <div className="main-menu">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a onClick={() => props.setPage("Home")}>Home</a></li>
                        <li><a onClick={() => props.setPage("Education")}>Eduaction</a></li>
                        <li><a onClick={() => props.setPage("Experience")}>Work Experience</a></li>
                        <li><a onClick={() => props.setPage("Projects")}>Projects</a></li>
                        <li><a onClick={() => props.setPage("Contact")}>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    )
}

export default Navbar
