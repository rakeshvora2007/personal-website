import React, {useState} from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import DisplayPage from '../DisplayPage/DisplayPage.jsx';
import Footer from '../Footer/Footer.jsx'

const App = () => {
    const [page, setPage] = useState();
    return (
        <div style={{position: "relative"}}>
           <Navbar setPage={setPage}/>
           <DisplayPage page={page}/>
           <Footer /> 
        </div>
    )
}

export default App
