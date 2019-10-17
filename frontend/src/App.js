import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

//Components

//Navbar
import AppNavBar from './components/navbar.component';
//BodyPage
import BodyPage from './components/body.component';

export default class App extends Component {
  render() {
    return (
      <div className="App" >
        <AppNavBar />
        <BodyPage />
      </div>
    );
  }
}
