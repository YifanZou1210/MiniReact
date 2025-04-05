import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css" // Import Tailwind CSS file
import App from './App.jsx'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)
root.render(<App />)