
import { ContainerVip } from "./style";


export default function BaliInfoVIp() {
  return (
    <section>
      <ContainerVip>
        <h1>
          Seja <b>Bali!</b>
        </h1>

        <div className="card">
          <div className="card-item">
            <h2>
              <i className="fas fa-gem"></i>
            </h2>
            <h3>Vip's baratos</h3>
            <p>
              Aqui voce enontra vip's de todos os precos e diversas formas de
              pagar
            </p>
          </div>
          <div className="card-item">
            <h2>
              <i className="fas fa-ticket-alt"></i>
            </h2>
            <h3>Suporte rapido</h3>
            <p>
              Suporte sempre disponivel para atender a todos o mais rapido
              possivel!
            </p>
          </div>
          <div className="card-item">
            <h2>
              <i className="fas fa-users"></i>
            </h2>
            <h3>Faça amigos</h3>
            <p>Novas pessoas todos os dias e de todos os lugares!</p>
          </div>
        </div>
      </ContainerVip>
    </section>
  );
}
