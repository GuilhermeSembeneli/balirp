import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: rgb(255,255,255);
    }

    body{
        margin: 0;
        padding: 0;
        font-family: 'Montserrat';
        font-weight: 400;
        background-color: rgb(255,255,255);
    }
    *{
        font-family: 'Montserrat', sans-serif;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%; //calculo: 16px*0.9375 = 15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; //calculo 16px*.875 = 14px
        }
    }

    h1,h2,h3,h4,h5,h6{
        font-weight: 700;
    }

    button: {
        cursor: pointer;
        outline: none;
    }

    [disabled] {
        opacity: .6;
        cursor: not-allowed;
    }
`;
