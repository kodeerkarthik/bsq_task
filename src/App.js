import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import ViewList from './components/ViewList';

class App extends Component {
    
  render() {
    return (
      <div className="p-3" style={{background:'#eeeeee'}}>
        <Router >
          <Switch>
            <Route exact path='/' component={List}></Route>
            <Route exact path='/list/view/:id' component={ViewList}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
