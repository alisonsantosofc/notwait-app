import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiAlertTriangle,
  FiSlash,
  FiX,
} from 'react-icons/fi';

import { Container } from './styles';

import { ToastMessage } from '../../../contexts/ToastContext';
import { useToast } from '../../../hooks/useToast';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={26} />,
  success: <FiCheckCircle size={26} />,
  warning: <FiAlertTriangle size={26} />,
  error: <FiSlash size={26} />,
  default: <FiAlertCircle size={26} />,
};

function Toast({ message, style }: ToastProps) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type] || icons.default}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button type="button" onClick={() => removeToast(message.id)}>
        <FiX size={20} />
      </button>
    </Container>
  );
}

export default Toast;
