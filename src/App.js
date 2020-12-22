import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "routes/index";
import Layout from "components/Layout/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Routes}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
