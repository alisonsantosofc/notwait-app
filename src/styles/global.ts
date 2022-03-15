import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --orange-500: #ff5733;
    --blue-500:#2fa3f0;
    --blueGray-500: #4a6a88;
    --blueGray-600: #1b3750;
    --white-100: #e9e9e9;

    --bg-body: #12283C;
    --bg-input: #0f2132;

    --boxshadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.15);

    --boxshadow-bottom-right: 2px 2px 12px rgba(0, 0, 0, 0.2);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background: var(--bg-body);
    color: var(--white-100);
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

  .absolute {
    position: absolute;
  }
`;
