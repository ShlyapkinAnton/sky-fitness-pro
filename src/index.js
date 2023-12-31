import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ScrollToTop />
    </BrowserRouter>
  </React.StrictMode>
);
