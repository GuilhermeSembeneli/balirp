import { Header } from "../Header";
import { Container, FormLogin } from "./style";
import LoginImg from "../../assets/logobali.png";
import Title from "../Title";
import { Link } from "react-router-dom";
import { routes_app } from "../../App";
import { api } from "../../services/api";
import React from "react";


export function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const {data} = await api.post("login", {
      email,
      password,
    });
   
  }
  return (
    <>
      <Title title="Login" />
      <Header linkHref="https://discord.gg/balirp" text="Discord" />
      <Container>
        <div className="box-login">
          <img src={LoginImg} alt="Logo do servidor do bali" />

          <FormLogin onSubmit={handleSubmit}>
            <div className="material-textfield">
              <input
                id="user"
                placeholder=" "
                type="text"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
              <label>Email</label>
            </div>

            <div className="material-textfield">
              <input
                id="pass"
                placeholder=" "
                type="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
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
