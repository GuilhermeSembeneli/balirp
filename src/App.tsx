import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Login } from "./components/Login";
import { Cadastro } from "./components/Login/Cadastro";
import { ToastContainer } from "react-toastify";
import { NotFound } from "./NotFound";

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
          <Route path={routes_app.home} exact>
            <Home />
            <Footer />
          </Route>
          <Route path={routes_app.login} exact>
            <Login />
            <Footer />
          </Route>
          <Route path={routes_app.cadastro} exact>
            <Cadastro />
            <Footer />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <ToastContainer />
      </Router>
    </>
  );
}
