import styled from "styled-components";
import { routes_app } from "./App";
import { Header } from "./components/Header";

const Container = styled.main`
  background-color: #df766e;
  color: #ffffff;
  width: 100%;
  height: 100vh;
  position: absolute;
  
    div {
      width: 90%;
      max-width: 980px;
      position: relative;
      margin: auto;
      margin-top: 4rem;
      text-align: center;
      h1 {
        font-family: "Open Sans", sans-serif;
        margin: 0;
        font-size: 16.563rem;
        font-weight: bold;
      }

      h2 {
        margin: 0;
        font-size: 3.125rem;
        font-weight: bold;
      }

      p {
        font-size: 2.125rem;
        font-weight: 404;
      }
    }
  
`;
export function NotFound() {
  return (
    <>
      <Header link={routes_app.login} text="Voltar" />

      <Container>
        <div>
          <h1>404</h1>
          <h2>Ooops!</h2>
          <p>Não conseguimos encontrar sua pagina!</p>
        </div>
      </Container>
    </>
  );
}
