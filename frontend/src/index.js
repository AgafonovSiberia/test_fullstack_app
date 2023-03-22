import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Logo from './Components/Logo/Logo';
import FullWidthGrid from "./Components/Grid/Grid";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
  root.render(
      <React.StrictMode>
    <Logo />
    <FullWidthGrid />
  </React.StrictMode>);
}

setInterval(tick, 100);

reportWebVitals();
