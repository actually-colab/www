import React from "react";
import { Route, Switch, withRouter } from "react-router";

import "./App.global.css";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

const EntryPoint: React.FC = () => {
  return (
    <Switch>
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default withRouter(EntryPoint);
