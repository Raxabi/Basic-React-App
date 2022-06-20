import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react"
// Files
import ColorThemeConfig from "./config/ColorTheme"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={ColorThemeConfig}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);