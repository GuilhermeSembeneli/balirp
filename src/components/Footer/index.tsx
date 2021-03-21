import footerImg from "../../assets/footerlogo.png";
import { Container } from "./style";
import { Link as LinkScroll } from "react-scroll";
export default function Footer() {
  return (
    <Container>
      <a href="https://discord.gg/balirp" target="_blank" rel="noreferrer">
        <img src={footerImg} alt="Foto do servidor balirp" />
      </a>
      
      <div>
        <p>Venha criar a sua história!</p>
        <span>Duvida? Entre no discord e abra um ticket.</span>
      </div>
      <LinkScroll
        className="buttontop"
        to="header"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <i className="fas fa-arrow-up"></i>
      </LinkScroll>
    </Container>
  );
}
