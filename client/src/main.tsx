import './styles/global.css'
import './styles/main.css'
import 'virtual:fonts.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './components/App'

createRoot(document.getElementById('root') as Element).render(<App />)
