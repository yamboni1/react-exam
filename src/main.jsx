import React from 'react'
import ReactDOM from 'react-dom/client'
import Hello from './Hello.jsx'
import Cars from './Cars.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hello />
    <Cars />
  </React.StrictMode>,
)
