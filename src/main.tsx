import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'
import './styles/orbital.css'
import './styles/iso.css'
import './styles/marquee.css'
import './styles/studio.css'

const root = document.getElementById('root')
if (!root) throw new Error('Root element missing')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
