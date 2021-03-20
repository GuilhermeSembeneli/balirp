
import {BaliHistory} from "./BaliHistory";
import BaliInfoVIp from "./BaliInfoVIp";
import BaliVip from "./BaliVip";
import {BaliWave} from "./BaliWave";
import { Container } from "./style";

export default function Home() {
  return (
    <>
      <Container>
        <BaliHistory />
        <BaliWave/>
        <BaliInfoVIp/>
        <BaliVip/>
      </Container>
    </>
  );
}
