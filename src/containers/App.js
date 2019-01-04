import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Template from '../components/Template/Template.js'
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Template />
      </div>
    );
  }
}

export default App;
