import React from 'react';
import { FiAlertCircle, FiX } from 'react-icons/fi';

import { ToastMessage } from '../../contexts/ToastContext';

import { Container, Toast } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
  // toastType?: 'info' | 'success' | 'warning' | 'error';
}

function ToastContainer({ messages }: ToastContainerProps) {
  return (
    <Container>
      {messages.map(message => (
        <Toast
          key={message.id}
          type={message.type}
          hasDescription={!!message.description}
        >
          <FiAlertCircle size={26} />

          <div>
            <strong>{message.title}</strong>
            {message.description && <p>{message.description}</p>}
          </div>

          <button type="button">
            <FiX size={20} />
          </button>
        </Toast>
      ))}
    </Container>
  );
}

export default ToastContainer;
