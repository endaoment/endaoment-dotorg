import React from "react";
import Splash from "./splash/splash";
import SignUp from "./splash/signup";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Splash} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
