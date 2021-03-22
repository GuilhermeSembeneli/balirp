import { Header } from "../Header";
import { Container, FormLogin } from "./style";
import LoginImg from "../../assets/logobali.png";
import Title from "../Title";
import { routes_app } from "../../App";
import { api } from "../../services/api";
import React from "react";
import { useStorage } from "../../hooks/useStorage";

export function Cadastro() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setStorage } = useStorage("balirp:token", "");

  
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const {
      data: {content}
    } = await api.post("createuser", {
      email,
      password,
    });
  }

  return (
    <>
      <Title title="Cadastro" />
      <Header link={routes_app.login} text="Login" />
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
            <button type="submit">Cadastrar</button>
          </FormLogin>
        </div>
      </Container>
    </>
  );
}
