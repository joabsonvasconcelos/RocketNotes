import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';

import { MyContext } from './myContext';


import theme from './styles/theme';

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
        <MyContext>
          <Routes />
        </MyContext>
    </ThemeProvider>
  </React.StrictMode>,
)
