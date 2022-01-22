import { Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Players from './Pages/Players'
import SignIn from './Pages/SignIn'
import { Home } from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import UpdateUser from './Pages/UpdateUser'

import './App.css'
import HallFame from './Pages/HallFame'

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/players' element={<Players />} />
        <Route path='/hof' element={<HallFame />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/update-user' element={<UpdateUser />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Navbar>
  )
}

export default App
