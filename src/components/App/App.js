import React, { Component } from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import Split from '../Split/Split';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      direct: true
    };
  }

  handleClick() {
    this.setState({direct: !this.state.direct})
  }

  render() {
    if(this.state.direct){
      return (
        <div className="App">
          <Landing />
          <Split />
        </div>
      );
    }
  }
}

export default App;
