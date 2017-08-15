import React, { Component } from 'react';
import './App.css';
// import Terminal from 'react-bash';
import { Router, Route } from 'react-router-dom';
import history from './history.js'
import Main from './Main.js'
import Resume from './Resume.js'
/*<HashRouter>
        <div>
          <Route exact path="/" component={Main}/>
          <Route path="/resume" component={Resume}/>
          <a href="file:///C:/src/josh_resume.pdf">WTF</a>
        </div>
      </HashRouter>*/
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div style={{height: "100vh", width:"100vw"}}>
          <Route exact path="/" component={Main}/>
          <Route path="/resume" component={Resume}/>
        </div>
      </Router>
    );
  }
}

export default App;
