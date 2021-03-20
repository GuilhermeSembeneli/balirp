import styled from "styled-components";
import backgroundImg from "../../assets/wave.svg";

export const Container = styled.main`
  section {
    margin: 80px 0;
    h2 {
      font-size: 50px;
      color: #4b4b4b;
    }

    p {
      font-size: 20px;
      color: #7c7c7c;
    }
  }
`;

export const ContainerBaliHistory = styled.section`
  .section-text {
    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width: 980px;
    margin: auto;

    img {
      width: 430px;
      border-radius: 1rem;
      margin-top: -3.125rem;
    }
  }
`;

export const ContainerWave = styled.section`
  padding: 13.125rem 0rem 5.188rem;
  position: relative;
  background: none;
  width: 100%;
  background: linear-gradient(to right, #e05656, #f04438);

  &::before {
    position: absolute;
    background-image: url(${backgroundImg});
    -webkit-font-smoothing: antialiased;
    content: "";
    width: 100%;
    height: 100%;
    top: -4px;
    left: 0px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .box-container {
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
    max-width: 1140px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-left: 5rem;
      position: relative;
      width: 35%;
      animation: movetop 6s linear infinite;
    }

    div {
      h2 {
        margin-left: 9rem;
        position: relative;
        color: white;
      }

      p {
        position: relative;
        color: rgba(255, 255, 255, 0.664);
        margin-left: 9rem;
        i {
          animation: bell 1s linear infinite;
          animation-delay: 200ms;
        }
      }

      a {
        position: absolute;
        z-index: 9999;
        margin-left: 9rem;
        margin-top: 0.6rem;
        text-decoration: none;
        font-size: 1.3rem;
        font-weight: 600;
        color: #fff;
        background-color: #c7332800;
        padding: 8px 24px;
        text-decoration: none;
        border-radius: 5px;
        border: 2px solid;
        transition: all 150ms linear 0.1s;
        &::hover {
          background-color: #fff;
          color: rgb(255, 107, 107);
        }
      }
    }
  }

  @keyframes bell {
    0% {
      transform: rotateZ(15deg);
    }
    50% {
      transform: rotateZ(-15deg);
    }
    100% {
      transform: rotateZ(15deg);
    }
  }

  @keyframes movetop {
    0% {
      transform: translateY(15px);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(15px);
    }
  }
`;

export const ContainerVip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3.5rem;
    margin: 0;
    b {
      color: rgb(245, 125, 125);
    }
  }


  .card {
    display: flex;
    align-items: center;
    justify-content: center;

    .card-item{
      width: 360px;
      margin-top: 2.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      
      h2{
        margin: 0;
        padding: 0;
        text-align: center;
        color: #df766e;
      }
      
      p{
        margin: 0;
        padding: 0;
        text-align: center;
      }
    }
  }
`;

export const BoxContainer = styled.section`

`;
export const ContainerItem = styled.div`
`;