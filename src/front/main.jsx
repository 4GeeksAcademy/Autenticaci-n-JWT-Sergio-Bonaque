import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  
import AppRoutes from "./routes";  
import { StoreProvider } from './hooks/useGlobalReducer'; 
import { BackendURL } from './components/BackendURL';

const Main = () => {
    // Si falta la URL del backend en el .env, muestra el aviso de 4Geeks
    if(!import.meta.env.VITE_BACKEND_URL || import.meta.env.VITE_BACKEND_URL == "") {
        return <BackendURL />;
    }

    return (
        <React.StrictMode>  
            <StoreProvider> 
                <AppRoutes />
            </StoreProvider>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
