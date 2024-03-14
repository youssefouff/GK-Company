import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import global_en from './components/en.json';
import global_ar from './components/ar.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation : {escapeValue: false},
  lng: "ar",
  resources: {
    en: {
      global: global_en
    },
    ar: {
      global: global_ar
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

