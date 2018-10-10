import React, { Component } from 'react';
import { Route, HashRouter, Switch } from "react-router-dom";
import '@coreui/icons/css/coreui-icons.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import login from './component/login.js';
import Register from './component/Register.js';
import dashboard from './component/Dashboard.js';
import './App.css';



class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
        <Route path="/login" component={login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={dashboard} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
