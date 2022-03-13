import React, { createContext, ReactNode } from 'react';

interface AuthContextData {
  name: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <AuthContext.Provider value={{ name: 'Alison' }}>
      {children}
    </AuthContext.Provider>
  );
}
