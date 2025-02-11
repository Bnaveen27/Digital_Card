import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
const AppRouters = () => {

    const MainSections = () => (
        <>
          <Navbar />
          <Home />          
        </>
      );
  return (
    <div>

<Router >
            <Routes>
              <Route path="/" element={<MainSections/>} />
              <Route path="/Home" element={<MainSections />} />
              <Route path="/Register" element={<Register/>} />
              <Route path="/Login" element={<Login/>} />


            </Routes>
          </Router>
      
    </div>
  )
}

export default AppRouters
