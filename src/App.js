import { Routes, Route, Router } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import SignIn from './Pages/SignIn'
import { Home } from './Pages/Home'

import './App.css'

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Navbar>
 )
}

export default App
