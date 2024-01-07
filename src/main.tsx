import ReactDOM from 'react-dom/client';
import React from 'react';
import { WrappedApp } from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);
