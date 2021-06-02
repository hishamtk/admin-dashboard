import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Admin from "./layouts/Admin.js"

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
