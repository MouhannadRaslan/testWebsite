import './App.css'

import React from 'react'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Landing from './components/Landing'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/landing' element={<Landing/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
