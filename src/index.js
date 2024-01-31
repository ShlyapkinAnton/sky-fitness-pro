import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from "./styles/common.styles";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';
import database from './firebase'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
      <ScrollToTop />
    </BrowserRouter>
  </React.StrictMode>
);
