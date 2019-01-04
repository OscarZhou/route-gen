import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Template from '../components/Template/Template.js'
import classes from './App.css';

class App extends Component {
  state = {
    resource: ''
  }

  appendResourceHandler = (event) =>{
    this.setState({
      resource: event.target.value
    }) 
  }

  render() {

    return (
      <div className={classes.App}>
        <Template 
          clicked={this.appendResourceHandler} 
          value={this.resource} />

      </div>
    );
  }
}

export default App;
