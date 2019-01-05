import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Template from '../components/Template/Template.js'
import classes from './App.css';

class App extends Component {
  state = {
      resourceInput: '',
      resourceLabels:[],
      methodOptions:[
        {id: "1", method:"DELETE", checked:false},
        {id: "2", method:"GET", checked:false},
        {id: "3", method:"HEAD", checked:false},
        {id: "4", method:"OPTIONS", checked:false},
        {id: "5", method:"PATCH", checked:false},
        {id: "6", method:"PUT", checked:false}
      ]
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

  methodChangedHandler = (event, id) => {
    const methodIndex = this.state.methodOptions.findIndex(p => {
      return p.id === id;
    });

    let methodOption = {...this.state.methodOptions[methodIndex]};
    methodOption.checked = !methodOption.checked;
    const methodOptions = [...this.state.methodOptions];
    methodOptions[methodIndex] = methodOption;
    this.setState({
      methodOptions: methodOptions
    });

    alert(methodIndex)
  }

  render() {

    return (
      <div className={classes.App}>
        <Template 
          clicked={this.appendResourceHandler} 
          changed={this.resourceChangedHandler}
          focused={this.focusResourceHandler}
          resourceLabelDeleted={this.deleteResourceHandler}
          resourceLabels={this.state.resourceLabels}
          methodChanged={this.state.methodChangedHandler}
          methodOptions={this.state.methodOptions} />

      </div>
    );
  }
}

export default App;
