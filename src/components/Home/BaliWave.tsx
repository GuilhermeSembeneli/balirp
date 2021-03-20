import daiamondImg from '../../assets/daiamond.png'
import {ContainerWave} from './style'
export  function BaliWave() {
    return (
        <ContainerWave>
        <div className="box-container">
          <img src={daiamondImg} alt="imagem de um diamante"/>
          <div>
            <h2>Conheca os nossos planos vip's.</h2>
            <p><i className="fas fa-bell"></i> Pagamento via Paypal e paysafecard!</p>
            <a href="#vip"> Quero ver! </a>
          </div>
        </div>
      </ContainerWave>
    )
}
