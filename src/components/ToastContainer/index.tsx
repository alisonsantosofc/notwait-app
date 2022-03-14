import React from 'react';
import { FiAlertCircle, FiX } from 'react-icons/fi';
import { Container, Toast } from './styles';

interface ToastContainerProps {
  toastType?: 'info' | 'success' | 'warning' | 'error';
}

function ToastContainer({ toastType }: ToastContainerProps) {
  return (
    <Container>
      <Toast type="info" hasDescription>
        <FiAlertCircle size={22} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer o login</p>
        </div>

        <button type="button">
          <FiX size={20} />
        </button>
      </Toast>

      <Toast type="warning" hasDescription={false}>
        <FiAlertCircle size={22} />

        <div>
          <strong>Aconteceu um erro</strong>
        </div>

        <button type="button">
          <FiX size={20} />
        </button>
      </Toast>

      <Toast type="success" hasDescription={false}>
        <FiAlertCircle size={22} />

        <div>
          <strong>Aconteceu um erro</strong>
        </div>

        <button type="button">
          <FiX size={20} />
        </button>
      </Toast>

      <Toast type="error" hasDescription>
        <FiAlertCircle size={22} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer o login</p>
        </div>

        <button type="button">
          <FiX size={20} />
        </button>
      </Toast>
    </Container>
  );
}

export default ToastContainer;
