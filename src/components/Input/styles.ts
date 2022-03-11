import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: #1b3750;
  padding: 0.8rem;
  border: 2px solid #1b3750;
  border-radius: 0.5rem;
  color: #4a6a88;

  & + div {
    margin-top: 0.5rem;
  }

  svg {
    margin-right: 1rem;
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
