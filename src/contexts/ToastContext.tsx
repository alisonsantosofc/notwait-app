import React, { createContext, ReactNode, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';

import ToastContainer from '../components/ToastContainer';

export interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

interface ToastProviderProps {
  children: ReactNode;
}

export interface ToastMessage {
  id: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

function ToastProvider({ children }: ToastProviderProps) {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages(oldMessages => [...messages, toast]);
    },
    [messages]
  );

  const removeToast = useCallback((id: string) => {
    setMessages(oldMessages =>
      oldMessages.filter(message => message.id !== id)
    );
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
}

export { ToastContext, ToastProvider };
