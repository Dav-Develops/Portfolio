import ReactDom from 'react-dom/client';
import App from './App';
import AppProvider from './AppProvider';

ReactDom.createRoot(document.getElementById('root')).render(
    <AppProvider>
        <App />
    </AppProvider>
);