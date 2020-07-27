import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/main.scss";

import App from "./App";
import Overview from "./pages/Overview";
import Alphabets from "./pages/Alphabets";
import Words from "./pages/Words";

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={Overview}></Route>
        <Route path="/alphabets" component={Alphabets}></Route>
        <Route path="/words" component={Words}></Route>
      </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);
