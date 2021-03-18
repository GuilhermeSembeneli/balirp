import styled from "styled-components";

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


    img{
        width: 430px;
        border-radius: 1rem;
        margin-top: -3.125rem;
    }
  }
`;
