import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import AppProvider from './app/provider';
import AuthInitializer from './components/common/AuthInitializer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

ReactDom.createRoot(document.getElementById('root')).render(
    <AppProvider>
        <AuthInitializer>
        <App />
        </AuthInitializer>
    </AppProvider>
);