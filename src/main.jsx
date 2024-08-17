import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'

import { GoogleOAuthProvider } from '@react-oauth/google'
import store from './Store/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <GoogleOAuthProvider clientId='976589933253-50ka3er3avkhigmiv0mj9s4a4h5e4c0u.apps.googleusercontent.com'>
        <App />
      </GoogleOAuthProvider>
    </StrictMode>
  </Provider>
)
