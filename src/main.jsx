import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// apply the saved theme before first paint so there is no flash
document.documentElement.dataset.theme = localStorage.getItem('fmp-theme') || 'light'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
