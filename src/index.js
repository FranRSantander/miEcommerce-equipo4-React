import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import OnClickOutsideProvider from './context/OnClickOutsideContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OnClickOutsideProvider>
        <App />
    </OnClickOutsideProvider>
  </React.StrictMode>
);

reportWebVitals();
