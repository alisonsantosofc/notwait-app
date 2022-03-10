import React from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';

import {
  Container,
  Content,
  SignInBackground,
  AnimationContainer,
  BrandContainer,
} from './styles';

import logoImg from '../../assets/logo-goomind.svg';
import brainImg from '../../assets/brain-image.svg';
import gearImg from '../../assets/gear-image.svg';

function SignIn() {
  return (
    <Container>
      <Content>
        <BrandContainer>
          <img src={logoImg} alt="Goomind" />

          <p>Consultas psicológicas online</p>
        </BrandContainer>

        <form>
          <h1>Conecte-se</h1>

          <input placeholder="E-mail" />

          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="/signup">
          <AiOutlineUserAdd />
          Criar uma conta
        </a>
      </Content>

      <SignInBackground>
        <AnimationContainer>
          <img src={gearImg} alt="Gear" className="gear" />
          <img src={brainImg} alt="Brain" className="brain" />
        </AnimationContainer>
      </SignInBackground>
    </Container>
  );
}

export default SignIn;
