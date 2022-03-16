import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvider from './contexts';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <AppProvider>
        <AppRoutes />
      </AppProvider>

      <GlobalStyle />
    </Router>
  );
}

export default App;
