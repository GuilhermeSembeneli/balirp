import { routes_app } from "./App";
import { Header } from "./components/Header";

export function NotFound() {
  return (
    <>
      <Header link={routes_app.login} text="Voltar" />
    </>
  );
}
