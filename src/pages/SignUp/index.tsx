import React from 'react';
import { AiFillLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { Form } from '@unform/web';

import Button from '../../components/Button';
import Input from '../../components/Input';

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

function SignUp() {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <SignInBackground>
        <AnimationContainer>
          <img src={gearImg} alt="Gear" className="gear" />
          <img src={brainImg} alt="Brain" className="brain" />
        </AnimationContainer>
      </SignInBackground>

      <Content>
        <BrandContainer>
          <img src={logoImg} alt="Goomind" />

          <p>Consultas psicológicas online</p>
        </BrandContainer>

        <Form onSubmit={handleSubmit}>
          <h1>Cadastre-se</h1>

          <Input name="name" placeholder="Nome" icon={AiOutlineUser} />
          <Input name="email" placeholder="E-mail" icon={AiOutlineMail} />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={AiFillLock}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="/signup">
          <BsBoxArrowLeft />
          Voltar para conectar-se
        </a>
      </Content>
    </Container>
  );
}

export default SignUp;
