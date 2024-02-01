import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
     font-family: "Inter", sans-serif;
    }

    main {
     width: 100%;
     height: 100vh;
     scroll-snap-type: y mandatory;
     overflow-y: scroll;
    }
`;

export default GlobalStyle;
