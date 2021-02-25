import React from "react";
import { Route, Switch, withRouter } from "react-router";

import LandingPage from "./pages/LandingPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

const EntryPoint: React.FC = () => {
  return (
    <Switch>
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
};

export default withRouter(EntryPoint);
