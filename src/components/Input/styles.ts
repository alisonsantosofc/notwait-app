import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  background: #1b3750;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 2px solid #1b3750;
  color: #4a6a88;

  & + div {
    margin-top: 0.5rem;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #2fa3f0;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff5733;
      border-color: #ff5733;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff5733;
    `}

  svg {
    margin-right: 0.5rem;
  }

  input {
    width: 90%;
    background: transparent;
    border: 0;
    color: var(--white-100);

    &::placeholder {
      color: #4a6a88;
      font-weight: 500;
    }
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #1b3750 inset;
    -webkit-text-fill-color: var(--white-100) !important;
  }
`;
