import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './contextApi/context.jsx' // wrapper 

createRoot(document.getElementById('root')).render(
  <UserProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </UserProvider>
)
