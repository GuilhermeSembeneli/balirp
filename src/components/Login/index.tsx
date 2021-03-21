import { Header } from "../Header/Index";
import { Container, FormLogin } from "./style";
import LoginImg from "../../assets/logobali.png";

export function Login() {
  return (
    <>
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
            <a>Não possui uma conta?</a>
          </FormLogin>
        </div>
      </Container>
    </>
  );
}
