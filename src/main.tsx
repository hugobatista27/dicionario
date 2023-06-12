import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './mainStyle.css';
import { AppContextProvider } from './contexts/provider.js';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
)
