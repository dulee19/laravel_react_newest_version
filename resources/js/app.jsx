import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './bootstrap';
import '../css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import ReactDOM from 'react-dom/client'; 
import Main from './components/Main';

ReactDOM.createRoot(document.getElementById('app')).render(     
    <Router>
        <Main />
    </Router>
);