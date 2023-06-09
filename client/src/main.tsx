import './global.css'
import '../styles/main.css'
import 'virtual:fonts.css'

import { createRoot } from 'react-dom/client'

import App from '../../app/App'

createRoot(document.getElementById('root') as Element).render(<App />)
