import React, { createContext, ReactNode, useCallback } from 'react';

import ToastContainer from '../components/ToastContainer';

export interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

interface ToastProviderProps {
  children: ReactNode;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

function ToastProvider({ children }: ToastProviderProps) {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);
  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toastType="error" />
    </ToastContext.Provider>
  );
}

export { ToastContext, ToastProvider };
