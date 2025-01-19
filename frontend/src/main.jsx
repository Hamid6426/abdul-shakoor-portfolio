import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/global.css';
import App from './App';
// import './utils/sentry';

// Main render function
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
