import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// HashRouter deliberately, not BrowserRouter: GitHub Pages serves no
// rewrite rules, so a deep-link/direct navigation to a sub-route (which a
// crawler doing real page navigations, not only client-side link clicks,
// may attempt) would 404 under history-based routing. Hash routing always
// resolves to the same index.html regardless of the path after '#'.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
