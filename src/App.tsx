import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Login } from "./components/Login";


export const routes_app = {
  home: "/",
  login: "/login",
};

export function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path={routes_app.login} component={Login} />
          <Route path={routes_app.home} component={Home} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}
