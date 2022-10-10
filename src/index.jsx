import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import MainContent from './MainContent'
import StoreLinks from './StoreLinks'
import Footer from './Footer'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <MainContent />
    <StoreLinks />
    <Footer />
  </React.StrictMode>
)
