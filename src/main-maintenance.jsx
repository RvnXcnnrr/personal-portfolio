import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/global.css'
// Switch between MaintenanceApp and App for maintenance mode
import MaintenanceApp from './MaintenanceApp.jsx'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MaintenanceApp />
  </StrictMode>,
)
