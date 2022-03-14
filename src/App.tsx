import React from 'react';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import GlobalStyle from './styles/global';

import AppProvider from './contexts';

function App() {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <GlobalStyle />
    </>
  );
}

export default App;
