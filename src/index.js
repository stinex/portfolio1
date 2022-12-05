import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/app.scss'
import ThemeContextWrapper from './theme/ThemeWrapper';
import { LanguageProvider } from './contexts/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <LanguageProvider>
    <ThemeContextWrapper>
      <App />
    </ThemeContextWrapper>
  </LanguageProvider>
);