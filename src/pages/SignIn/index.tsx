import React, { useCallback, useContext, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as yup from 'yup';
import { AiOutlineUserAdd, AiFillLock, AiOutlineMail } from 'react-icons/ai';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Content,
  SignInBackground,
  AnimationContainer,
  BrandContainer,
} from './styles';

import { AuthContext } from '../../context/AuthContext';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo-goomind.svg';
import brainImg from '../../assets/brain-image.svg';
import gearImg from '../../assets/gear-image.svg';

interface SignInFormData {
  email: string;
  password: string;
}

function SignIn() {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = yup.object().shape({
          email: yup
            .string()
            .required('O e-mail é obrigatório')
            .email('O e-mail digitado está inválido'),
          password: yup
            .string()
            .required('A senha é obrigatória')
            .min(8, 'Digite no minímo 8 caracteres'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        const errors = getValidationErrors(err as yup.ValidationError);

        formRef.current?.setErrors(errors);
      }
    },
    [signIn]
  );

  return (
    <Container>
      <Content>
        <BrandContainer>
          <img src={logoImg} alt="Goomind" />

          <p>Consultas psicológicas online</p>
        </BrandContainer>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Conecte-se</h1>

          <Input name="email" placeholder="E-mail" icon={AiOutlineMail} />

          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={AiFillLock}
          />

          <Button type="submit">Entrar</Button>

          <a href="/forgot">Esqueci minha senha</a>
        </Form>

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
