import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 10rem;
  }

  p {
    color: #e05656;
    font-size: 3rem;
    font-weight: 800;
    margin: 0 0 0 -9px;
  }

  span {
    color: #7c7c7c;
  }

  .buttontop{
        position: absolute;
        right: 2rem;
        bottom: 2rem;
        z-index: 9999;
        background: #fff;
        border: none;
        border-radius: 100%;
        padding: 1rem;
        width: 1rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 0 1em rgba(0, 0, 0, 0.479);
        color: #e05656;
    }
`;
