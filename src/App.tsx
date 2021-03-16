import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";

export const routes_app = {
  home: '/',
  cadastro: '/cadastro'
}
export function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={routes_app.home} component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}
