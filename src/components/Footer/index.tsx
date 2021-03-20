import footerImg from '../../assets/footerlogo.png'
import { Container } from './style'

export default function Footer() {
    return (
        <Container>
        <img src={footerImg} alt="Foto do servidor balirp"/>
        <div>
          <p>Venha criar a sua história!</p>
          <span>Duvida? Entre no discord e abra um ticket.</span>
        </div>
    </Container>
    )
}
