import React, { useCallback, useRef } from 'react';
import { AiFillLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Input';

import getValidationErrors from '../../utils/getValidationErrors';

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
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = yup.object().shape({
        name: yup.string().required('O nome é obrigatório'),
        email: yup
          .string()
          .required('O e-mail é obrigatório')
          .email('Digite um e-mail válido'),
        password: yup.string().min(8, 'Digite no mínimo 8 caracteres'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err as yup.ValidationError);

      formRef.current?.setErrors(errors);
    }
  }, []);

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

        <a href="/signup">
          <BsBoxArrowLeft />
          Voltar para conectar-se
        </a>
      </Content>
    </Container>
  );
}

export default SignUp;
