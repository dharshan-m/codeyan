import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './component/Login';
import Home from './component/Home';
import Signup from './component/Signup';
import Nav from './component/Nav';
import Course from './component/Course';
import Aboutus from './component/AboutUs';
import Features from './component/Features';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' Component={App} />
      <Route path='/login' Component={Login} />
      <Route path='/home' Component={Home}/>
      <Route path='/signup' Component={Signup}/>
      <Route path='/nav' Component={Nav}/>
      <Route path='/course' Component={Course}/>
      <Route path='/aboutus' Component={Aboutus}/>
      <Route path='/features' Component={Features}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
