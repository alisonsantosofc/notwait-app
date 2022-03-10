import styled from 'styled-components';
import { lighten, shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const BrandContainer = styled.div`
  p {
    text-align: end;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;

  img {
    width: 350px;
  }

  form {
    width: 340px;
    margin: 5rem 0;
    text-align: center;

    h1 {
      margin-bottom: 1rem;
      color: var(--white-100);
    }

    input {
      width: 100%;
      background: #1b3750;
      padding: 0.8rem;
      border: 2px solid #1b3750;
      border-radius: 0.5rem;
      color: var(--white-100);

      & + input {
        margin-top: 0.8rem;
      }

      &::placeholder {
        color: #4a6a88;
        font-weight: 500;
      }
    }

    input:-webkit-autofill {
      border: 2px solid var(--white-100);
      -webkit-box-shadow: 0 0 0 30px #1b3750 inset;
      -webkit-text-fill-color: var(--white-100) !important;
    }

    button {
      width: 100%;
      height: 56px;
      border: none;
      border-radius: 0.5rem;
      padding: 0 1rem;
      margin-top: 2rem;
      font-weight: 500;
      color: var(--white-100);
      background: #ff5733;
      transition: background 0.2s;

      &:hover {
        background: ${shade(0.1, '#ff5733')};
      }

      &:active {
        background: ${shade(0, '#ff5733')};
      }
    }

    a {
      display: block;
      margin-top: 1rem;
      color: #e9e9e9;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#e9e9e9')};
      }

      &:active {
        color: ${shade(0, '#e9e9e9')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    color: #e9e9e9;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#e9e9e9')};

      svg {
        color: ${shade(0.2, '#ff5733')};
      }
    }

    &:active {
      color: ${shade(0, '#e9e9e9')};

      svg {
        color: ${shade(0, '#ff5733')};
      }
    }

    svg {
      margin-right: 0.5rem;
      font-size: 2rem;
      color: #ff5733;
    }
  }

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const SignInBackground = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1b3750;
  box-shadow: var(--boxshadow);

  @media (max-width: 900px) {
    display: none;
  }
`;

export const AnimationContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;

  .gear {
    position: absolute;
    top: 0;
    right: 2rem;
    width: 35%;
    animation: 15s linear 1s infinite reverse running gear-animation;
  }

  .brain {
    width: 70%;
    margin-right: 8rem;
  }

  @keyframes gear-animation {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
