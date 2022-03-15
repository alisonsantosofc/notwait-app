import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import { shade } from 'polished';

interface ContainerProps {
  type?: 'info' | 'success' | 'warning' | 'error' | 'default';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: #3498db;
  `,
  success: css`
    background: #27ae60;
  `,
  warning: css`
    background: #e67e22;
  `,
  error: css`
    background: #c0392b;
  `,
  default: css`
    background: #484848;
  `,
};

export const Container = styled(animated.div)`
  position: relative;
  display: flex;
  width: 360px;
  padding: 1rem 2rem 1rem 1rem;
  border-radius: 0.5rem;
  box-shadow: var(--boxshadow-bottom-right);

  & + div {
    margin-top: 0.5rem;
  }

  ${({ type }: ContainerProps) => toastTypeVariations[type || 'default']}

  > svg {
    height: auto;
    margin-right: 1rem;
  }

  div {
    flex: 1;

    strong {
      font-weight: 600;
    }

    p {
      margin-top: 0.2rem;
      font-size: 0.9rem;
      opacity: 0.9;
    }
  }

  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    color: inherit;

    &:hover {
      color: ${shade(0.1, '#e9e9e9')};
    }

    &:active {
      color: ${shade(0, '#e9e9e9')};
    }
  }

  ${({ hasDescription }: ContainerProps) =>
    !hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
