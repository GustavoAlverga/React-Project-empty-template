import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ResetStyles from './app_styles/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResetStyles />
    <App />
  </StrictMode>,
)
