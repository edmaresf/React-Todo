import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {PB} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const chart = ReactDOM.createRoot(document.getElementById('chart'));
root.render(<App />);
chart.render(<PB />);


