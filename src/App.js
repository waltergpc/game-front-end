import { Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Players from './Pages/Players'
import SignIn from './Pages/SignIn'

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/players' element={<Players />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Navbar>
  )
}

export default App
