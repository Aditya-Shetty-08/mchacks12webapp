import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

