import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Template from '../components/Template/Template.js'
import classes from './App.css';

class App extends Component {
  state = {
      resourceInput: ''
  }

  appendResourceHandler = (event) =>{
    
    alert(this.state.resourceInput)
  }

  resourceChangedHandler = (event) =>{
    this.setState({
      resourceInput: event.target.value
    })
  }

  render() {

    return (
      <div className={classes.App}>
        <Template 
          clicked={this.appendResourceHandler} 
          changed={this.resourceChangedHandler}
          value={this.resource} />

      </div>
    );
  }
}

export default App;
