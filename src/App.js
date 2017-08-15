import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Terminal from 'react-bash';

const history = [
    { value: 'Welcome to Josh Chao\'s personal website!' },
    { value: 'Please type `help` and then the \'Enter\' key to begin.' },
];


class App extends Component {
  render() {
    return (
      <div style={{display: "flex", 
                   flexFlow: "row nowrap", 
                   alignItems: "center", 
                   justifyContent: "center", 
                   width: "100%", 
                   height: "100%",
                   backgroundColor: "black"}}>
        <div style={{width: "50vw", 
                     height: "50vh"}}>
          <Terminal prefix="joshchao@ucsd.edu" history={history}/>
        </div>
      </div>

    );
  }
}

export default App;
