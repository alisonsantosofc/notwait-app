import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiMail, FiLock } from 'react-icons/fi';
import { AiOutlineUserAdd } from 'react-icons/ai';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Content,
  SignInBackground,
  AnimationContainer,
  BrandContainer,
} from './styles';

import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';

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

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('O e-mail é obrigatório')
            .email('O e-mail digitado está inválido'),
          password: Yup.string().required('A senha é obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err as Yup.ValidationError);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro com a sua conexão, verifique as suas informações',
        });
      }
    },
    [signIn, addToast]
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

          <Input name="email" placeholder="E-mail" icon={FiMail} />

          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
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
