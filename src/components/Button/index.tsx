import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...restProps }: ButtonProps) {
  return <Container {...restProps}>{children}</Container>;
}

export default Button;
