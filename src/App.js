import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import AppBar from 'material-ui/AppBar';

import Menu from './Menu';
import About from './About';

let appBarStyle = {
    backgroundColor: "rgb(180, 39, 39)",
    color: "white"
}

let currentPage = "Order Now";

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"/>
        <header className="App-header">
          <img src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/19665456_1527911033912745_5462544805129159343_n.jpg?oh=f031244e1efb4c9bf35af8c0bc1cbc17&oe=5A9826C5" className="App-logo" alt="logo" />
          <h1 className="App-title">Moore Than Meals</h1>
        </header>

        <ul className="header">
            <li><NavLink exact to="/">Order Now</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          
        </ul>

        {/* <AppBar style={appBarStyle} 
          title={currentPage}
          iconElementLeft={null}
        /> */}
        <div className="App-content">
            <Route exact path="/" component={Menu}/>
            <Route path="/about" component={About}/>
        </div>
        
      </div>
      </HashRouter>
    );
  }
}

export default App;
