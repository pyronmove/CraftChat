import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Navbar from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import 'remixicon/fonts/remixicon.css'
import Preloader from './components/Preloader.jsx'

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Chatbot from './components/Chatbot.jsx'
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader/>
    <div className='container mx-auto px-4'>
      <Navbar />
      <Chatbot/>
      <App />
      <Footer/>
    </div>
  </StrictMode>,
)
