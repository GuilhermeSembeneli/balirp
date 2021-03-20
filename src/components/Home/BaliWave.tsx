import daiamondImg from "../../assets/daiamond.png";
import { ContainerWave } from "./style";
import { Link as LinkScroll } from "react-scroll";
export function BaliWave() {
  return (
    <ContainerWave>
      <div className="box-container">
        <img src={daiamondImg} alt="imagem de um diamante" />
        <div>
          <h2>Conheca os nossos planos vip's.</h2>
          <p>
            <i className="fas fa-bell"></i> Pagamento via Paypal e paysafecard!
          </p>
          <LinkScroll
            className="href"
            to="vip"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Quero ver!
          </LinkScroll>
        </div>
      </div>
    </ContainerWave>
  );
}
