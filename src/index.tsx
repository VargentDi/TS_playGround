import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainDashBoard from './App';
import { DeviceSingle } from "./components/DeviceSingle";
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Router >
        <div>
        <Route exact path="/" component={MainDashBoard} />
        <Route exact path="/devices" component={DeviceSingle} />
        </div>
      </Router>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
