import React, { Component } from 'react';
import './App.css';
import Template from '../components/Template/Template.js'
import classes from './App.css';

class App extends Component {
  state = {
      resourceInput: '',
      resourceLabels:[],
      methodOptions:[
        {id: 0, method:"DELETE", checked:false},
        {id: 1, method:"GET", checked:false},
        {id: 2, method:"HEAD", checked:false},
        {id: 3, method:"OPTIONS", checked:false},
        {id: 4, method:"PATCH", checked:false},
        {id: 5, method:"PUT", checked:false}
      ],
      test: true
  }

  appendResourceHandler = () =>{
    let resourceLabels = this.state.resourceLabels.slice();
    if (this.state.resourceInput !== ""){
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

  methodClickedHandler = (id) => {
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
  }


  render() {
    let states = this.state.methodOptions.map((option, index) => {
        return (
          <span key={index}>{option.id}+{option.method}+{JSON.stringify(option.checked)}</span>
        )
      });


    return (
      <div className={classes.App}>
        <Template 
          clicked={this.appendResourceHandler} 
          changed={this.resourceChangedHandler}
          focused={this.focusResourceHandler}
          resourceLabelDeleted={this.deleteResourceHandler}
          resourceLabels={this.state.resourceLabels}
          methodClicked={this.methodClickedHandler}
          methodOptions={this.state.methodOptions}
          testClicked={this.state.testHandler} />
      </div>
    );
  }
}

export default App;
