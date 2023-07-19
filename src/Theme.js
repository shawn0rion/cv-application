import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #eee;
        font-weight: 600;
        font-family: 'Inter', sans-serif;

    }

    #root{
        display: flex;
         margin: 0 auto;
        align-items: start;
  justify-content: center;
      gap: 50px;
        min-height: 100vh;

        height: 100%;
    }
`;

export { GlobalStyle };
