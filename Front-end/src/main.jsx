import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals.js';
import App from './App.jsx'
import './index.css'

import { AuthContextProvider } from './context/AuthContext.jsx';
import {BookContextProvider} from './context/BookContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
)

reportWebVitals();
