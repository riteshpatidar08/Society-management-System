import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// NOTE  role => null  api call success => role : 'admin' => role ? ui;
// NOTE count = 0   increment =>  count + 1 => 0 to 1 ;

