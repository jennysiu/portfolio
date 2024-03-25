import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// internal imports
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

import './App.css'
import Navbar from "./components/NavBar/CustomNavbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      <Router>
      <Navbar />
        {/* <Header /> */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </Router>

      </div>
    </>
  )
}

export default App
