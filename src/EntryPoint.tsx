import React from "react";
import { Route, Switch, withRouter } from "react-router";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";

const EntryPoint: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
};

export default withRouter(EntryPoint);
