import React, { useState, useEffect } from 'react';
import { useTransition, config } from 'react-spring';

import Toast from './Toast';

import { Container } from './styles';

import { ToastMessage } from '../../contexts/ToastContext';

interface ToastContainerProps {
  messages: ToastMessage[];
}

function ToastContainer({ messages }: ToastContainerProps) {
  const [items, setItems] = useState([]);

  const transitions = useTransition(items, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
    config: config.slow,
    onDestroyed: () => setItems(messages),
  });

  useEffect(() => {
    setItems(messages);
  }, [messages]);

  return (
    <Container>
      {transitions((styles, item) => (
        <Toast key={item.id} message={item} style={styles} />
      ))}
    </Container>
  );
}

export default ToastContainer;
