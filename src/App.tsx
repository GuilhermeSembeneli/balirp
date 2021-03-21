import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Login } from "./components/Login";
import { Cadastro } from "./components/Cadastro";


export const routes_app = {
  home: "/",
  login: "/login",
  cadastro: "/cadastro",
};

export function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path={routes_app.login} component={Login} />
          <Route path={routes_app.cadastro} component={Cadastro} />
          <Route path={routes_app.home} component={Home} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}
