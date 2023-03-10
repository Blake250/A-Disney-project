import React from 'react';
import { Counter } from './features/counter/Counter';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login  from "./components/Login";
import './App.css';
import PhotoStorage from "./PhotoStorage"



function App() {
    return ( 
        <div className = "App" >
            <Header/>
        <Router>
       
        <Routes>
          <Route path = "/login" element = {<Login/>}  />
      <Route path = "/detail/:id/*"  element = {   <Detail/> }/>


      <Route path = "/" element = { <Home/> }/>
      
      <Route path = "/photostore" element = { <PhotoStorage/> }/>



        </Routes>

        </Router>


        </div>
    );
}

export default App;





