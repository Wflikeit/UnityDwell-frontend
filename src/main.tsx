import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App.tsx';
import './index.scss';
import { HelmetProvider } from 'react-helmet-async';
import { Auth0Provider } from '@auth0/auth0-react';

const clientId = import.meta.env.VITE_CLIENT_ID;
const domain = import.meta.env.VITE_DOMAIN;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: 'http://localhost:8080/',
    }}
  >
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  </Auth0Provider>
);
