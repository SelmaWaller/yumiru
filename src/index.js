import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/main.scss";

import App from "./App";
import LandingPage from "./pages/LandingPage";

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={LandingPage}></Route>
      </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);
