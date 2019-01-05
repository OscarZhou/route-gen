import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Template from '../components/Template/Template.js'
import classes from './App.css';

class App extends Component {
  state = {
      resourceInput: '',
      resourceLabels:[]
  }

  appendResourceHandler = () =>{
    let resourceLabels = this.state.resourceLabels.slice();
    if (this.state.resourceInput != ""){
      resourceLabels.push(this.state.resourceInput)
      this.setState({
        resourceLabels:resourceLabels,
      })
    }
  }

  deleteResourceHandler = (resourceLabelIndex) => {
    const resourceLabels = [...this.state.resourceLabels]
    resourceLabels.splice(resourceLabelIndex, 1);
    this.setState({
      resourceLabels:resourceLabels
    })
  }

  resourceChangedHandler = (event) =>{
    this.setState({
      resourceInput: event.target.value
    })
  }

  focusResourceHandler = (event) =>{
    event.target.value= ""
  }

  render() {

    return (
      <div className={classes.App}>
        <Template 
          clicked={this.appendResourceHandler} 
          changed={this.resourceChangedHandler}
          focused={this.focusResourceHandler}
          resourceLabelDeleted={this.deleteResourceHandler}
          resourceLabels={this.state.resourceLabels} />

      </div>
    );
  }
}

export default App;
