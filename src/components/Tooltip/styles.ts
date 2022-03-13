import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  color: #fff;

  &:hover {
    span {
      visibility: visible;
      opacity: 1;
    }
  }

  svg {
    display: flex;
    color: #2fa3f0;
    font-size: 1.2rem;
    margin-left: 0.5rem;
  }

  span {
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 160px;
    background: var(--orange-500);
    padding: 0.5rem;
    margin-bottom: 0.2rem;
    border-radius: 0.25rem;
    font-size: 0.8rem;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.5s;
    visibility: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-30%);
      border-style: solid;
      border-color: var(--orange-500) transparent;
      border-width: 8px 8px 0 8px;
    }
  }
`;
