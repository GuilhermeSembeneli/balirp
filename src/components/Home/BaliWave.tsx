import daiamondImg from '../../assets/daiamond.png'
import {ContainerWave} from './style'
export  function BaliWave() {
    return (
        <ContainerWave>
        <div className="box-container">
          <img src={daiamondImg} />
          <div>
            <h2>Conheca os nossos planos vip's.</h2>
            <p><i className="fas fa-bell"></i> Pagamento via Paypal e paysafecard!</p>
          </div>
        </div>
      </ContainerWave>
    )
}
