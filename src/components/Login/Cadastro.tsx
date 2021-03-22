import { Header } from "../Header";
import { Container, FormLogin } from "./style";
import LoginImg from "../../assets/logobali.png";
import Title from "../Title";
import { routes_app } from "../../App";
import { api } from "../../services/api";
import React from "react";
import { useStorage } from "../../hooks/useStorage";
import useForm from "../../hooks/useForm";

export function Cadastro() {
  const email = useForm('email')
  const password = useForm('password')
  const { setStorage } = useStorage("balirp:token", "");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const {
      data: {content}
    } = await api.post("createuser", {
      email: email.value,
      password: password.value,
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
                {...email}
              />
              <label>Email</label>
            </div>

            <div className="material-textfield">
              <input
                id="pass"
                placeholder=" "
                type="password"
                {...password}
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
