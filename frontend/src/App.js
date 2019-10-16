import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

//Components
import AppNavBar from './components/navbar.component';

export default class App extends Component {
  render() {
    return (
      <div className="App" >
        <AppNavBar />
      </div>
    );
  }
}
