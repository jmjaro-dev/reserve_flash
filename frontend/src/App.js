import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

//Components

//Navbar
// import AppNavBar from './components/navbar.component';
//BodyPage
// import BodyPage from './components/body.component';
//Login and Register Component
import Login from './components/login.component';
// import Register from './components/register.component';

export default class App extends Component {
  render() {
    return (
      <div className="App" >
        {/* <AppNavBar /> */}
        {/* <BodyPage /> */}
        {/* <Register /> */}
        <Login />
      </div>

    );
  }
}
