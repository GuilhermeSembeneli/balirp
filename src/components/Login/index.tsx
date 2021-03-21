import { Header } from "../Header";
import { Container, FormLogin } from "./style";
import LoginImg from "../../assets/logobali.png";
import Title from "../Title";
import { Link } from "react-router-dom";
import { routes_app } from "../../App";

export function Login() {
  return (
    <>
     <Title title="Login"/>
      <Header linkHref="https://discord.gg/balirp" text="Discord" />
      <Container>
        <div className="box-login">
          <img src={LoginImg} alt="Logo do servidor do bali" />

          <FormLogin>
            <div className="material-textfield">
              <input id="user" placeholder=" " type="text" />
              <label>User</label>
            </div>

            <div className="material-textfield">
              <input id="pass" placeholder=" " type="password" />
              <label>Password</label>
            </div>
            <button type="submit">Entrar</button>
            <Link to={routes_app.cadastro}>Não possui uma conta?</Link>
          </FormLogin>
        </div>
      </Container>
    </>
  );
}
