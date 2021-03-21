import React from "react";
import { ContainerBaliHistory } from "./style";
import bannerImg from '../../assets/bannerterste.png'
export function BaliHistory() {
  return (
    <ContainerBaliHistory>
      <div className="section-text">
        <div>
          <h2>Crie a sua história vem para o Bali Roleplay.</h2>
          <p>Novidades todos os dias é no Bali! </p>
        </div>
        <img
          src={bannerImg}
          alt="Foto de um Power Juice em um copo"
        />
      </div>
    </ContainerBaliHistory>
  );
}
