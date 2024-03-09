
import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/routes/Home";
import About from "./Component/routes/About";
import Portfoilo from "./Component/routes/Portfoilo";
import Contact from "./Component/routes/Contact";
import Resume from "./Component/routes/Resume";
// import Footer from "./Footer";
// import FooterDown from "./FooterDown";
import {Routes,Route} from 'react-router-dom'

import './style.css'
function App() {
  return (
    <div className="App">
        <Routes>
                <Route  path="/" element={<Home/>}></Route>
                <Route  path="/about" element={<About/>}></Route>
                <Route  path="/*" element={<Portfoilo/>}></Route>
                <Route  path="/Contact" element={<Contact/>}></Route>
                <Route path="/resume" element={<Resume/>}></Route>
        </Routes>
       <Navbar/>
       {/* <Footer/> */}
       {/* <FooterDown/> */}
    </div>
  );
}

export default App;
