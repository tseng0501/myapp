import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tabel from './view/table';
import Detail from './view/detail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tabel />
    <Detail />
  </React.StrictMode>
);
