import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/main.scss";

import App from "./App";
import LandingPage from "./pages/LandingPage";
import Overview from "./pages/Overview";
import Calendar from "./pages/Calendar";

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/overview" component={Overview}></Route>
      </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);
