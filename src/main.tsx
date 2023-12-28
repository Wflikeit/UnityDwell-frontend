import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App.tsx';
import './index.scss';
import { HelmetProvider } from 'react-helmet-async';
import {Auth0Provider} from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="{yourDomain}"
    clientId="{yourClientId}"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  </Auth0Provider>
);
