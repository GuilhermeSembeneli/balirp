import styled from "styled-components";

interface ContainerProps{
  container: string;

}

export const Container = styled.main<ContainerProps>`
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #df766e;

  .box-login {
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.37);
    width: 25rem;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      width: 530px;
      margin-top: ${props => (
        props.container === 'login' ? '-105px' : '-86px'
      )} 
    }
  }
`;

export const FormLogin = styled.form<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: ${props => (
    props.container === 'login' ? '25px' : '-8px'
  )
  };

  .material-textfield {
    position: relative;
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: gray;
    font-weight: 500;
    font-size: 0.8rem;
    &::hover {
      color: #df766e;
    }
  }

  button {
    outline: none;
  }

  label {
    position: absolute;
    font-size: 1rem;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    color: gray;
    padding: 0 0.3rem;
    margin: 0 0.5rem;
    transition: 0.2s ease-out;
    transform-origin: left top;
    pointer-events: none;
  }

  input {
    font-size: 1rem;
    outline: none;
    border: 2px solid gray;
    border-radius: 5px;
    padding: 1rem 0.7rem;
    color: gray;
    transition: 0.1s ease-out;

    &:focus {
      border-color: #df766e;
    }

    &:focus + label {
      color: #df766e;
      top: 0;
      transform: translateY(-50%) scale(0.9);
    }

    &:not(:placeholder-shown) + label {
      top: 0;
      transform: translateY(-50%) scale(0.9);
    }
  }

  button {
    margin-top: 1rem;
    display: inline-block;
    font-size: 1.3rem;
    font-weight: 600;
    color: #e28680;
    background-color: #c7332800;
    padding: 8px 24px;
    text-decoration: none;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all 150ms linear 0.1s;
  }
`;
