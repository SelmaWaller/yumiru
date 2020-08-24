import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/main.scss";

import App from "./App";
import Overview from "./pages/Overview";
import Alphabets from "./pages/Alphabets";
import Nouns from "./pages/Nouns";
import JapanMap from "./pages/JapanMap";

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={Overview}></Route>
        <Route path="/alphabets" component={Alphabets}></Route>
        <Route path="/nouns" component={Nouns}></Route>
        <Route path="/map" component={JapanMap}></Route>
      </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);
