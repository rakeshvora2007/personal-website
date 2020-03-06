import React from 'react'
import Home from '../Pages/Home/Home.jsx';
import Education from '../Pages/Education/Education.jsx';
import WorkEx from '../Pages/WorkEx/WorkEx.jsx';
import Projects from '../Pages/Projects/Projects.jsx';
import Contact from '../Pages/Contact/Contact.jsx';

const DisplayPage = ({page="Home"}) => {

  const selectedPage = page => {
        switch(page) {
            case "Home": return <Home />;
            case "Education": return <Education />;
            case "Experience": return <WorkEx />;
            case "Projects": return <Projects />;
            case "Contact": return <Contact />;
            default: return <Home/>;
        }
    }

    return (
        <div style={{position: "relative", top: "80px"}}>
           {selectedPage(page)} 
        </div>
    )
}

export default DisplayPage
