import React from 'react';
import { Counter } from './features/counter/Counter';
import {BrowserRouter , Routes, Route, HashRouter} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login  from "./components/Login";
import './App.css';
import PhotoStorage from "./PhotoStorage"
//import { HashRouter } from 'react-router-dom';
import PrivateRoutes from './checkAuth/PrivateRoutes';
import Movies from './components/Movies';


function App() {
    return ( 
        <div className = "App" >
         
       <BrowserRouter>    
        <Header/>
        <Routes>
        <Route  path = "/login"  element = {<Login/>} /> 

        <Route  element={<PrivateRoutes/>} >   
     
      <Route path = "/detail/:id/*"  element = {   <Detail/> }/>


      <Route path = "/" element = { <Home/> }/>
      <Route  path='/movies'  element={<Movies/>}  />

      </Route>
      
      <Route path = "/photostore" element = { <PhotoStorage/> }/>



        </Routes>

      
        </BrowserRouter>

        </div>
    );
}

export default App;





