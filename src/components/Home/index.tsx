import React from "react";
import { routes_app } from "../../App";
import { Header } from "../Header/Index";
import {BaliHistory} from "./BaliHistory";
import {BaliWave} from "./BaliWave";
import { Container } from "./style";

export default function Home() {
  return (
    <>
      <Header link={routes_app.login} text="Login" />
      <Container>
        <BaliHistory />
        <BaliWave/>
      </Container>
    </>
  );
}
