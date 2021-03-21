import React from "react";
import Splash from "./splash/splash";
import SignUp from "./splash/signup";
import { Router, Route, Switch } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";

import history from "./history";

function App() {
  return (
    <HttpsRedirect>
      <Router history={history}>
        <Switch>
          {window.location.replace("https://app.endaoment.org")}
          <Route path="/" exact component={Splash} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </Router>
    </HttpsRedirect>
  );
}

export default App;
