import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Theme, ThemePanel } from '@radix-ui/themes';
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({});
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Theme accentColor='blue' grayColor='gray' >
      <MantineProvider theme={theme}>

        <App />
      </MantineProvider>
      <div className="hidden">
        <ThemePanel />
      </div>

    </Theme>
  </React.StrictMode>,
);
