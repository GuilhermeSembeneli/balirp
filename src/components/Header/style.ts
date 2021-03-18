import styled from "styled-components";

export const Container = styled.header`
  box-shadow: 0px 0px 1px 0px var(--background);

  .divFlex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 980px;
    margin: auto;

    img {
      width: 180px;
      padding: 20px 0;
    }

    nav {
      ul {
        display: flex;
      }
      li {
        list-style: none;
      }
      a {
        display: inline-block;
        font-size: 1.3rem;
        font-weight: 600;
        color: #e28680;
        background-color: #c7332800;
        padding: 8px 24px;
        text-decoration: none;
        border-radius: 0.313rem;
        border: 0.125rem solid;
        transition: all 150ms linear 0.1s;

        &:hover {
          background-color: #df766e;
          color: white;
        }
      }
    }
  }
`;
