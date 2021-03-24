import { Header } from "../Header";
import { Container, FormLogin } from "./style";
import LoginImg from "../../assets/logobali.png";
import Title from "../Title";
import { routes_app } from "../../App";
import { api } from "../../services/api";
import React from "react";
import { useStorage } from "../../hooks/useStorage";
import useForm from "../../hooks/useForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";

export function Cadastro() {
  const email = useForm("email");
  const username = useForm();
  const password = useForm("password");
  const { setStorage } = useStorage("balirp:token", "");
  const history = useHistory();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    email.error && toast.error(email.error);
    password.error && toast.error(password.error);

    if (email.value === "" || password.value === "" || username.value === "") {
      toast.error("Preencha os dados corretamente");
      return;
    }

    if (!email.error && !password.error) {
      const {
        data: { user },
      } = await api.post("createuser", {
        email: email.value,
        password: password.value,
        username: username.value,
      });
      toast.success("Conta criada com sucesso!");
      setStorage(user.token);
      history.push(routes_app.login);
    }
  }
  return (
    <>
      <Title title="Cadastro" />
      <Header link={routes_app.login} text="Login" />
      <Container container='cadastro'>
        <div className="box-login">
          <img src={LoginImg} alt="Logo do servidor do bali" />

          <FormLogin onSubmit={handleSubmit} container='cadastro'>
            <div className="material-textfield">
              <input
                id="user"
                placeholder=" "
                type="text"
                value={username.value}
                onChange={username.onChange}
                onBlur={username.onBlur}
              />
              <label>Usuario</label>
            </div>

            <div className="material-textfield">
              <input
                id="email"
                placeholder=" "
                type="text"
                value={email.value}
                onChange={email.onChange}
                onBlur={email.onBlur}
              />
              <label>Email</label>
            </div>

            <div className="material-textfield">
              <input
                id="pass"
                placeholder=" "
                type="password"
                value={password.value}
                onChange={password.onChange}
                onBlur={password.onBlur}
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
