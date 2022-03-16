import React, { useCallback, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Content,
  SignInBackground,
  AnimationContainer,
  BackgroundAnimationContainer,
  BrandContainer,
} from './styles';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo-goomind.svg';
import brainImg from '../../assets/brain-image.svg';
import gearImg from '../../assets/gear-image.svg';
import { useToast } from '../../hooks/useToast';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

function SignUp() {
  const formRef = useRef<FormHandles>(null);

  const navigate = useNavigate();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('O nome é obrigatório'),
          email: Yup.string()
            .required('O e-mail é obrigatório')
            .email('O e-mail digitado está inválido'),
          password: Yup.string().min(8, 'Digite no mínimo 8 caracteres'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        navigate('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado',
          description: 'Agora você já pode se conectar ao Goomind',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err as Yup.ValidationError);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description:
            'Ocorreu um erro ao fazer o cadastro, verifique as informações e tente novamente',
        });
      }
    },
    [addToast, navigate]
  );

  return (
    <Container>
      <SignInBackground>
        <BackgroundAnimationContainer>
          <img src={gearImg} alt="Gear" className="gear" />
          <img src={brainImg} alt="Brain" className="brain" />
        </BackgroundAnimationContainer>
      </SignInBackground>

      <Content>
        <AnimationContainer>
          <BrandContainer>
            <img src={logoImg} alt="Goomind" />

            <p>Consultas psicológicas online</p>
          </BrandContainer>

          <Form ref={formRef} onSubmit={handleSubmit}>
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

          <Link to="/">
            <BsBoxArrowLeft />
            Voltar para conectar-se
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default SignUp;
