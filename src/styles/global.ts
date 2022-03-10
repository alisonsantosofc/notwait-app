import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --orange-500: #FF5733;

    --bg-body: #12283C;

    --boxshadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background: var(--bg-body);
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
