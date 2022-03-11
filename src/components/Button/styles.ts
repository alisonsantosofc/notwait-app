import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
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
`;
