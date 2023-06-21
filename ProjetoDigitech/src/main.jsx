import { UserContextProvider } from './contexts/UserContext.jsx'
import { ContatosContextProvider } from './contexts/ContatosContext.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import App from './App.jsx'
import { ProdutoContextProvider } from './contexts/ProdutoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContatosContextProvider>
      <UserContextProvider>
        <ProdutoContextProvider>
          <App />
        </ProdutoContextProvider>
      </UserContextProvider>
    </ContatosContextProvider>
  </React.StrictMode>,
)