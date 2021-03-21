
import { routes_app } from "../../App";
import { Header } from "../Header";
import Title from "../Title";
import {BaliHistory} from "./BaliHistory";
import BaliInfoVIp from "./BaliInfoVIp";
import BaliVip from "./BaliVip";
import {BaliWave} from "./BaliWave";
import { Container } from "./style";

export default function Home() {
  return (
    <>
      <Title title="Home"/>
      <Header link={routes_app.login} text="Login" />
      <Container>
        <BaliHistory />
        <BaliWave/>
        <BaliInfoVIp/>
        <BaliVip/>
      </Container>
    </>
  );
}
